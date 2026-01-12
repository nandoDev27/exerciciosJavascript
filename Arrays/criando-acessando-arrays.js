// 1) Criando e acessando arrays

const nomes = ['Luis', 'Fernando', 'Oliveira']
console.log(nomes[0] + ' ' + nomes[2])

// 2 Percorrendo array com for

for(let i = 0; i < nomes.length; i++){
    console.log('O nome ' + nomes[i] + ' está na posição ' + i)
}

// 3) Somando valores
const numeros = [10, 15, 25, 10, 60]

for (let i = 0; i < numeros.length; i++){
    let soma = numeros[i]
    let resultado = soma + numeros[i]
    console.log(numeros[i] + ' + ' + soma + ' = ' + resultado)
}