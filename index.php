<?php 
	$name = $_POST['name'];
	$email = $_POST['email'];
	$subject = $_POST['subject']
	$message = $_POST['message'];
	$from = 'From: joshting.com';
	$to = 'joshting1@gmail.com';

	$body = "From: $name\n Email: $email\n Message:\n $message";

	if ($_POST['submit']) {
	if (mail ($to, $subject, $body, $from)) {
		echo '<p>Your message has been sent!</p>';
	} else {
		echo '<p>Something went wrong, go back and try again!</p>';
	}
}
?>