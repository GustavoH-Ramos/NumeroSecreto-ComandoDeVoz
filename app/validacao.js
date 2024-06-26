function verificaChuteValido(chute) {
    const numero = +chute;
    const gameOver = chute, fimJogo = 'game over'

    if (gameOver === fimJogo) {
        document.body.innerHTML = `
        <h2>Game over!<h2>
        <h3>O jogo foi finalizado.</h3>

        <button id = "jogar-novamente" class = "btn-jogar">Jogar novamente</button>
    `
        recognition.stop()
    }
    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido</div>`
        return
    }

    if (numeroNaoPermitido(numero)){
        elementoChute.innerHTML += `
        <div>Valor inválido: o número secreto precisa estar entre ${menorValor} e ${maiorValor}</div>
        `
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!<h2>
            <h3>O número secreto era ${numeroSecreto}</h3>

            <button id = "jogar-novamente" class = "btn-jogar">Jogar novamente</button>
        `
    }else if(numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>
        `
    }else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>
        `
    }

   
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);

}

function numeroNaoPermitido(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})
