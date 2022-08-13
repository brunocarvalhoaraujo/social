export{Card};

function Card(dadosProduto){
    let container = document.createElement('div');
    let template = `
    <div id="${dadosProduto.id}" class="templateCardOferta">
        <div id="${dadosProduto.id}" class="splach">
            <p>Oferta</p>
            <img id="${dadosProduto.id}" src="../img/splach.png" alt="">
        </div>

        <div id="${dadosProduto.id}" class="txtImgMeramente">
            <p>Imagem Ilustrativa</p>
        </div>

        <div class="ImgPDT">
            <img id="${dadosProduto.id}" src="../apis/produto/img/${dadosProduto.mercado}/${dadosProduto.foto}" alt="">
        </div>

        <div id="${dadosProduto.id}" class="boxDadosOferta">
            <p id="${dadosProduto.id}" class="--card-bold card-txt">${dadosProduto.nome}</p>
            <p id="${dadosProduto.id}" class="--card-tamanho card-txt">${dadosProduto.tamanho}</p>
            <p id="${dadosProduto.id}" class="--card-bold-price">R$ ${dadosProduto.preco_oferta}</p>
            <p id="${dadosProduto.id}" class="--card-tamanho card-txt">Und.</p>
        </div>
    </div>
    `;

    container.innerHTML=template;
    return container;
}