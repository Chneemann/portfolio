<?php

/**
 * Privacy-friendly, self-hosted web analytics tracking endpoint.
 * Provides basic view counts, anonymized daily unique visitors, device categories, and server execution metrics.
 */

$startTime = microtime(true);

// 1. CORS Headers & Preflight Handling
$allowedOrigins = ['https://andre-kempf.com', 'https://www.andre-kempf.com', 'http://localhost:3000'];
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';

if (in_array($origin, $allowedOrigins, true)) {
    header("Access-Control-Allow-Origin: " . $origin);
} else {
    header("Access-Control-Allow-Origin: https://andre-kempf.com");
}

header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

// Handle HTTP OPTIONS preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// 2. Error Reporting & Session Initialization
ini_set('display_errors', 0);
error_reporting(E_ALL);

if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

// 3. Storage & Default Data Structure
$dataFile = __DIR__ . '/analytics.json';

$data = [
    'totalViews' => 0,
    'todayViews' => 0,
    'lastDate' => date('Y-m-d'),
    'lastPing' => time(),
    'visitors' => [],
    'devices' => ['Desktop' => 0, 'Mobile' => 0]
];

// Load existing analytics JSON data
if (file_exists($dataFile)) {
    $content = @file_get_contents($dataFile);
    if ($content) {
        $loadedData = @json_decode($content, true);
        if (is_array($loadedData)) {
            $data = array_merge($data, $loadedData);
        }
    }
}

// 4. Daily Reset Logic
$today = date('Y-m-d');
if ($data['lastDate'] !== $today) {
    $data['todayViews'] = 0;
    $data['lastDate'] = $today;
    $data['visitors'] = [];
}

// 5. Environment & Rate-Limiting Checks
$referer = $_SERVER['HTTP_REFERER'] ?? '';
$ip = $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0';

$isLocalhost = (
    strpos($origin, 'localhost') !== false ||
    strpos($referer, 'localhost') !== false ||
    $ip === '127.0.0.1' ||
    $ip === '::1'
);

$lastTrackTime = $_SESSION['last_track_time'] ?? 0;
$currentTime = time();
$isSpam = ($currentTime - $lastTrackTime) < 30; // 30-second cooldown per session

// 6. Analytics Tracking Execution
if (isset($_GET['track']) && $_GET['track'] === 'true' && !$isLocalhost && !$isSpam) {
    $_SESSION['last_track_time'] = $currentTime;

    $data['totalViews']++;
    $data['todayViews']++;
    $data['lastPing'] = $currentTime;

    // Detect coarse device category
    $ua = $_SERVER['HTTP_USER_AGENT'] ?? '';
    $isMobile = preg_match('/mobile|android|iphone|ipad|tablet/i', $ua);
    $deviceType = $isMobile ? 'Mobile' : 'Desktop';
    $data['devices'][$deviceType] = ($data['devices'][$deviceType] ?? 0) + 1;

    // Hash IP address with daily salt for anonymized unique visitor tracking
    $visitorHash = md5($ip . $today);
    if (!in_array($visitorHash, $data['visitors'], true)) {
        $data['visitors'][] = $visitorHash;
    }

    // Atomic file save to prevent race condition corruption
    @file_put_contents($dataFile, json_encode($data), LOCK_EX);
}

// 7. Calculate Server Execution Latency
$responseTime = round((microtime(true) - $startTime) * 1000, 2);

// 8. Output Metrics Payload
echo json_encode([
    'totalViews' => $data['totalViews'],
    'todayViews' => $data['todayViews'],
    'uniqueVisitors' => count($data['visitors']),
    'devices' => $data['devices'],
    'lastPing' => $data['lastPing'] ?? time(),
    'latencyMs' => $responseTime
]);