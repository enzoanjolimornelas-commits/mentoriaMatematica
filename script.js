const saibaMais = document.getElementById('saiba-mais');
const sobre = document.getElementById('sobre');

saibaMais.addEventListener('click', () => {
    
    if(sobre.style.display === 'none' || sobre.style.display === ''){
        sobre.style.display = 'block';
    } else {
        sobre.style.display = 'none';
    }

});

const cepInput = document.getElementById('cep');
const cidadeInput = document.getElementById('cidade');
const ufInput = document.getElementById('uf');

cepInput.addEventListener('blur', async () => {

    let cep = cepInput.value.replace(/\D/g, '');

    if(cep.length === 8) {
        try {
            cidadeInput.input = "Buscando..."
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const data = await response.json();

            if(!data.erro) {
                cidadeInput.value = data.localidade;
                ufInput.value = data.uf;
            } else {
                alert("CEP não encontrado!");
                cidadeInput.value = '';
                ufInput.value = '';
            }
        } catch (error) {
            console.error("Erro ao buscar o CEP:", error);
            alert("Erro na conexão com o ViaCEP.");
        }
    }

});

const form = document.getElementById('form');
const feedbackMsg = document.getElementById('form-feedback');

form.addEventListener('submit', (e) => {

    e.preventDefault();
    feedbackMsg.textContent = "Inscrição enviada com sucesso! Entraremos em contato em breve.";
    form.reset();

});