<?php

/**
 * Endpoint for processing contact form submissions and sending notification emails via PHP mail().
 */

$config = require_once __DIR__ . '/config.php';
require_once __DIR__ . '/templates/emailTemplate.php';

switch ($_SERVER['REQUEST_METHOD']) {
    // 1. Handle CORS Preflight Requests
    case "OPTIONS":
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST, OPTIONS");
        header("Access-Control-Allow-Headers: Content-Type");
        http_response_code(200);
        exit;

    // 2. Process Contact Form Submission
    case "POST":
        header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/json; charset=UTF-8");
        
        // Read raw JSON payload from frontend
        $json = file_get_contents('php://input');
        $params = json_decode($json);

        // Honeypot check: Catch bot submissions (matches frontend 'honeypot' or 'website_hp')
        $honeypot = $params->honeypot ?? $params->website_hp ?? $params->website ?? '';
        if (!empty($honeypot)) {
            // Silently discard bot submission with 200 OK
            http_response_code(200); 
            echo json_encode(["status" => "success"]);
            exit;
        }

        // Sanitize & validate incoming fields
        $email = filter_var($params->email ?? '', FILTER_VALIDATE_EMAIL);
        $name  = htmlspecialchars(trim($params->name ?? 'Anonymous'), ENT_QUOTES, 'UTF-8');
        $text  = htmlspecialchars(trim($params->message ?? ''), ENT_QUOTES, 'UTF-8');

        if (!$email || empty($text)) {
            http_response_code(400);
            echo json_encode(["status" => "error", "message" => "Invalid input data"]);
            exit;
        }

        // Render HTML email template
        $rawMessage = $params->message ?? '';
        $emailBody  = renderEmailTemplate($name, $email, $text, $rawMessage);
        $subject    = "{$config['app_name']}: $name";

        // Construct standard MIME headers
        $headers = [
            'MIME-Version: 1.0',
            'Content-type: text/html; charset=utf-8',
            "From: {$config['from_email']}",
            "Reply-To: $email"
        ];

        // Send email via PHP native mailer
        $success = mail($config['recipient_email'], $subject, $emailBody, implode("\r\n", $headers));

        if ($success) {
            http_response_code(200);
            echo json_encode(["status" => "success"]);
        } else {
            http_response_code(500);
            echo json_encode(["status" => "error", "message" => "Failed to send email"]);
        }
        break;

    // 3. Reject Unsupported HTTP Methods
    default:
        header("Allow: POST, OPTIONS", true, 405);
        http_response_code(405);
        echo json_encode(["status" => "error", "message" => "Method Not Allowed"]);
        exit;
}