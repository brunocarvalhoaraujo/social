export {modalEditProduto};

function modalEditProduto(key){
    let container = document.createElement('div');
    const template = `
    <div class="templateModalEditProduto">
        <div id="fechar" class="fechar"></div>
        <div class="headCadastrarProduto">
            <h2>Editar</h2>
        </div>
        <form id="formEditProduto" method="POST" action="">

            <div class="boxPreviewIMG">
                <img id="imgPreview" src="../apis/produto/img/${key.mercado}/${key.foto}" alt="">
            </div>
            <div class="inputEditProduto">
                <label for="">Cod.:</label>
                <input type="number" name="codBarra" id="" value="${key.Id_produto}">
            </div>

            <div class="inputEditProduto">
                <label for="">Nome do Produto:</label>
                <input type="text" name="nomeProduto" id="" value="${key.nome}">
            </div>

            <div class="inputEditProduto">
                <label for="">Qual o Tamanho:</label>
                <input type="text" name="tamanhoProduto" id="" value="${key.tamanho}">
            </div>

            <div class="inputEditProduto">
                <label for="">Marca:</label>
                <input type="text" name="marcaProduto" id="" value="${key.marca}">
            </div>

            <div class="inputEditProduto">
                <label for="">Setor:</label>
                <input type="text" name="setorProduto" id="" value="${key.setor}">
            </div>
            <input type="text" name="Id_produto" id="" value="${key.Id_produto}" style=" display: none";>

            <button type="submit">Atualizar</button>
            <p class="apagarProduto">Apagar Produto</p>
        </form>
    </div>
    `;
    container.innerHTML = template;
    return container;
}