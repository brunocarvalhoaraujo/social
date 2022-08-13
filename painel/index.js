
function init(){
    let ajax = new XMLHttpRequest();
    ajax.open('POST','./api/get-list-ofertas.php');
    ajax.onreadystatechange= ()=>{
        if(ajax.readyState == 4 && ajax.status==200){
            let resposta = JSON.parse(ajax.response);
            console.log(resposta[1]);

            RenderOferta(resposta[1][0]);
            let i = 0;
            let totalTime = 5000*resposta[1].length;

            resposta[1].forEach((key)=>{
                i++;
                let time = 5000 * i;
                setTimeout(() => {
                    RenderOferta(key);
                }, time);

                setTimeout(() => {
                    window.location.reload();   
                }, totalTime+5000);
            });            
        }
    } 
    ajax.send(JSON.stringify(5));
}
init();

function RenderOferta(arrayDados){
    // elementos onde vai ser atulizados na tela
    let splach = document.getElementById('splach');
    let imgProduto = document.getElementById('imgProduto');
    let NomeProduto = document.getElementById('nomeProduto');
    let infoProduto = document.getElementById('infoProduto');
    let preco = document.getElementById('preco');
    // let qrcode =document.getElementById();
    
    splach.setAttribute('src', './splach.png');
    imgProduto.setAttribute('src', `../apis/produto/img/${arrayDados.id_mercado}/${arrayDados.foto}`);
    NomeProduto.innerText= arrayDados.nome;
    infoProduto.innerText= arrayDados.tamanho;
    preco.innerText = arrayDados.preco_oferta;
}


