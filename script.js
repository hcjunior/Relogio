const ponteiroHora = document.querySelector("#hora");
const ponteiroMinuto = document.querySelector("#minuto");
const ponteiroSegundo = document.querySelector("#segundo");


var data = new Date();
var hora = data.getHours();
var minuto = data.getMinutes();
var segundo = data.getSeconds();

let posicaoHora = hora*360/12 + ((minuto * 360/60)/12);
let posicaoMinuto = (minuto*360/60)+(segundo*360/60)/60;
let posicaoSegundo = segundo*360/60;

function ExecutaRelogio(){

    posicaoHora = posicaoHora+(3/360);
    posicaoMinuto = posicaoMinuto + (6/60);
    posicaoSegundo = posicaoSegundo + 6;

    ponteiroHora.style.transform = `rotate(${posicaoHora}deg)`;
    ponteiroMinuto.style.transform = "rotate(" + posicaoMinuto + "deg)";
    ponteiroSegundo.style.transform = `rotate(${posicaoSegundo}deg)`;

}

var intervalo = setInterval(ExecutaRelogio, 1000);