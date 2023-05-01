let tags = ['h1','h3','div','img','p','span']
let listaTags = []
let body = document.querySelector('body')

// criei as 3 tags: div, img e p
tags.forEach(tag => {
    let tagNova = criarTags(tag)
    listaTags.push(tagNova)
});

listaTags[0].textContent = "Kauê de Souza"
listaTags[1].textContent = "PUBLICITÁRIO"

// adicionei a div no DOM
body.appendChild(listaTags[2])
listaTags[0].classList.add('title')
listaTags[1].classList.add('titlep')

// incluindo na div a tag img e a p

listaTags[2].classList.add('texto')

listaTags[2].appendChild(listaTags[0])
listaTags[2].appendChild(listaTags[1])

// Adicione o ícone RocketChat
listaTags[2].appendChild(listaTags[5])
listaTags[5].classList.add('material-symbols-outlined')
listaTags[5].textContent = "chat"


listaTags[2].appendChild(listaTags[0])
listaTags[2].appendChild(listaTags[1])

// sobre mim
let novaTag = criarTags('h1');
novaTag.textContent = 'Sobre Mim';
body.appendChild(novaTag);

let novoH3 = criarTags('h3');
novoH3.textContent = 'Informações sobre você';

// Adiciona o novo elemento h3 como um filho do elemento "Sobre Mim"
novaTag.appendChild(novoH3);

// método fabrica
function criarTags(tag){
    let novaTag = document.createElement(tag);
    return novaTag;
}