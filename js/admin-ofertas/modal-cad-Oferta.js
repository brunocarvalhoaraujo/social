export {modalCadOferta};

function modalCadOferta(){
    let container = document.createElement('div');
    const template = `
    <div class="templateModalCadastarProduto">
        <div id="fechar" class="fechar"></div>
        <div class="headCadastrarProduto">
            <h2>Cadastrar</h2>
        </div>
        <form id="formCadOferta" method="POST" action="">

            <div class="boxPreviewIMG">
                <img id="imgPreview" src="../img/embalagem.png" alt="">
            </div>

            <div class="inputCadastarProduto">
                <label for="">Cod.:</label>
                <input type="number" name="codProduto" id="inputCodBarra">
            </div>


            <div class="inputCadastarProduto">
                <label for="">Preço:</label>
                <input type="text" name="precoProduto" id="">
            </div>

            <div class="inputCadastarProduto">
                <label for="">Data de expiração:</label>
                <input type="date" name="dateExpiracao" id="" value="2017-06-01">
            </div>

            <input type="hidden" name="idProduto" id="Id_Produto" value=""">
            <button type="submit">Cadastrar</button>

        </form>
    </div>
    `;

    container.innerHTML = template;
    return container;
}