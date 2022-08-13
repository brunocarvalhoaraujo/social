import { templateAlert } from "../templates/alert.js";

//iniciando variables 
const formAuth = document.getElementById('formAuth');
formAuth.addEventListener('submit', (e)=>{
    e.preventDefault();
    auth(formAuth);
});
    


function auth(form){
    let formulario = new FormData(form);
    let ajax = new XMLHttpRequest();
    ajax.open('POST','../apis/auth/autenticar.php');
    // ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    ajax.onreadystatechange = ()=>{
        if(ajax.status ==200&&ajax.readyState==4){
            const resposta = JSON.parse(ajax.response);
            const respostaStatus = resposta[0];
            const msgRetorno = resposta[1];
            const dadosUser = resposta[2];
            if(respostaStatus !== ''){
                const myAlert= document.getElementById('myAlert');
                myAlert.innerHTML='';
                myAlert.appendChild(templateAlert(resposta));
            }
            if(respostaStatus =='sucesso'){
                window.sessionStorage.setItem('usuario', dadosUser.nome_usuario);
                window.sessionStorage.setItem('foto', dadosUser.foto);
                console.log(dadosUser);
                window.location = "../admin-produtos/";
            }
        }
    }
    ajax.send(formulario);
}