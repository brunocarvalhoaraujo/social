<?php
include('../configs/conexao.php');

$dados = file_get_contents('php://input');

$dadosDecode = json_decode($dados, true);

function getListaOfertasMercado($pdo, $idMercado){
    $sql = "SELECT m.id_mercado, p.nome, p.tamanho, mpo.preco_oferta, p.foto
    FROM meus_produtos_em_oferta AS mpo
    INNER JOIN mercados AS m 
    ON m.id_mercado = mpo.mercado
    INNER JOIN produtos AS p 
    ON p.Id_produto = mpo.produto 
    WHERE mpo.mercado = :id_mercado
    ";
        $stmt = $pdo->prepare($sql);
        $stmt->bindValue(':id_mercado', $idMercado);
        $stmt->execute();
        return $listaDeOfertas = $stmt->fetchAll(PDO::FETCH_ASSOC);
}
$listaDeOfertas = getListaOfertasMercado($pdo, $dadosDecode);
$resposta = array('sucesso', $listaDeOfertas);
echo(json_encode($resposta, true));