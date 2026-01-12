//Push e Pop

//Push adiciona um elemento ao final do array.

const motos = ['Today', 'Titan', 'Fazer', 'Factor', 'Start']

motos.push('Fan')
motos.push('Dominar')

console.log('Array com os novos elementos adicionados: ' + motos)

//Pop remove o ultimo elemento.

const ultimoElemento = motos.pop()
console.log('O  ultimo elemento removido foi: '+ ultimoElemento)
console.log('Então o array ficou: ' + motos)

//Shift e unshift

//Shift remove o primeiro elemento do array.

const primeiroElemento = motos.shift()
console.log('O primeiro elemento removido foi: ' + primeiroElemento)
console.log('Então o array ficou: ' + motos)

//Unshift adiciona um elemento ao começo do array.

motos.unshift('Tenere')
console.log('Array adicionando um novo elemento ao inicio: ' + motos)