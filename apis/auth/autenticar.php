<?php
header("Access-Control-Allow-Origin: *");

if(!empty($_POST)){
    foreach ($_POST as $key => $value) {
        if(empty($value)){
            $msg = array("Erro", "vazio: ".$key);
            echo(json_encode($msg, true));
            exit();
        }
    }
}
include('../configs/conexao.php');
$sql = 
"SELECT u.id_usuario, u.nome as nome_usuario, u.usuario, u.cargo, u.foto, m.id_mercado, m.nome as nome_mercado, m.logo
FROM usuarios AS u
INNER JOIN
mercados AS m
ON m.usuario_dono = u.id_usuario
WHERE u.usuario = :usuario AND u.senha = :senha";

$stmt = $pdo->prepare($sql);
$stmt->bindValue(':usuario', $_POST['usuario']);
$stmt->bindValue(':senha', $_POST['senha']);
$stmt->execute();
$result = $stmt->fetch(PDO::FETCH_ASSOC);
    if(!empty($result)){
        // var_dump($result);
        // exit;
        session_start();
        $_SESSION['id_usuario'] = $result['id_usuario'];
        $_SESSION['nome_usuario'] = $result['nome_usuario'];
        $_SESSION['usuario'] = $result['usuario'];
        $_SESSION['cargo'] = $result['cargo'];
        $_SESSION['foto'] = $result['foto'];

        //dados do mercado
        $_SESSION['id_mercado'] = $result['id_mercado'];
        $_SESSION['nome_mercado'] = $result['nome_mercado'];
        $_SESSION['logo'] = $result['logo'];

        $msg = array("sucesso", "Achei na BASE.", $result);
        echo(json_encode($msg));
    }else{
        $msg = array("erro", "Usuario ou Senha..");
        echo(json_encode($msg));
        exit;
    }