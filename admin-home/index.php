<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/admin-home/index.css">
    <link rel="shortcut icon" href="../img/favico.png" type="image/x-icon">
    <title>Produtos</title>
</head>
<body>


<div class="app">
<?php include('../template/nav-menu.php');?>

    <div class="boxLista">
        <div id="" class="boxListaCards">

            <a href="../admin-produtos/">
            <div id="" class="templateCardRouter">
                <img id="cardProduto" src="../img/admin-home/produtos.png" alt="">
                <div id="" class="boxDadosCard">
                    <p id="" class="--card-bold">Gerenciar Produtos</p>
                    <p id="">Cadastrar/ Atualizar</p>
                </div>
            </div>
            </a>

            <a href="../admin-ofertas/">
            <div id="" class="templateCardRouter">
                <img id="" src="../img/admin-home/ofertas.png" alt="">
                <div id="" class="boxDadosCard">
                    <p id="" class="--card-bold">Gerenciar Ofertas</p>
                    <p id="">Cadastrar/ Atualizar</p>
                </div>
            </div>
            </a>

            <a href="../admin-mercado/">
            <div id="" class="templateCardRouter">
                <img id="" src="../img/admin-home/market.png" alt="">
                <div id="" class="boxDadosCard">
                    <p id="" class="--card-bold">Loja</p>
                    <p id="">Gerenciar</p>
                </div>
            </div>
            </a>
            
            <a href="../admin-config/">
            <div id="" class="templateCardRouter">
                <img id="" src="../img/admin-home/config.png" alt="">
                <div id="" class="boxDadosCard">
                    <p id="" class="--card-bold">Minha Conta</p>
                    <p id="">Opções de usuario</p>
                </div>
            </div>
            </a>

        </div>
    </div>
</div>



<div id="myModal" class="myModal">
    
</div>



<div id="myAlert" class="myAlert">
</div>

<script  type="module" src="../js/admin-home/index.js"></script>    
</body>
</html>