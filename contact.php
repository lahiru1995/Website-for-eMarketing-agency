<?php
    
    if ( ($_POST['name']!="") && ($_POST['email']!="")){
        $name = $_POST['name'];
        $email = $_POST['email'];
        $Subject1 = $_POST['Subject'];
        $message = $_POST['message'];
        $to = "lahirutperera@gmail.com";
        $subject = "New form submition";
        $email_from = 'websitename@xyz.com';
        $message = "Name: ".$name.".\n\n"
                ."User Email: ".$email." .\n\n"
                ."Message subject: ".$Subject1. ".\n\n"
                ."User Message: ".$message;
        // Always set content-type when sending HTML email
        //$headers = "MIME-Version: 1.0" . "\r\n";
       // $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
        $headers .= "From: $email_from \r\n";
        $headers = "Reply-To: $email \r\n";
        $sent = mail($to,$subject,$message,$headers);
        if($sent){
        echo "<span style='color:green; background-color: #8ffcb0; border: 1px solid green; padding: 10px 25px; display: block; width: 90; margin: auto;'>
        Thank you for contacting us, We will get back to you shortly.
        </span>";
        }
        else{
        echo "<span style='color:red; font-weight:bold;'>
        Sorry! Your form submission is failed.
        </span>";
        }
        }
        /*
    $name = $_POST['name'];
    $Email = $_POST['Email'];
    $Subject = $_POST['Subject'];
    $Message = $_POST['Message'];

    $email_from = 'websitename@xyz.com';
    $email_subject = "new form submition";
    $email_body = "Name: ".$name.".\n\n"
                  ."User Email: ".$Email." .\n\n"
                  ."Message subject: ".$Subject. ".\n\n"
                  ."User Message: ".$Message;

    $to = "lahirutperera@gmail.com";
    $headers = "From: $email_from \r\n";
    $headers = "Reply-To: $Email \r\n";
    mail($to,$Subject, $email_body, $headers);
    header("Location:index.html"); */

?>