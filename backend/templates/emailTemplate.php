<?php

/**
 * Renders an HTML email template for portfolio contact submissions with dark theme styling.
 *
 * @param string $name Name of the sender
 * @param string $email Email address of the sender
 * @param string $text Message content from the contact form
 * @param string $paramsMessage Plain text copy for mailto pre-filled body
 * @return string HTML email content
 */
function renderEmailTemplate(string $name, string $email, string $text, string $paramsMessage): string {
    // Sanitize input values for HTML output safety
    $safeName  = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
    $safeEmail = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');

    // Pre-fill reply parameters using rawurlencode (%20 for spaces)
    $replySubject = rawurlencode("Re: Portfolio Contact from $name");
    $replyBody    = rawurlencode("\n\n---\nOriginal message from $name ($email):\n" . $paramsMessage);
    $mailtoLink   = "mailto:" . rawurlencode($email) . "?subject=$replySubject&body=$replyBody";

    // Clean message body and format line breaks for HTML rendering
    $formattedText = nl2br(htmlspecialchars(trim($text), ENT_QUOTES, 'UTF-8'));

    return "
    <div style='width: 100%; height: 100%; background-color: #fff; font-family: ui-sans-serif, system-ui, -apple-system, sans-serif;'>
        <div style='background-color: #020617; color: #f8fafc; padding: 28px; max-width: 800px; margin: 0 auto; border: 1px solid #1e293b; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.5);'>
            
            <!-- Email Header -->
            <div style='margin-bottom: 20px;'>
                <span style='font-family: monospace; color: #3b82f6; font-size: 12px;'>// Portfolio Contact Message</span>
                <h2 style='margin: 6px 0 0 0; color: #ffffff; font-size: 20px;'>New message from {$safeName}</h2>
            </div>

            <!-- Message Card -->
            <div style='background-color: #0f172a; border: 1px solid #1e293b; padding: 18px; border-radius: 8px; margin-bottom: 24px;'>
                <div style='font-family: monospace; font-size: 12px; color: #64748b; margin-bottom: 12px;'>
                    <span style='color: #3b82f6;'>From:</span> {$safeName} ({$safeEmail})
                </div>
                <div style='font-size: 14px; line-height: 1.6; color: #cbd5e1;'>{$formattedText}</div>
            </div>

            <!-- Quick Reply CTA -->
            <div style='border-top: 1px solid #1e293b; padding-top: 20px; text-align: center;'>
                <a href='{$mailtoLink}' style='display: inline-block; padding: 12px 24px; background-color: #2563eb; color: #ffffff; font-weight: 500; text-decoration: none; border-radius: 8px; font-size: 13px; font-family: monospace;'>
                    ➜ Quick Reply
                </a>
            </div>

        </div>
    </div>
    ";
}