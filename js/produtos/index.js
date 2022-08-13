
import {templateAlert} from '../templates/alert.js';
import {modalCadProduto} from './modal-cad-produto.js';
import {modalEditProduto} from './modal-edit-produto.js';


import { Card } from './Card.js';



//variaveis 
const myAlert = document.getElementById('myAlert');
let pagina = 0;
let totalProdutos = document.getElementById('totalProdutos');
const BoxRenderProdutos = document.getElementById('boxListaProdutos');
const inputBuscarProduto = document.getElementById('BuscarProduto');
const btnabrirModalcadastar = document.getElementById('btnCadProduto');



window.onload = renderCards(pagina);

btnabrirModalcadastar.addEventListener('click', ()=>{
    const myModal = document.getElementById('myModal');
    myModal.innerHTML='';
    myModal.appendChild(modalCadProduto());
    //preview antes de upload img  

    imgInp.onchange = ()=>{
        const [file] = imgInp.files;
        if(file){
            imgPreview.src = URL.createObjectURL(file);
        }
    }
    fecharModal('fechar','myModal');

    const formCadProduto = document.getElementById('formCadProduto');
    formCadProduto.addEventListener('submit', (e)=>{
        e.preventDefault();
        let formData = new FormData(formCadProduto);
        
        let ajax = new XMLHttpRequest();
        ajax.open('POST', '../apis/produto/cadastrar-produto.php');
        // ajax.setRequestHeader('Content-Type', 'application/json');
        ajax.onreadystatechange = ()=>{
            if(ajax.status ==200&& ajax.readyState==4){
                let resposta = JSON.parse(ajax.response);
                if(resposta[0] !==''){
                    let myAlert = document.getElementById('myAlert');
                    myAlert.innerHTML="";
                    myAlert.appendChild(templateAlert(resposta));
                    renderCards();
                    setTimeout(() => {
                        myAlert.innerHTML='';
                    }, 3500);
                }
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
        pagina++;
        renderCards(pagina);
    }
});

//modal de detalhes do produto UPDATE
BoxRenderProdutos.addEventListener('click', (e)=>{
    if(e.target.id == "boxListaProdutos"){
        return;
    }
    let ajax = new XMLHttpRequest();
    ajax.open('POST','../apis/produto/get-detalhes-one-produto.php');
    ajax.setRequestHeader('Content-Type', 'application/json');
    ajax.onreadystatechange = ()=>{
        if(ajax.status==200&& ajax.readyState ==4){
            let resposta = JSON.parse(ajax.response);
            if(resposta[0]== 'sucesso'){
                //limpando o modal 
                myModal.innerHTML="";

                if(myModal.appendChild(modalEditProduto(resposta[1][0]))){
                    // console.log(resposta[1][0]);
                    fecharModal('fechar', 'myModal');
                    const formAtualizarProduto = document.getElementById('formEditProduto');
                    formAtualizarProduto.addEventListener('submit', (e)=>{
                        e.preventDefault();
                        let formData = new FormData(formAtualizarProduto);
                        let ajax = new XMLHttpRequest();
                        ajax.open('POST', '../apis/produto/update-produto.php');
                        ajax.onreadystatechange = ()=>{
                            if(ajax.status==200&&ajax.readyState==4){
                                let resposta = JSON.parse(ajax.response);
                                //limpando o alert 
                                myAlert.innerHTML="";
                                myAlert.appendChild(templateAlert(resposta));
                                renderCards();
                                myModal.innerHTML='';
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
    ajax.open('POST', '../apis/produto/get-list-produtos.php');
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
