export{Card};

function Card(dadosProduto){
    let container = document.createElement('div');
    let template = `
    <div id="" class="templateCardOferta">
        <div class="splach">
            <p>Oferta</p>
            <img id="" src="../img/splach.png" alt="">
        </div>

        <div class="txtImgMeramente">
            <p>Imagem Ilustrativa</p>
        </div>

        <div class="ImgPDT">
            <img id="" src="../apis/produto/img/${dadosProduto.id_mercado}/${dadosProduto.foto}" alt="">
        </div>

        <div id="" class="boxDadosOferta">
            <p id="" class="--card-bold card-txt">${dadosProduto.nome}</p>
            <p id="" class="--card-tamanho card-txt">${dadosProduto.tamanho}</p>
            <p id="" class="--card-bold-price">R$ ${dadosProduto.preco_oferta}</p>
            <p id="" class="--card-tamanho card-txt">Und.</p>
        </div>
    </div>
    `;

    container.innerHTML=template;
    return container;
}