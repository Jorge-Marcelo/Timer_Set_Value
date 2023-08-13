let startButton = document.getElementById("start");
let finishButton = document.getElementById("finish");
let display = document.getElementById("timer");
let horasInput = document.getElementById("horas");
let minutosInput = document.getElementById("minutos");
let segundosInput = document.getElementById("segundos");
let duracao = 0;
let timerInterval;

function start(evento) {
evento.preventDefault();
clearInterval(timerInterval);

duracao = (parseInt(horasInput.value) * 60 * 60) +
(parseInt(minutosInput.value) * 60) +
parseInt(segundosInput.value);
timerInterval = setInterval(atualizarTimer, 1000);
}

function atualizarTimer() {
let horas = Math.floor((duracao / 60) / 60);
let minutos = Math.floor(duracao / 60) - (horas * 60);
let segundos = duracao % 60;

if (horas < 10) {
horas = "0" + horas;
}

if (minutos < 10) {
minutos = "0" + minutos;
}

if (segundos < 10) {
segundos = "0" + segundos;
}

display.textContent = `${horas}:${minutos}:${segundos}`;
duracao--;
}

function reset(evento) {
evento.preventDefault();
clearInterval(timerInterval);
display.textContent = "00:00:00";
}

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




