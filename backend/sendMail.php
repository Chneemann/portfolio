<?php

$config = require_once __DIR__ . '/config.php';
require_once __DIR__ . '/templates/emailTemplate.php';

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"): // Allow preflight requests
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: Content-Type");
        exit;

    case ("POST"): // Handle and send the email
        header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/json; charset=UTF-8");
        
        // Read raw JSON payload
        $json = file_get_contents('php://input');
        $params = json_decode($json);

        // 1. Honeypot check for spam protection
        if (!empty($params->website)) {
            http_response_code(200); 
            echo json_encode(["status" => "success"]);
            exit;
        }

        // 2. Sanitize inputs & set fallbacks
        $email   = filter_var($params->email ?? '', FILTER_VALIDATE_EMAIL);
        $name    = htmlspecialchars(trim($params->name ?? 'Anonymous'), ENT_QUOTES, 'UTF-8');
        $text    = htmlspecialchars(trim($params->message ?? ''), ENT_QUOTES, 'UTF-8');

        // Validate required fields
        if (!$email || empty($text)) {
            http_response_code(400);
            echo json_encode(["status" => "error", "message" => "Invalid input"]);
            exit;
        }

        // 3. Render template
        $emailBody = renderEmailTemplate($name, $email, $text, $params->message ?? '');
        $subject   = "{$config['app_name']}: $name";

        // 4. Set headers
        $headers   = [
            'MIME-Version: 1.0',
            'Content-type: text/html; charset=utf-8',
            "From: {$config['from_email']}",
            "Reply-To: $email"
        ];

        // Send email
        $success = mail($config['recipient_email'], $subject, $emailBody, implode("\n", $headers));

        if ($success) {
            http_response_code(200);
            echo json_encode(["status" => "success"]);
        } else {
            http_response_code(500);
            echo json_encode(["status" => "error"]);
        }
        break;

    default: // Reject any other HTTP method
        header("Allow: POST", true, 405);
        exit;
}