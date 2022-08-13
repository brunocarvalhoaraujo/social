<?php
include('../configs/conexao.php');
session_start();
$dados = file_get_contents('php://input');

$dadosDecode = json_decode($dados, true);

if(!empty($dadosDecode)){
    $sql = "SELECT `foto`, `mercado`, `codigodebarra`, `Id_produto` 
    FROM `produtos` WHERE (produtos.mercado = :mercado) AND (`Id_produto` = :Id_produto)
    LIMIT 1";
    $stmt = $pdo->prepare($sql);
    $stmt->bindValue(':mercado', $_SESSION['id_mercado']);
    $stmt->bindValue(':Id_produto', $dadosDecode);
    $stmt->execute();

        $result = $stmt->fetch(PDO::FETCH_ASSOC);
        if(!empty($result)){
            $resposta = array('sucesso', $result);
            echo(json_encode($resposta, true));
        }    
}