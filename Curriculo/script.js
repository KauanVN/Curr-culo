let nome = getParameterByName('nome');
let sobre = getParameterByName('sobre');
let habilidade = getParameterByName('habilidade');
let informacoes = getParameterByName('informacoes');
let site = getParameterByName('site');
let telefone = getParameterByName('telefone');
let email = getParameterByName('email');
let empresa = getParameterByName('empresa');
let cargo = getParameterByName('cargo');
let inicio = getParameterByName('inicio');
let fim = getParameterByName('fim');
let descricao = getParameterByName('descricao');

let tags = ['h1', 'h3', 'h5', 'div', 'img', 'p', 'span', 'ul', 'li'];
let listaTags = [];
let body = document.querySelector('body');

// criei as 3 tags: div, img e p
tags.forEach(tag => {
let tagNova = criarTags(tag);
listaTags.push(tagNova);
});

listaTags[1].textContent = "Kauê de Souza";
listaTags[2].textContent = "PUBLICITÁRIO";

// adicionei a div no DOM
body.appendChild(listaTags[2]);
listaTags[0].classList.add('title');
listaTags[1].classList.add('titlep');

// incluindo na div a tag img e a p
listaTags[2].classList.add('texto');
listaTags[2].appendChild(listaTags[0]);
listaTags[2].appendChild(listaTags[1]);

// Adicione o ícone RocketChat
listaTags[2].appendChild(listaTags[5]);
listaTags[5].classList.add('material-symbols-outlined');
listaTags[5].textContent = "chat";
listaTags[2].appendChild(listaTags[0]);
listaTags[2].appendChild(listaTags[1]);

// sobre mim
let container = new criarTags('div')
let cima = criarTags('div')
let novaTag = criarTags('h1');
novaTag.textContent = 'Sobre mim';
body.appendChild(container);
container.classList = 'container'
container.appendChild(cima)
cima.appendChild(novaTag)
cima.classList = "cima"

let novoH5 = criarTags('h5');
novoH5.innerHTML = sobre ;
novoH5.classList.add('small');
cima.appendChild(novoH5);

// Adiciona o novo elemento h3 como um filho do elemento "Sobre Mim"
novaTag.appendChild(novoH5);

// Habilidades
let novaTagH1 = criarTags('h1');
novaTagH1.textContent = 'Habilidades';
cima.appendChild(novaTagH1);

// Lista de habilidades
let habilidades = [habilidade];
let listaHabilidades = criarTags('ul');
cima.appendChild(listaHabilidades);

habilidades.forEach(habilidade => {
let li = criarTags('li');
li.textContent = habilidade;
listaHabilidades.appendChild(li);
});

// Outras Informações
let novaTagH2 = criarTags('h1');
novaTagH2.textContent = 'Outras Informações';
cima.appendChild(novaTagH2);

let novoH4 = criarTags('h5');