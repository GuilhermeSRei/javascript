function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value) 
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = "Homem"
            if (idade >= 0 && idade < 18) {
                // criança menino
                img.setAttribute('src', 'menino1.png')
            } else if (idade < 40) {
                // Adulto homem
                img.setAttribute('src', 'homem1.png')
            } else {
                // idoso homem
                img.setAttribute('src', 'idoso1.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 18) {
                // crinaça menina
                img.setAttribute('src', 'menina1.png')
            } else if (idade < 40) {
                // Mulher adulta
                img.setAttribute('src', 'mulher1.png')
            } else {
                // Mulher idosa
                img.setAttribute('src', 'idosa1.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
        res.style.textAlign = 'center'
        img.style.padding = '1em'
        
    }

}