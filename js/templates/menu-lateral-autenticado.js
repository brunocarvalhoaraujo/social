export{templateMenuLateralAutenticado};

function templateMenuLateralAutenticado(fotoUsuario, nomeUsuario){
    let container = document.createElement('div');
    
    let template = /*html*/`
        <div class="menu-leteral">
        <div id="fecharMenuLateral" class="fechar" title="Fechar">X</div>
            <div class="header">
                <div class="container">
                    <img src="../public/foto users/${fotoUsuario}" alt="">
                    <div class="box">
                        <p>Olá, <a href="">${nomeUsuario}</a></p>
                        <p  id="btnSair" style="font-size: 12px; cursor: pointer;">Sair</p>
                    </div>
                </div>
            </div>

            <div class="body">
                <div class="title">
                    <div class="container">
                        <p>Admin:</p>
                    </div>
                </div>

                <a href="../admin-produtos">
                    <div class="btnOption">
                        <div class="container">
                            <p><i class="fas fa-barcode"></i> Produtos </p>
                        </div>
                    </div>
                </a>

                <a href="../admin-ofertas">
                    <div class="btnOption">
                        <div class="container">
                            <p><i class="fas fa-percentage"></i> Ofertas</p>
                        </div>
                    </div>
                </a>

                <a href="../explore">
                    <div class="btnOption">
                        <div class="container">
                            <p><i class="fas fa-map-marked-alt"></i> Explorar Ofertas</p>
                        </div>
                    </div>
                </a>

                <a href="">
                    <div class="btnOption">
                        <div class="container">
                            <p><i class="fas fa-store"></i> Minha Loja</p>
                        </div>
                    </div>
                </a>
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

