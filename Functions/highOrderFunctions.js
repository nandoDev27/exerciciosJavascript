function calcular(v1, v2, operacao){
    const resultado = operacao(v1, v2)
    return resultado
}

function somar (v1, v2){
    console.log('Realizando uma soma')
    return v1 + v2
}

console.log(calcular(2,3,somar))

//O forEach é um exemplo de high order function

let frutas = ["Maçã", "Banana", 'Abacate', "Uva"]

let novaLista = frutas.forEach(function(fruta, indice, array){
    console.log(`Fruta: ${fruta} Posição: ${indice}` )
    if (indice === array.length - 1){
        array[indice] = "Abacaxi"
    }
})

console.log(frutas)

