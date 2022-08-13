<?php
session_start();
include('../configs/conexao.php');

if(!empty($_POST['codProduto']) && !empty($_POST['precoProduto']) 
&& !empty($_POST['dateExpiracao']) && !empty($_POST['idProduto']))
{
    $sql = "INSERT INTO `meus_produtos_em_oferta` (`mercado`, `produto`, `preco_oferta`, `expiracao`)
    VALUES (:mercado, :produto, :preco_oferta , :expiracao);";

    $stmt= $pdo->prepare($sql);
    $stmt->bindValue('mercado', $_SESSION['id_mercado']);
    $stmt->bindValue(':produto', $_POST['idProduto']);
    $stmt->bindValue(':preco_oferta', $_POST['precoProduto']);
    $stmt->bindValue(':expiracao', $_POST['dateExpiracao']);
    $stmt->execute();
    if($stmt->rowCount() >= 1){
        $resposta = array('sucesso', 'Produto Cadastrado');
        echo(json_encode($resposta, true));
    }
}