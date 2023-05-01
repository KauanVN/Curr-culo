let tags = ['h1', 'h3', 'h5', 'div', 'img', 'p', 'span', 'ul', 'li'];
let listaTags = [];
let body = document.querySelector('body');

// criei as 3 tags: div, img e p
tags.forEach(tag => {
  let tagNova = criarTags(tag);
  listaTags.push(tagNova);
});

listaTags[0].textContent = "Kauê de Souza";
listaTags[1].textContent = "PUBLICITÁRIO";

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
let novaTag = criarTags('h1');
novaTag.textContent = 'Sobre mim';
body.appendChild(novaTag);

let novoH5 = criarTags('h5');
novoH5.innerHTML = 'Quando pequeno imaginava narrativas<br>diferentes para meus videogames e foi ali que<br>me apaixonei pela escrita criativa, pois através<br>dela eu posso fazer muito mais do que imagino...<br>Posso tornar real cada texto meu';
novoH5.classList.add('small');
body.appendChild(novoH5);

// Adiciona o novo elemento h3 como um filho do elemento "Sobre Mim"
novaTag.appendChild(novoH5);

// Habilidades
let novaTagH1 = criarTags('h1');
novaTagH1.textContent = 'Habilidades';
body.appendChild(novaTagH1);

// Lista de habilidades
let habilidades = ['Comunicação verbal e escrita', 'Apresentação', 'Flexibilidade', 'Proatividade', 'Organização', 'Roteiro para social media', 'Visão multidisciplinar', 'Adaptabilidade'];
let listaHabilidades = criarTags('ul');
body.appendChild(listaHabilidades);

habilidades.forEach(habilidade => {
  let li = criarTags('li');
  li.textContent = habilidade;
  listaHabilidades.appendChild(li);
});

// Outras Informações
let novaTagH2 = criarTags('h1');
novaTagH2.textContent = 'Outras Informações';
body.appendChild(novaTagH2);

let novoH4 = criarTags('h5');
novoH4.innerHTML = 'Conhecimento avançado em espanhol<br>Conhecimento básico em inglês<br>Participante da Feira de Escritores(2019)';
novoH4.classList.add('small');
body.appendChild(novoH4);

// Contato
let novavTag = criarTags('h1');
novavTag.textContent = 'Contato';
body.appendChild(novavTag);

let Contato = ['Site: www.grandesite.com.br', 'Celular: (12) 3456-7890', 'E-mail: ola@grandesite.com.br'];
let listaContato = criarTags('ull');
body.appendChild(listaContato);

Contato.forEach(Contato => {
    let li = criarTags('li');
    li.textContent = Contato;
    listaContato.appendChild(li);
  });

// Formação
  let novasTagH1 = criarTags('h1');
novasTagH1.textContent = 'Formação';
body.appendChild(novasTagH1);

let novasTagH2 = criarTags('h2');
novasTagH2.textContent = 'MBA em Gestão de Marketing';
body.appendChild(novasTagH2)

let novasTagH3 = criarTags('h3');
novasTagH3.textContent = 'Universidade do Nonte / Jun. 2021 - atualmente';
body.appendChild(novasTagH3)

let novasTagHH3 = criarTags('h5');
novasTagHH3.innerHTML = 'Aluno com bolsa integral por bom currículo estudantil <br>Estudo a área de Gestão de Start-ups arco-íris auxiliada pelo<br>Marketing efetivo.';
novasTagHH3.classList.add('small');
body.appendChild(novasTagHH3);

//Outra parte da formação

let novasTagGG = criarTags('h2');
novasTagGG.textContent = 'Bacharel em Publicidade e Propaganda';
body.appendChild(novasTagGG)

let novasTagH = criarTags('h3');
novasTagH.textContent = 'Universidade do Nonte / Graduado em Jan. 2020';
body.appendChild(novasTagH)


let novasTagG = criarTags('h5');
novasTagG.innerHTML = 'Integrante por dois anos de um projeto de iniciação Científica<br>Ganhador do projeto destaque de 2018, eleito pelos professores.';
novasTagG.classList.add('small');
body.appendChild(novasTagG);

//Experiêcia

let novasTagHHH = criarTags('h1');
novasTagHHH.textContent = 'Experiência';
body.appendChild(novasTagHHH);

let novasTagHHHH = criarTags('h2');
novasTagHHHH.textContent = 'Redator Júnior';
body.appendChild(novasTagHHHH)

let novasTagHHHHH = criarTags('h3');
novasTagHHHHH.textContent = 'Millennium Desing / Mar. 2021 - Nov. 2021';
body.appendChild(novasTagHHHHH)

let novasTag1 = criarTags('h5');
novasTag1.innerHTML = 'Responsavel pela criação de textos para campanhas <br>Publicitárias e legendas para redes sociais atendidas pela agência';
novasTag1.classList.add('small');
body.appendChild(novasTag1);

let novasTag11 = criarTags('h5');
novasTag11.innerHTML = 'Alguns clientes com quem trabalhei: Matia Labs, Araico <br>Farmacêutica e Cubi Games';
novasTag11.classList.add('small');
body.appendChild(novasTag11);

// método fabrica   
function criarTags(tag) {
  let novaTag = document.createElement(tag);
  return novaTag; 
}