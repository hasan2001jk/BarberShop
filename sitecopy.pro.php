<?php  /* version 1.2 */ 
require_once("Smtp.php");

$obj = new Smtp(array(
    "maillogin" => "ya.hasan2001@yandex.ru",
  "mailpass"  => "Hasanronaldo2001",
  "from"      => "Abdurakhmanov Khasan",
 "host"      => "ssl://smtp.yandex.ru",
   "port"      => 465
));

$result = $obj->send(
    "dzhonibek.murtaliev@mail.ru",
     "Заголовок письма",
     "Текст письма"
  );

?>