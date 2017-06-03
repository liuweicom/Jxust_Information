<?php
$mysql_server_name='localhost';
$mysql_username='root';
$mysql_password='root';
$mysql_database='db_jxust';
$timezone="Asia/Shanghai";

$link=mysqli_connect($mysql_server_name,$mysql_username,$mysql_password,$mysql_database);
// mysql_select_db();
// $timezone="Asia/Shanghai";
// date_default_timezone_set($timezone); //北京时间
//mysql_select_db($mysql_database,$link);
mysqli_query($link,"SET names UTF8");

header("Content-Type: text/html; charset=utf-8");
date_default_timezone_set($timezone); //北京时间
// if($link){
// 	echo 'connect success';
// };
?>