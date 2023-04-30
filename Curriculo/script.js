let tags = ['h1','h3','div','img','p']
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



/*
let body = document.querySelector('body')
let p = 
p.textContent = "Everson Bacelli"
body.appendChild(p)
*/


// método fabrica
function criarTags(tag){
    let novaTag = document.createElement(tag)
    return novaTag
}