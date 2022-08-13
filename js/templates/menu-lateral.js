export{templateMenuLateral};

function templateMenuLateral(){
    let container = document.createElement('div');
    
    let template = /*html*/`
        <div class="menu-leteral">
        <div id="fecharMenuLateral" class="fechar" title="Fechar">X</div>
            <div class="header">
                <div class="container">
                    <img src="../img/user.png" alt="">
                    <p>Olá, <a href="../auth/">faça login</a></p>
                </div>
            </div>

            <div class="body">
                <div class="title">
                    <div class="container">
                        <p>Admin:</p>
                    </div>
                </div>
                <div class="btnOption">
                    <div class="container">
                        <p> <i class="fas fa-barcode"></i> Produtos </p>
                    </div>
                </div>

                <div class="btnOption">
                    <div class="container">
                        <p> <i class="fas fa-percentage"></i> Ofertas</p>
                    </div>
                </div>

                <a href="../explore">
                    <div class="btnOption">
                        <div class="container">
                            <p><i class="fas fa-map-marked-alt"></i> Explorar Ofertas</p>
                        </div>
                    </div>
                </a>

                <div class="btnOption">
                    <div class="container">
                        <p> <i class="fas fa-store"></i> Minha Loja</p>
                    </div>
                </div>
            </div>

            <div class="footer">
                <div class="container">
                    <div class="boxIMG">
                        <img src="../img/logo.svg" alt="">
                    </div>
                    <div class="boxTXT">
                        <p>Todos os Diretos Reservados</p>
                        <p>Termo de uso</p>
                        <p>by: BRunO</p>
                    </div>
                </div>

            </div>

        </div>    
    `;

    container.innerHTML = template;
    return container;
}


