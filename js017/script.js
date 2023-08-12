// let res = document.getElementById('res')


let num = document.getElementById('txtn')
let tab = document.getElementById('guarda')
let res = document.querySelector('div#res')
let valores = []

function numero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inTab(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (numero(num.value) && !inTab(num.value, valores)) {
        window.alert('Tudo Ok')
    } else {
        window.alert('Valor inválido ou já encontrado na lista')
    }
}

    


