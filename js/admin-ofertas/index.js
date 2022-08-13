

import {templateAlert} from '../templates/alert.js';

import {modalCadOferta} from './modal-cad-Oferta.js';

import {modalEditOferta} from './modal-edit-oferta.js';

import{Card} from './Card.js';







//variaveis 

const myAlert = document.getElementById('myAlert');

let pagina = 0;

let totalProdutos = document.getElementById('totalProdutos');

let BoxRenderProdutos = document.getElementById('boxListaProdutos');

let inputBuscarProduto = document.getElementById('BuscarProduto');



window.onload = renderCards(pagina);



const btnabrirModalcadastar = document.getElementById('btnCadProduto');

btnabrirModalcadastar.addEventListener('click', ()=>{

    const myModal = document.getElementById('myModal');

    myModal.innerHTML='';

    myModal.appendChild(modalCadOferta());

    fecharModal('fechar','myModal');



    //preview do produto antes de cadastrar

    const inputCodBarra = document.getElementById('inputCodBarra');

    inputCodBarra.addEventListener('keyup', ()=>{

        let ajax = new XMLHttpRequest();

        ajax.open('POST', '../apis/produto/get-foto__codinterno.php');

        ajax.setRequestHeader('Content-Type', 'application/json');

        ajax.onreadystatechange = ()=>{

            if(ajax.status ==200&& ajax.readyState==4){

                let resposta = JSON.parse(ajax.response);

                console.log(resposta); 

                if(resposta[0] =='sucesso'){

                    let imgPreview = document.getElementById('imgPreview');

                    imgPreview.setAttribute('src', `../apis/produto/img/${resposta[1].mercado}/${resposta[1].foto}`);

                    let Id_Produto = document.getElementById('Id_Produto');

                    Id_Produto.value = resposta[1].Id_produto;

                }

            }

        }

        ajax.send(JSON.stringify(inputCodBarra.value));

    });

    //enivando o form para casdastra o produto

    const formCadOferta = document.getElementById('formCadOferta');

    formCadOferta.addEventListener('submit', (e)=>{

        e.preventDefault();

        let formData = new FormData(formCadOferta);

        

        let ajax = new XMLHttpRequest();

        ajax.open('POST', '../apis/ofertas/cadastrar-oferta.php');

        ajax.onreadystatechange = ()=>{

            if(ajax.status ==200&& ajax.readyState==4){

                let resposta = JSON.parse(ajax.response);

                //limpando o alert 

                myAlert.innerHTML="";

                myAlert.appendChild(templateAlert(resposta));

                renderCards();

                setTimeout(() => {

                    myAlert.innerHTML="";



                }, 2000);



            }

        }

        ajax.send(formData);

    });

});

    function fecharModal(idFechar, idModal){

        let btnFechar = document.getElementById(idFechar);

        let modal = document.getElementById(idModal);



        btnFechar.addEventListener('click',()=>{

            modal.innerHTML='';

        });

    }







inputBuscarProduto.addEventListener('keyup', ()=>{

    pagina = 0;

    BoxRenderProdutos.innerHTML='';

    renderCards(pagina);



});







// buscar + produtos com scroll

BoxRenderProdutos.addEventListener('scroll', (e)=>{

    const scrollTop = e.target.scrollTop;

    const scrollHeight = e.target.scrollHeight;

    const scrollClient = e.target.clientHeight;

    

    if(scrollTop + scrollClient >= scrollHeight){

        let dadosInput = inputBuscarProduto.value;

        pagina++;

        let dados = {'pagina': pagina, 'dadosInput': dadosInput};

        console.log(dados); 
        
        renderCards(pagina);

    }
});





//modal de detalhes da oferta

BoxRenderProdutos.addEventListener('click', (e)=>{

    // console.log(e.target.id);

    if(e.target.id == "boxListaProdutos" || e.target.id ==''){

        return;

    }

    let ajax = new XMLHttpRequest();

    ajax.open('POST','/social/apis/ofertas/get-detalhes-oferta.php');

    ajax.onreadystatechange = ()=>{

        if(ajax.status==200&& ajax.readyState ==4){

            let resposta = JSON.parse(ajax.response);

            if(resposta[0]== 'sucesso'){

                //limpando o modal 

                myModal.innerHTML="";



                if(myModal.appendChild(modalEditOferta(resposta[1][0]))){

                    // console.log(resposta[1][0]);



                    //adcinando evento para apagar uma oferta

                    const btnDeleteOferta = document.getElementById('btnApagarProduto');

                    btnDeleteOferta.addEventListener('click', ()=>{



                        let ajax = new XMLHttpRequest();

                        ajax.open('POST','../apis/ofertas/delete-oferta.php');

                        ajax.setRequestHeader('Content-Type', 'application/json');

                        ajax.onreadystatechange = ()=>{

                            if(ajax.status==200&&ajax.readyState==4){

                                console.log(ajax.response);

                                let resposta = JSON.parse(ajax.response);

                                        //limpando o alert 

                                        myAlert.innerHTML="";

                                        myAlert.appendChild(templateAlert(resposta));



                                        renderCards();

                                        myModal.innerHTML="";



                                        setTimeout(() => {

                                            myAlert.innerHTML="";



                                        }, 2000);

                            }



                        }

                        ajax.send(JSON.stringify(e.target.id));

                    });

                    //ativo funcao para fecahr modal

                    fecharModal('fechar', 'myModal');



                    //enviando update da oferta 

                    const formAtualizarProduto = document.getElementById('formEditProduto');

                            formAtualizarProduto.addEventListener('submit', (e)=>{

                                e.preventDefault();

                                let formData = new FormData(formAtualizarProduto);

                                let ajax = new XMLHttpRequest();

                                ajax.open('POST', '../apis/ofertas/update-oferta.php');

                                ajax.onreadystatechange = ()=>{

                                    if(ajax.status==200&&ajax.readyState==4){

                                        let resposta = JSON.parse(ajax.response);

                                        //limpando o alert 

                                        myAlert.innerHTML="";

                                        myAlert.appendChild(templateAlert(resposta));


                                        BoxRenderProdutos.innerHTML='';
                                        renderCards(pagina);

                                        // myModal.innerHTML='';



                                        setTimeout(() => {

                                            myAlert.innerHTML="";



                                        }, 2000);

                                    }

                                }

                                ajax.send(formData);

                            });

                

                }

            }

        }

    }

    ajax.send(JSON.stringify(e.target.id));

});





//funcao atuallizar cards 

function renderCards(pg){

    let dadosInput = inputBuscarProduto.value;

    let dados = {'pagina': pg, 'dadosInput': dadosInput};



    // BoxRenderProdutos.innerHTML='';

    let ajax = new XMLHttpRequest();

    ajax.open('POST', '../apis/ofertas/get-list-ofertas.php');

    ajax.setRequestHeader('Content-Type', 'application/json');

    ajax.onreadystatechange=()=>{

        if(ajax.status==200&&ajax.readyState==4){

            const resposta = JSON.parse(ajax.response);

            console.log(resposta);

            if(resposta[0] == 'sucesso'){

                resposta[2].forEach((key)=>{

                    BoxRenderProdutos.appendChild(Card(key));

                });

            }            

        }

    }

    ajax.send(JSON.stringify(dados));

}

