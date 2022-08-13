import { rowCards } from "./template-rowCards.js";



//variaveis



let uf = document.getElementById('uf');

let cidade = document.getElementById('cidade');





const boxListaDeOfertas = document.getElementById('boxListaDeOfertas');






uf.addEventListener('change', () => {

    getListcitys();

});

window.addEventListener('load', () => {

    getListcitys();

});



cidade.addEventListener('change', () => {

    RenderRowCards();

});



function getListcitys() {

    let dados = JSON.stringify(uf.value);

    let ajax = new XMLHttpRequest();

    ajax.open('POST', '../apis/cidades/get-cidades.php');
    ajax.setRequestHeader('Content-Type', 'application/json');
    ajax.onreadystatechange = () => {
        if (ajax.readyState == 4 && ajax.status == 200) {
            let respostaFull = JSON.parse(ajax.response);
            let respostaStatus = respostaFull[0];
            let respostaListaCitys = respostaFull[1];

            if (respostaStatus = 'sucesso') {

                cidade.innerHTML = "";

                respostaListaCitys.forEach((key) => {
                    // console.log(key.nome);
                    const template = `<option value="${key.nome}">${key.nome}</option>`;
                    cidade.insertAdjacentHTML('beforeend', template);

                });

            }



        }

    }

    ajax.send(dados);



}









function RenderRowCards() {

    let dados = JSON.stringify({ 'uf': uf.value, 'cidade': cidade.value });

    // console.log(dados)

    //cunsultar os mercados da minha regiao 

    let ajax = new XMLHttpRequest();

    ajax.open('POST', '../apis/allofertas/get-list-mercados.php');

    ajax.setRequestHeader('Content-Type', 'application/json');

    ajax.onreadystatechange = () => {

        if (ajax.readyState == 4 && ajax.status == 200) {

            let resposta = JSON.parse(ajax.response);

            let status = resposta[0];

            let dadosMercado = resposta[1];



            if (status == 'sucesso') {

                boxListaDeOfertas.innerHTML = '';

                let template = `

                

                <div class="templateNaoEncontrei">

                    <img src="../img/nao.png" alt="">

                    <p class="title">Não tem mais nada por aqui.</p>

                    <p class="subtitle">busque com outros paramentros</p>

                    <p class="subtitle2">Ou cadastre sua loja <a href="../auth/">aqui</a></p>

                </div>

                

                `;



                if (dadosMercado == '') {

                    boxListaDeOfertas.insertAdjacentHTML('beforeend', template);

                    return;

                }



                dadosMercado.forEach((key) => {

                    boxListaDeOfertas.appendChild(rowCards(key));

                });

                boxListaDeOfertas.insertAdjacentHTML('beforeend', template);

            }

        }

    }

    ajax.send(dados);

}

