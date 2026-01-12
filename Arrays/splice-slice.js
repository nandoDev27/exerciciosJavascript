//Slice

/*Serve para remover elementos a partir de um indice indicado. O retorno desse métdo pode ser armazenado em uma nova variavel, pois será um novo array com os elementos removidos. Não altera a variavel original.*/

const listaDeCompras = ['Arroz', 'Feijão', 'Leite', 'Bolacha', 'Carne', 'Suco']

const itensRemovidos = listaDeCompras.slice(-3)
console.log(itensRemovidos)

//Splice

/*Remove um determinado grupo de elementos do array, a partir de um indice indicado, que podem ser substituidos por outros elementos. O retorno é uma lista com elementos removidos.*/

/*Quando nenhum elemento é inserido no parametro da quantidade para remover, ele não remove nenhum elemento, e só adiciona o novo elemento a partir do indice especificado*/

const itemSubstituido = listaDeCompras.splice(1, 1, 'Macarrão')

console.log(listaDeCompras)
console.log(itemSubstituido)