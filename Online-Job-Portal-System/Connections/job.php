<?php
# FileName="Connection_php_mysql.htm"
# Type="MYSQL"
# HTTP="true"
$hostname_job = "localhost";
$database_job='php_project';
$username_job = "root";
$password_job = "";
$job;
$database_job = mysqli_connect($hostname_job, $username_job, $password_job,"php_project") or trigger_error(mysqli_error(),E_USER_ERROR);

?>