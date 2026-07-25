<?php

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"): // Allow preflighting to take place.
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;

    case ("POST"): // Send the email
        header("Access-Control-Allow-Origin: *");
        
        // Payload is sent to php://input as raw JSON text
        $json = file_get_contents('php://input');
        $params = json_decode($json);

        // Honeypot check
        if (!empty($params->website)) {
            http_response_code(200); 
            exit;
        }

        // Extract values
        $email   = $params->email;
        $name    = $params->name;
        $message = $params->message;

        $recipient = 'dev@andre-kempf.com';  
        $subject   = "Contact Form <$email>";
        $message   = "From: $name<br> Email: $email <br><br>$message";

        $headers   = array();
        $headers[] = 'MIME-Version: 1.0';
        $headers[] = 'Content-type: text/html; charset=utf-8';
        $headers[] = "From: noreply@andre-kempf.com";

        mail($recipient, $subject, $message, implode("\r\n", $headers));
        break;

    default: // Reject non-POST or OPTIONS requests.
        header("Allow: POST", true, 405);
        exit;
}