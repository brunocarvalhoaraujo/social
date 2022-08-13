export{Card};

function Card(dadosProduto){
    let container = document.createElement('div');
    let template = `
    <div id="${dadosProduto.Id_produto}" class="templateCardOferta">

        <div id="${dadosProduto.Id_produto}" class="txtImgMeramente">
            <p>Imagem Ilustrativa</p>
        </div>

        <div id="${dadosProduto.Id_produto}" class="ImgPDT">
            <img id="${dadosProduto.Id_produto}" src="../apis/produto/img/${dadosProduto.mercado}/${dadosProduto.foto}" alt="">
        </div>

        <div id="${dadosProduto.Id_produto}" class="boxDadosOferta">
            <p id="${dadosProduto.Id_produto}" class="--card-bold card-txt">${dadosProduto.nome}</p>
            <p id="${dadosProduto.Id_produto}" class="--card-tamanho card-txt">${dadosProduto.tamanho}</p>
        </div>
    </div>
    `;

    container.innerHTML=template;
    return container;
}