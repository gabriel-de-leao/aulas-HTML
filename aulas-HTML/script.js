console.log("Sobrevivente conectado ao DOM");
const cabecalho = document.querySelector('header');
console.log(cabecalho);
const btnTema = document.querySelector('#btn-tema')
const boasVindas = document.querySelector('#boas-vindas');
const tituloSite = document.querySelector('header h1')

const listaBeneficios = document.querySelectorAll('ol li');
console.log(listaBeneficios.length);

const campoNome = document.querySelector('input[type="text"]');
const campoEmail = document.querySelector('input[type="email"]');

tituloSite.textContent('The Walking Date')

const citacao = document.querySelector('#persona').innerHTML("- <strong>Zezinho da Foice </strong>, sobrevivente Nível 5")

const textoBoasVindas = document.querySelector('#boas-vindas p').textContent;
console.log(textoBoasVindas)

const dicas = document.querySelector('aside');
dicas.style.borderColor = 'var(--cor-sangue)'
dicas.style.fontSize = '1.1rem';

const imagem1 = document.querySelector('img')
imagem1.getAttribute('alt')
imagem1.setAttribute('alt', 'Casal de zumbis apaixonados caminhando ao por do sol')

campoNome.value ("Sobrevivente anonimo")

document.querySelector('tbody tr').classList.add ('destaque-infectado')

const aviso = document.createElement ('p');
aviso.textContent = ("Alerta de horda: Encontros hoje apenas em zonas seguras").style

document.querySelector('#barra-alerta').appendChild(aviso)

const novoBeneficio = document.creatElement ('li');
novoBeneficio = ("Seguro contra perda de membros durante o primeiro encontro");

document.querySelector ('#beneficios ol').appendChild(novoBeneficio);

document.querySelector('#fechar-alerta').addEventListener ('click', document.querySelector('barra-alerta').remove());

const htmlRoot = document.documentElement