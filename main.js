const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");


for (let i = 0; i < botoes.length; i++) {
  botoes[i].onclick = function () {
    for (let j = 0; j < botoes.length; j++) {
      botoes[j].classList.remove("ativo");
      textos[j].classList.remove("ativo");
    }

    botoes[i].classList.add("ativo");
    textos[i].classList.add("ativo");
  };
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2027-6-12");
const tempoObjetivo2 = new Date("2027-2-10");
const tempoObjetivo3 = new Date("2027-3-10");
const tempoObjetivo4 = new Date("2027-8-10");

const tempos = [tempoObejetivo1, tempoObejetivo2, tempoObejetivo3, tempoObejetivo4];

contadores[0].textContent = calculaTempo(tempoObjetivo1);
contadores[1].textContent = calculaTempo(tempoObjetivo2);
contadores[2].textContent = calculaTempo(tempoObjetivo3);
contadores[3].textContent = calculaTempo(tempoObjetivo4);

function calculaTempo(tempoObjetivo) {
  let tempoAtual = new Date();
  let tempoFinal = tempoObjetivo - tempoAtual;
  let segundos = Math.floor(tempoFinal / 1000);
  let minutos = Math.floor(segundos / 60);
  let horas = Math.floor(minutos / 60);
  let dias = Math.floor(horas / 24);

  segundos %= 60;
  minutos %= 60;
  horas %= 24;

  return (
    dias +
    " dias " +
    horas +
    " horas " +
    minutos +
    " minutos " +
    segundos +
    " segundos"
  );
}