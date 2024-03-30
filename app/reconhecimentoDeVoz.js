const elementoChute = document.getElementById('chute');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.leng = 'pt-br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(evento) {
    chute = evento.results[0][0].transcript
    exibeChute(chute)
    verificaChuteValido(chute)
}

function exibeChute(chute){
    elementoChute.innerHTML = `
        <div>Você disse</div>
        <span class = "box">${chute}</span>
    `
}

recognition.addEventListener('end', () => recognition.start())

