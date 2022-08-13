<?php
include('../configs/conexao.php');

$dados = file_get_contents('php://input');
$dadosDecode = json_decode($dados, true);
// var_dump($dadosDecode);
// exit;