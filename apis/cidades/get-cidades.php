<?php
include('../configs/conexao.php');
header("Access-Control-Allow-Origin: *");


$dados = file_get_contents('php://input');
$dadosDecode = json_decode($dados, true);
// var_dump($dadosDecode);
// exit;

$sql = "SELECT tb_cidades.nome
FROM tb_cidades
WHERE UF = :UF AND qtd_mercados > 0";

$stmt = $pdo->prepare($sql);
$stmt->bindValue('UF', $dadosDecode);
$stmt->execute();
$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    if(!empty($result)){
        $resposta =array('sucesso', $result);
        echo(json_encode($resposta, true));
    }