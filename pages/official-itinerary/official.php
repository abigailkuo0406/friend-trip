<?php
$db_host = 'localhost';
$db_name = 'route';
$db_user = 'root';
$db_pass = 'root';
$dsn = "mysql:host={$db_host};dbname={$db_name};charset=utf8"; // data source name
$pdo_options = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
];
