/*
Autor: Jorge Marcelo
Data de Criação: 12/08/2023
Github: https://github.com/Jorge-Marcelo
Linkedin: https://www.linkedin.com/in/jorge-marcelo-067a5017b/
Instagram: https://www.instagram.com/10_stronger/
Threads: https://www.threads.net/@10_stronger
*/ 


/*Pega os elemntos HTML com DOM*/
let startButton = document.getElementById("start");
let finishButton = document.getElementById("finish");
let display = document.getElementById("timer");
let horasInput = document.getElementById("horas");
let minutosInput = document.getElementById("minutos");
let segundosInput = document.getElementById("segundos");
let duracao = 0;
let timerInterval;

/*Função de start do timer*/
function start(evento) {
evento.preventDefault();
clearInterval(timerInterval);

/*Calculo de horas minutos e segundos em milessimos de segundos
PORQUE É ASSIM QUE O setInterval FUNCIONA*/
duracao = (parseInt(horasInput.value) * 60 * 60) +
(parseInt(minutosInput.value) * 60) +
parseInt(segundosInput.value);
timerInterval = setInterval(atualizarTimer, 1000);
}

/*Função que atualiza o timer*/
function atualizarTimer() {
/*Faz o calculo a partir da duração que foi setada 
pelo usuario*/
let horas = Math.floor((duracao / 60) / 60);
let minutos = Math.floor(duracao / 60) - (horas * 60);
let segundos = duracao % 60;


/*Condicionais para adicionar um 0 a esquerda*/
if (horas < 10) {
horas = "0" + horas;
}

if (minutos < 10) {
minutos = "0" + minutos;
}

if (segundos < 10) {
segundos = "0" + segundos;
}

if (isNaN(horas)) { 
display.textContent = "Insira um numero";
return;
}

if (isNaN(minutos)) { 
display.textContent = "Insira um numero";
return;
}

if (isNaN(segundos)) { 
display.textContent = "Insira um numero";
return;
}
    

/*Mostra o conteudo das variaveis do  timer no HTML*/
display.textContent = `${horas}:${minutos}:${segundos}`;

/*Decrementa os valores do dsiplay*/
duracao--;
}

/*Zera o timer*/
function reset(evento) {
evento.preventDefault();
clearInterval(timerInterval);
/*Mostra o timer zerado no HTML*/
display.textContent = "00:00:00";
}

/*Escutador de eventos dos botões de start e reset*/
startButton.addEventListener("click", start);
finishButton.addEventListener("click", reset);


/*Redes Sociais*/

/*Função que vai abrir o link do instagram*/
const instgramLink = "https://www.instagram.com/10_stronger/";
const instagramButton = document.getElementById("instagram");

function instagram(instgramLink){
const newTableInstagram = window.open(instgramLink, "_blank");
newTableInstagram.focus();
}

instagramButton.addEventListener("click", function(){
instagram(instgramLink);
})

/*Função que vai abrir o link do Threads*/
const threadsLink = "https://www.threads.net/@10_stronger";
const threadsButton = document.getElementById("threads");

function threads(threadsLink){
const newTableThreads = window.open(threadsLink, "_blank");
newTableThreads.focus();
}

threadsButton.addEventListener("click", function(){
threads(threadsLink);
})


/*Função que vai abrir o link do linkedin*/
const linkedinLink = "https://www.linkedin.com/in/jorge-marcelo-067a5017b/";
const linkedinButton = document.getElementById("linkedin");

function linkedin(linkedinLink){
const newTableLinkedin = window.open(linkedinLink, "_blank");
newTableLinkedin.focus();
}

linkedinButton.addEventListener("click", function(){
linkedin(linkedinLink);    
})


/*Função que vai abrir o link do Github*/
const githubLink = "https://github.com/Jorge-Marcelo";
const githubButton = document.getElementById("github");

function github(githubLink){
const newTableGithub = window.open(githubLink, "_blank");
newTableGithub.focus();
}

githubButton.addEventListener("click", function(){
github(githubLink);
})




