let num = [5, 8, 2, 9, 3]
num[4] = 7
num.push(1)

console.log(`Nosso vetor é o ${num}`) 

console.log(`O primeiro númmero desse vetor é ${num[0]}`)

console.log(`O comprimento do novo vetor ${num.length}`)

console.log(`Ordem crescente dos elementos do vetor é ${num.sort()}`)

console.log(`O primeiro valor do vetor é ${num[0]}`)

for (let pos = 0; pos<num.length; pos++){
    console.log(num[pos])
}