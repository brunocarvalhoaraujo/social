export {modalCadProduto};

function modalCadProduto(){
    let container = document.createElement('div');
    const template = `
    <div class="templateModalCadastarProduto">
        <div id="fechar" class="fechar"></div>
        <div class="headCadastrarProduto">
            <h2>Cadastrar</h2>
        </div>
        <form id="formCadProduto" method="POST" action="">

            <div class="boxPreviewIMG">
                <img id="imgPreview" src="../img/embalagem.png" alt="">
            </div>
            <div class="inputCadastarProduto">
                <label for="">Cod. Interno (não é obrigatorio)</label>
                <input type="number" name="codBarra" id="" value="789456123">
            </div>

            <div class="inputCadastarProduto">
                <label for="">Nome do Produto:</label>
                <input type="text" name="nomeProduto" id="">
            </div>

            <div class="inputCadastarProduto">
                <label for="">Qual o Tamanho:</label>
                <input type="text" name="tamanhoProduto" id="">
            </div>

            <div class="inputCadastarProduto">
                <label for="">Marca:</label>
                <input type="text" name="marcaProduto" id="" value="none">
            </div>

            <div class="inputCadastarProduto">
                <label for="">Setor:</label>
                <input type="text" name="setorProduto" id="" value="none">
            </div>

            <div class="inputCadastarProduto">
                <label for="">Foto:</label>
                <input type="file" name="imagemProduto" id="imgInp">
            </div>

            <button type="submit">Cadastrar</button>

        </form>
    </div>
    `;

    container.innerHTML = template;
    return container;
}