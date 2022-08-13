<?php

// $pdo = new PDO("mysql:host=mysql746.umbler.com;dbname=socialprice", "brcaraujo", "senha10203040", array(

//     PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,

//     PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"

//   )); 

$pdo = new PDO("mysql:host=localhost;dbname=socialprice", "root", "root", array(

  PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,

  PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"

)); 