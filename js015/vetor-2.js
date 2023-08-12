let num = [1, 5, 7, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

console.log(`${num.indexOf(7)}`)
console.log(`${num.indexOf(15)}`)

let pos = num.indexOf(25)

if(pos == -1) {
    console.log(`O valor não foi encontrado`)
} else {
    console.log(`O valor está no posição ${pos}`)
}

// O -1 significa que o js procurou mas não encontou o elemento