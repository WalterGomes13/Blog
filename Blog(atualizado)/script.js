const listaImg = document.getElementById('listaImg');
const botao = document.getElementById('botao');
const tituloInput = document.getElementById('titulo');
const corpoInput = document.getElementById('corpo');
const urlInput = document.getElementById('imagem');
const botaoImg = document.getElementById('btnCtd');
const janela = document.getElementById('jnlModal');


botao.addEventListener('click',(e)=>{
    e.preventDefault();
    let dataAtual = new Date()
    const li = document.createElement('li');
    li.innerHTML = `<button id="btnCtd"><img src="${urlInput.value}" alt=""><div id="textos"><h2 id="h2Titulo">${tituloInput.value}</h2><p id="linhaCorpo">${corpoInput.value}</p></div><span id="date">${dataAtual.getDate()}/${dataAtual.getMonth()+1}/${dataAtual.getFullYear()}</span></button>`;
    listaImg.appendChild(li);


    li.querySelector('#btnCtd').addEventListener('click',()=>{
            janela.innerHTML = `<img src="${urlInput.value}" alt="" id="imgBox"><span id="dateBox">${dataAtual.getDate()}/${dataAtual.getMonth()+1}/${dataAtual.getFullYear()}</span><div id="textos"><h2 id="h2Titulo">${tituloInput.value}</h2><p id="linhaCorpo">${corpoInput.value}</p></div><ul id="cmt"></ul><input type="text" name="" id="inputCmt"><button id="addCmt">Adicionar Comentário</button><button id="fechar">Fechar</button>`;
            janela.style.display = 'flex';

            janela.querySelector('#fechar').addEventListener('click',()=>{
                janela.style.display = 'none';
            });

            janela.querySelector('#addCmt').addEventListener('click',()=>{
                const inputCmt = janela.querySelector('#inputCmt').value
                const li2 = document.createElement('li');
                li2.innerHTML = `${inputCmt}`;

                janela.querySelector('#cmt').appendChild(li2);
                janela.querySelector('#inputCmt').value = '';
            })

    });

});