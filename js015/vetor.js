let valores = [11, 25, 9, 55, 7, 88, 6, 41, 27, 144, 1000, 15, 25]

console.log(`${valores}`)

/*
for ( let v = 0; v<valores.length; v++){
    console.log(`${valores[v]}`)
}
*/

/*
for ( let  v = 0; v<10; v++){
    console.log(`A posição ${v} é o valor ${valores[v]}`)
}
*/

// for ( let v in valores){
//     console.log(`A posição ${v} é o número ${valores[v]}`)
// }

for(let pos in valores) {
    console.log(`Os elementos do vetor são ${valores[pos]}`)
}