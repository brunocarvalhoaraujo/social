<?php
include('../configs/conexao.php');
// var_dump($_POST);
// exit;

$slq ="UPDATE `meus_produtos_em_oferta` SET
`preco_oferta` = :preco_oferta,
`expiracao` = :expiracao
WHERE `id` = :id";


$stmt = $pdo->prepare($slq);
$stmt->bindValue(':preco_oferta', $_POST['preco_oferta']);
$stmt->bindValue(':expiracao', $_POST['expiracao']);
$stmt->bindValue(':id', $_POST['id']);

if($stmt->execute()){
$msg = array('sucesso', 'Atualizado.');
echo(json_encode($msg, true));
}
    