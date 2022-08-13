export {templateAlert};

function templateAlert(key){
    let container = document.createElement('div');
    const template = `
    <div class="templateAlert">
        <span title="Fechar"></span>
        <div class="boxImgAlert">
            <img src="../img/${key[0]}.png" alt="">
        </div>
        <div class="boxTextAlert">
            <p class="textAlertTitle">${key[0]}</p>
            <p class="textAlertBody">${key[1]}</p>
        </div>
    </div>
    `;

    container.innerHTML = template;
    return container;
}