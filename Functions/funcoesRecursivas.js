//1 - Contagem regressiva

// function contagem(num){
//     if(num === 0){
//         console.log('Fim')
//     } else {
//         console.log(num)
//        return contagem(num-1)
//     }
// }

// contagem(10)

//2 - Soma de números

//1+2+3+4

function somar(num){
    if (num === 1 ){
       return 1
    } else {
      return num + somar(num - 1)
    }
}

console.log(somar(4))