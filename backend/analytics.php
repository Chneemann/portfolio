<?php
$startTime = microtime(true);

// CORS Config
$allowedOrigins = ['https://andre-kempf.com', 'https://www.andre-kempf.com', 'http://localhost:3000'];
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';

if (in_array($origin, $allowedOrigins)) {
    header("Access-Control-Allow-Origin: " . $origin);
} else {
    header("Access-Control-Allow-Origin: https://andre-kempf.com");
}

header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

ini_set('display_errors', 0);
error_reporting(E_ALL);

if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

$dataFile = __DIR__ . '/analytics.json';

// Essential data structure + lastPing
$data = [
    'totalViews' => 0,
    'todayViews' => 0,
    'lastDate' => date('Y-m-d'),
    'lastPing' => time(),
    'visitors' => [],
    'devices' => ['Desktop' => 0, 'Mobile' => 0]
];

// Load existing data
if (file_exists($dataFile)) {
    $content = @file_get_contents($dataFile);
    if ($content) {
        $loadedData = @json_decode($content, true);
        if (is_array($loadedData)) {
            $data = array_merge($data, $loadedData);
        }
    }
}

// Reset daily stats if day changed
$today = date('Y-m-d');
if ($data['lastDate'] !== $today) {
    $data['todayViews'] = 0;
    $data['lastDate'] = $today;
    $data['visitors'] = [];
}

// Localhost / Development check
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
$isSpam = ($currentTime - $lastTrackTime) < 30;

// Track view
if (isset($_GET['track']) && $_GET['track'] === 'true' && !$isLocalhost && !$isSpam) {
    $_SESSION['last_track_time'] = $currentTime;

    $data['totalViews']++;
    $data['todayViews']++;
    $data['lastPing'] = $currentTime;

    $ua = $_SERVER['HTTP_USER_AGENT'] ?? '';
    $isMobile = preg_match('/mobile|android|iphone|ipad|tablet/i', $ua);
    $deviceType = $isMobile ? 'Mobile' : 'Desktop';
    $data['devices'][$deviceType] = ($data['devices'][$deviceType] ?? 0) + 1;

    $visitorHash = md5($ip . $today);
    if (!in_array($visitorHash, $data['visitors'])) {
        $data['visitors'][] = $visitorHash;
    }

    @file_put_contents($dataFile, json_encode($data), LOCK_EX);
}

// Calculate server execution time (ms)
$responseTime = round((microtime(true) - $startTime) * 1000, 2);

echo json_encode([
    'totalViews' => $data['totalViews'],
    'todayViews' => $data['todayViews'],
    'uniqueVisitors' => count($data['visitors']),
    'devices' => $data['devices'],
    'lastPing' => $data['lastPing'] ?? time(),
    'latencyMs' => $responseTime
]);