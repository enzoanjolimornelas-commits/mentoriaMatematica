const saibaMais = document.getElementById('saiba-mais');
const sobre = document.getElementById('sobre');

saibaMais.addEventListener('click', () => {
    sobre.style.display = 'block';
    saibaMais.textContent = "Vagas Limitadas!";
});