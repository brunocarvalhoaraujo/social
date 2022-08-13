<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/auth/index.css">
    <title>membros</title>
</head>
<body>
    <div id="myAlert" class="myAlert"></div>


    <div class="boxAuth">
        <div class="authHeader">
            <img src="../img/logo.svg" alt="">
        </div>
        <div class="authBody">
            <form id="formAuth" method="POST" action="">
                <div class="input">
                    <input type="text" name="usuario" id="" placeholder="Ex.: tiringa0001">
                </div>

                <div class="input">
                    <input type="password" name="senha" id="" placeholder="*************">
                </div>

                <button type="submit">Entrar</button>   
            </form>
        </div>

        <div class="authFooter">
            <p>Não tem uma conta? <a href="">cadastre-se</a></p>
        </div>
        
    </div>
</body>
<script src="../js/auth/index.js" type="module"></script>
</html>