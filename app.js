let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroScreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto')
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10')
}

exibirMensagemInicial()

function verificarChute() {
    let chute = document.querySelector('input').value
    
    if (chute == numeroScreto) {
        exibirTextoNaTela('h1', 'Acertou!')
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa'
        let mensagemTentativas = `Você descobriu o número secreto, com ${tentativas} ${palavraTentativas}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled')
    }
    else{
        if(chute > numeroScreto){
        exibirTextoNaTela('p', 'O número secreto é menor')
    } else {
        exibirTextoNaTela('p', 'O número secreto é maior')
    }
    tentativas++
    limparCampo()
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeELementosDaLista = listaDeNumerosSorteados.length

    if (quantidadeDeELementosDaLista == numeroLimite) {
        listaDeNumerosSorteados = []
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio()
    } else{
        listaDeNumerosSorteados.push(numeroEscolhido)
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido
    }
}
function limparCampo() {
    chute = document.querySelector('input')
    chute.value = ''
}
function reiniciarJogo() {
    numeroScreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled', true)
}