<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Explorer | SocialPrice</title>
    <link rel="stylesheet" href="../css/allofertas/index.css">
</head>

<body>
    <div id='app' class="app">
        <div id="rendermenulateral"></div>

        <?php include('../template/nav-menu.php')?>

        <div class="box-filter">
            <div class="buscar">
                <form action="">
                
                    <select id="uf" type="text" placeholder="UF">
                        <option value="TO">TO</option>
                        <option value="MA">MA</option>
                    </select>

                    <select  id="cidade" type="text">
                    </select>

                    <input id="inputFiltro" type="text" placeholder="Ex.: Atacadão">

                </form>
            </div>
        </div>


        <div class="boxListarOfertas">



            <div id="boxListaDeOfertas" class="boxListaOfertas">
                <!-- onde vai ser rederizado os cards -->
                
                <!-- <div class="templateNaoEncontrei">
                    <img src="../img/ilustracao nao encrotrei.jpg" alt="">
                    <p class="title"> Não encrotrei</p>
                    <p>voltar:home/</p>
                </div> -->

            </div>

        </div>
    </div>


</body>
<script src="../js/allofertas/index.js" type="module"></script>
<script src="../js/main.js" type="module"></script>

</html>