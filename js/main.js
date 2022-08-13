import { templateMenuLateral } from "./templates/menu-lateral.js";
import{templateMenuLateralAutenticado} from "./templates/menu-lateral-autenticado.js";


//inciando variables
const rendermenulateral = document.getElementById('rendermenulateral');
const btnMenuLateral = document.getElementById('btn-menu');


//iniciando eventos

btnMenuLateral.addEventListener('click', ()=>{
    const nomeUsuario = window.sessionStorage.getItem('usuario');
    const fotoUsuario = window.sessionStorage.getItem('foto');
    if(nomeUsuario && fotoUsuario){
        rendermenulateral.appendChild(templateMenuLateralAutenticado(fotoUsuario, nomeUsuario)); 
        fecharMenuCLICK('fecharMenuLateral');
        return;     
    }
    rendermenulateral.appendChild(templateMenuLateral()); 
    fecharMenuCLICK('fecharMenuLateral');


})


//envt para fechar o menu lateral com 'esc'
document.addEventListener('keyup', (e)=>{
    let tecla = e.key;
    if(tecla ==='Escape'){
        fecharMenuESC('fecharMenuLateral');
    }
})



//função de fechar menu lateral
function fecharMenuCLICK(idBtnFechar){
    const btnFechar = document.getElementById(idBtnFechar);
    btnFechar.addEventListener('click', ()=>{
        rendermenulateral.innerHTML='';
    });
}

//função de fechar menu lateral
function fecharMenuESC(idBtnFechar){
    const btnFechar = document.getElementById(idBtnFechar);
    rendermenulateral.innerHTML='';
}