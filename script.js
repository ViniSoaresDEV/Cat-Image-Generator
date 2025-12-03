const catBox = document.querySelector("div#cat-box");
const btnCat = document.querySelector("button#btn-cat");
const loading = document.querySelector("div#loading");

btnCat.addEventListener('click', requestCat);


async function requestCat() {

    catBox.innerHTML = "";

    try{
        const url = "https://api.thecatapi.com/v1/images/search";
        const response = await fetch(url);
        const json = await response.json();

        showCatImage(json[0].url);
    }catch(error){
        showMessage("Não achamos nenhum gato :(");
        console.error("Erro na API:", error);
    }
}


function showCatImage(catImage){
    
    const createImg = document.createElement('img');
    createImg.src = `${catImage}`;
    catBox.innerHTML = '';
    catBox.appendChild(createImg);

}

function showMessage(msg){
    catBox.innerHTML = msg;
}