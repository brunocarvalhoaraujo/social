<?php
include('../configs/conexao.php');

$dados = file_get_contents('php://input');

$dadosDecode = json_decode($dados, true);

// var_dump($dadosDecode);
// exit;

function getMercadosRegiao($pdo, $cidade, $estado){
    $sql= "SELECT m.id_mercado, m.logo, m.endereco, m.cidade, m.estado, m.logo, u.nome, u.cargo, u.foto
    FROM mercados AS m
    INNER JOIN usuarios AS u
    ON u.id_usuario = m.usuario_dono
    WHERE cidade = :cidade AND estado = :estado";

    $stmt = $pdo->prepare($sql);
    $stmt->bindValue(':cidade', $cidade);
    $stmt->bindValue(':estado', $estado);
    $stmt->execute();
    return $dadosMercadosDaRegiao = $stmt->fetchAll(PDO::FETCH_ASSOC);
}



$mercados = getMercadosRegiao($pdo, $dadosDecode['cidade'], $dadosDecode['uf']);
$resposta = array('sucesso', $mercados);
echo(json_encode($resposta, true));








