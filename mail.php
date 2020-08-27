<?php

$recepient = "andre061120@gmail.com";
$sitename = "Home";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$subject = trim($_POST["subject"]);
$company = trim($_POST["company"]);
$textarea = trim($_POST["textarea"]);
$message = "Name: $name \nE-mail: $email \nSubject: $subject \nCompany: $company \nTextarea: $textarea";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");