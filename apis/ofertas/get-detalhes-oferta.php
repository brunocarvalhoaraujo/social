<?php
include('../configs/conexao.php');

$dados = file_get_contents('php://input');

$dadosDecode = json_decode($dados, true);

if(!empty($dadosDecode)){
    $sql = "SELECT * FROM meus_produtos_em_oferta INNER JOIN produtos on meus_produtos_em_oferta.produto = produtos.Id_produto
    WHERE `id` = :id";
    $stmt = $pdo->prepare($sql);
    $stmt->bindValue(':id', $dadosDecode);
    $stmt->execute();

        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        if(!empty($result)){
            $resposta = array('sucesso', $result);
            echo(json_encode($resposta, true));
        }    
}