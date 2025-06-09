// Contador de tempo juntos
function atualizarContador() {
    const inicio = new Date("2024-12-15T22:30:00"); // Data de início
    const agora = new Date();
    const diff = agora - inicio;

    const segundosTotais = Math.floor(diff / 1000);

    const segundos = segundosTotais % 60;
    const minutos = Math.floor((segundosTotais / 60) % 60);
    const horas = Math.floor((segundosTotais / 3600) % 24);
    const diasTotais = Math.floor(segundosTotais / (3600 * 24));
    const meses = Math.floor(diasTotais / 30.44); // média de dias por mês
    const dias = Math.floor(diasTotais % 30.44);

    const contador = document.getElementById("contador");
    contador.textContent =
        `${meses} meses, ${dias} dias, ${horas}h ${minutos.toString().padStart(2, '0')}m ${segundos.toString().padStart(2, '0')}s`;
}

setInterval(atualizarContador, 1000);
atualizarContador();

// Passador de imagens
const imagens = document.querySelectorAll(".passadorDeImagens img");
let index = 0;

imagens[index].classList.add("ativa");

setInterval(() => {
    imagens[index].classList.remove("ativa");
    index = (index + 1) % imagens.length;
    imagens[index].classList.add("ativa");
}, 3000); // troca a cada 3 segundos

// Botão de play/pause da música
const botaoPlay = document.getElementById('playButton');
const musica = document.getElementById('musica');

botaoPlay.addEventListener('click', () => {
    if (musica.paused) {
        musica.play();
        botaoPlay.classList.add('pausado');
    } else {
        musica.pause();
        botaoPlay.classList.remove('pausado');
    }
});

//musica.play();

document.addEventListener('DOMContentLoaded', function() {
    botaoPlay.click();
 }, false);