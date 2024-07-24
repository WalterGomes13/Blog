const listaImg = document.getElementById('listaImg');
const botao = document.getElementById('botao');
const tituloInput = document.getElementById('titulo');
const corpoInput = document.getElementById('corpo');
const urlInput = document.getElementById('imagem');

botao.addEventListener('click',(e)=>{
    e.preventDefault();
    const li = document.createElement('li');
    li.innerHTML = `<img src="${urlInput.value}" alt=""><div id="textos"><h2 id="h2Titulo">${tituloInput.value}</h2><p>${corpoInput.value}</p></div>`;
    listaImg.appendChild(li);

});