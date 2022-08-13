import {Card} from './Card.js';

//init variables
let id_mercado = window.location.hash.replace('#','');
let inputBuscarProduto = document.getElementById('BuscarProduto');
let pagina = 0;



window.onload = ()=>{
    renderCards();

}

inputBuscarProduto.addEventListener('keyup', ()=>{
    renderCards();
});


function renderCards(){
    let dadosInput = inputBuscarProduto.value;
    let dados = {'pagina': pagina, 'dadosInput': dadosInput, 'id_mercado': id_mercado}
    // console.log(dados);

    let ajax = new XMLHttpRequest();
    ajax.open('POST', '../apis/my-list/get-my-list.php');
    ajax.setRequestHeader('Content-Type', 'application/json');
    ajax.onreadystatechange = ()=>{
        if(ajax.status==200&&ajax.readyState==4){
            let resposta = JSON.parse(ajax.response);
            let respostaStatus = resposta[0];
            let respostaBody = resposta[1];
            console.log(resposta);
            if(respostaStatus == 'sucesso'){
                const boxListadeProdutos = document.getElementById('boxListadeProdutos');
                boxListadeProdutos.innerHTML='';
                
                respostaBody.forEach((key)=>{
                    boxListadeProdutos.appendChild(Card(key));
                });
            }

            
        }
    }
    ajax.send(JSON.stringify(dados));

}