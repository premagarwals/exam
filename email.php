$to = "recipient@example.com";
$subject = "Subject of the email";
$message = "This is the body of the email.";

$headers = "From: sender@example.com\r\n";
$headers .= "Reply-To: sender@example.com\r\n";
$headers .= "CC: cc@example.com\r\n";
$headers .= "BCC: bcc@example.com\r\n";

// Send email
$mailSent = mail($to, $subject, $message, $headers);

if ($mailSent) {
    echo "Email sent successfully";
} else {
    echo "Email sending failed";
}
