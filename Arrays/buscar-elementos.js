//Include
//Verifica se o elemento buscado existe no array.

const linguagens = ['Java', 'Python', 'Javascript']
const linguagem = 'Java'
console.log(linguagens.includes(linguagem))

if(linguagens.includes(linguagem) === true) {
    console.log('A linguagem é ' + linguagem + ' e está na posição ' + linguagens.indexOf(linguagem))
    

    
} else {
    console.log('A linguagem não foi encontrada.')
}
//(O retorno é false, pois não existe no array, caso contrário seria true)

//IndexOf
//Retorna o indice do elemento buscado.
console.log(linguagens.indexOf('Python'))

//O segundo parametro é um indice de referencia, ou seja, vai começar a buscar a partir do indice indicado. (Opcional)
