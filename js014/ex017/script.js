function calcular() {
    var num = document.getElementById('num')
    
    var tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        res.innerHTML = 'Adicione um número acima'
    } else {
        var n = Number(num.value)
        let c = 1
        
        tab.innerHTML = ''

        while(c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c++}`
            tab.appendChild(item)
        }
    }
    
}