<?php
session_start();
require_once 'db_connection.php';
require '../../app/libs/PHPMailer-master/PHPMailerAutoload.php';

$data = json_decode(file_get_contents("php://input"));

$name = pg_escape_string($con, $data->name);
$email = pg_escape_string($con, $data->email);
$text = pg_escape_string($con, $data->text);

$new_email = "You have new message from <b>$name</b> $email <br><br> $text ";


$query = pg_query("INSERT INTO public.email(name, email, message) VALUES ('$name', '$email', '$text')");

$mail = new PHPMailer(true);

// $mail->SMTPDebug = 1;                              // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  					  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'fortestingprojectcs@gmail.com';    // SMTP username
$mail->Password = 'fortestingsystem';                 // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;                                    // TCP port to connect to //or 587

$mail->setFrom('wau-prikol-agency@gmail.com', 'Wau Prikol Agency');   // System email & name
$mail->addAddress('rebit1love@gmail.com', 'Romek');       // Add a recipient name is optional
// $mail->addAddress('stoyko92@gmail.com', 'Gleb');
$mail->addReplyTo('wau-prikol-agency@gmail.com', 'New message');
// $mail->AddCC('infest0final@gmail.com', 'Mykola');

$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'New message';
$mail->Body    = $new_email;
// $mail->AltBody = $new_user;

$mail->send();

echo "true";

?>