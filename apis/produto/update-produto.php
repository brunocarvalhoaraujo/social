<?php
include('../configs/conexao.php');


if(!empty($_FILES['imagemProduto'])){
    $extencao= explode('.', $_FILES['imagemProduto']['name']);
    $ext =end($extencao);

    $novoNomeArq = md5($_FILES['imagemProduto']['name'].date('h-i-s')).'.'.$ext;
    if(move_uploaded_file($_FILES['imagemProduto']['tmp_name'], './img/'.$novoNomeArq)){
    }
}
// var_dump($_POST);
foreach ($_POST as $key => $value) {
    if(empty($value)){
        $msg = array('erro', "Vazio: {$key}");
        echo(json_encode($msg,true));
        exit();
    }
}


$slq ="UPDATE `produtos` SET
`codigodebarra` = :codigodebarra,
`nome` = :nome,
`tamanho` = :tamanho,
`marca` = :marca,
`setor` = :setor
WHERE `Id_produto` = :Id_produto;";


$stmt = $pdo->prepare($slq);
$stmt->bindValue(':codigodebarra', $_POST['codBarra']);
$stmt->bindValue(':nome', $_POST['nomeProduto']);
$stmt->bindValue(':tamanho', $_POST['tamanhoProduto']);
$stmt->bindValue(':marca', $_POST['marcaProduto']);
$stmt->bindValue(':setor', $_POST['setorProduto']);
$stmt->bindValue(':Id_produto', $_POST['Id_produto']);
if($stmt->execute()){
$msg = array('sucesso', 'Atualizado.');
echo(json_encode($msg, true));
}
    