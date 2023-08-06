function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    // var hora = 8
    msg.innerHTML =`Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        // BOM DIA
        img.src = 'imagens/manha1.png'
        msg.innerHTML += ' da mannhã'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE
        img.src = 'imagens/tarde1.png'
        document.body.style.backgroundImage = "linear-gradient(to right, #DE8579, #FFBD71)"
        msg.innerHTML += ' da tarde'
    } else {
        // BOA NOITE
        img.src = 'imagens/noite1.png'
        document.body.style.backgroundImage = "linear-gradient(to right, #092958, #8093B4)"
        msg.innerHTML += ' da noite'

    }
}


