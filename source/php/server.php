<?php 

$name = $_POST['user-name'];
$email = $_POST['user-email'];
$message = $_POST['user-message'];


$mail_message = '
<head>
    <title>Form order</title>
</head>
<body>
<ul>
    <li>Name: '. $name . '</li>
    <li>email: '. $email . '</li>
    <li>email: '. $message . '</li>
</ul>
    
</body>
</html>';

$headers = "From: Pavel <sales@partzstop.com>\r\n".
"MIME-Version: 1.0" . "\r\n" .
"Content-type: text/html; charset=UTF-8" . "\r\n";
$mail = mail('dubstr1@gmail.com', 'Order', $mail_message, $headers);


if ($mail) {
    $data['status'] = "OK";
    $data['mes'] = "Successfully sent";
}else{
    $data['status'] = "NO";
    $data['mes'] = "На сервере произошла ошибка";
}

echo json_encode($data);

?>

