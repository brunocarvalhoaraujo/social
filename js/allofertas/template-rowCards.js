import {Card} from "./template-Card.js";
export{rowCards};


function rowCards(dadosMercado){
    let container = document.createElement('div');
    let template = `
        <div class="rowCards">
            <div class="card-container">
                <div class="boxInfoMercado">
                    
                    <div class="Mercado">
                        <img src="../public/logo mercados/${dadosMercado.logo}" alt="">
                        <p>${dadosMercado.endereco}</p>
                    </div>

                    <div class="boxInforGerente">
                        <div class="boxImgGerente">
                            <img src="../public/foto users/${dadosMercado.foto}" alt="">
                            <img src="../img/selo.png" alt="">
                        </div>

                        <div class="boxNomeSetorGerente">
                            <p>${dadosMercado.nome}</p>
                            <P>${dadosMercado.cargo}</P>
                        </div>
                    </div>

                    <a href="../blacklist/#${dadosMercado.id_mercado}">
                        <div class="btnMaisInfoLoja" title="veja a lista completa.">
                            <p>Visitar Loja</p>
                        </div>
                    </a>
                    
                </div>

                <div id="boxRenderCards${dadosMercado.id_mercado}" class="boxRenderCards">
                
                    ${getOfertas(dadosMercado.id_mercado)}
                
                </div> 
            </div>

        </div>       
 
    `;
    container.innerHTML= template;
    return container;
}

function getOfertas(idMercado){
    let ajax= new XMLHttpRequest();
    ajax.open('POST', '../apis/allofertas/get-list-ofertas.php');
    ajax.setRequestHeader('Content-Type', 'application/json');
    ajax.onreadystatechange = ()=>{
        if(ajax.status ==200&& ajax.readyState==4){
            let resposta = JSON.parse(ajax.response);
            let respostaStatus = resposta[0];
            let resListaOfertas = resposta[1];
            
            if(respostaStatus=='sucesso'){
                let boxRenderCards = document.getElementById(`boxRenderCards${idMercado}`);
                boxRenderCards.innerHTML='';
                resListaOfertas.forEach((key)=>{
                    // console.log(key);
                    boxRenderCards.appendChild(Card(key));
                });

            }
            

            
        }
    }
    ajax.send(JSON.stringify(idMercado));
}