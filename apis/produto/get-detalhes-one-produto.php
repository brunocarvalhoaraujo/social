<?php
include('../configs/conexao.php');

$dados = file_get_contents('php://input');

$dadosDecode = json_decode($dados, true);

if(!empty($dadosDecode)){
    $sql = "SELECT * FROM `produtos` WHERE `Id_produto` = :Id_produto LIMIT 1";
    $stmt = $pdo->prepare($sql);
    $stmt->bindValue(':Id_produto', $dadosDecode);
    $stmt->execute();

        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        if(!empty($result)){
            $resposta = array('sucesso', $result);
            echo(json_encode($resposta, true));
        }    
}