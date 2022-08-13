export {modalEditOferta};

function modalEditOferta(key){
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
                <label for="">Nome do Produto:</label>
                <input type="text" name="" id="" value="${key.nome}" disabled>
            </div>

            <div class="inputEditProduto">
                <label for="">Tamanho:</label>
                <input type="text" name="" id="" value="${key.tamanho}" disabled>
            </div>

            <div class="inputEditProduto">
                <label for="">Preço:</label>
                <input type="text" name="preco_oferta" id="" value="${key.preco_oferta}">
            </div>

            <div class="inputEditProduto">
                <label for="">Preço:</label>
                <input type="date" name="expiracao" id="" value="${key.expiracao}">
            </div>
            <input type="text" name="id" id="" value="${key.id}" style=" display: none";>

            <button type="submit">Atualizar</button>

            <p id="btnApagarProduto" class="apagarProduto" value="${key.id}">Apagar Oferta</p>
        </form>
    </div>
    `;
    container.innerHTML = template;
    return container;
}