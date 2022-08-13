<?php
include('../configs/conexao.php');

$dados = file_get_contents('php://input');
$dadosDecode = json_decode($dados, true);
// var_dump($dadosDecode);
// exit;


$sql = "DELETE FROM `meus_produtos_em_oferta`
WHERE ((`id` = :id))";
$stmt = $pdo->prepare($sql);
$stmt->bindValue(':id', $dadosDecode);
$stmt->execute();
if($stmt->rowCount() >= 1 ){
    $resposta = array('sucesso', 'Oferta excluida');
    echo(json_encode($resposta, true));
}

