// function criarCarro (cor, modelo ,portas, valor) {
//     let carro = {
//         cor,
//         modelo,
//         portas,
//         valor,
//     }

//     return carro
// }

// console.log(criarCarro('Prata', 'Civic', 4, 9000))

//Objetos como parâmetro

//Método 1

// function criarLivro(livro) {
//     return 'Nome do livro: ' + livro.nome + ' Quantidade de páginas: ' + livro.paginas
// }

// const meuLivro = {
//     nome: 'Pinóquio',
//     paginas: '400'
// }

// let retornoFunc = criarLivro(meuLivro)
// console.log(retornoFunc)

//Método 2

const meuLivro2 = {
    nome : 'Supernatural',
    paginas: 200,
    genero: 'Terror'

}


function criarLivro (livro) {
    let meuLivro = {
        nome: livro.nome,
        paginas: livro.paginas,
        genero: livro.genero
    }

    return meuLivro
}

let retornoFunc2 = criarLivro(meuLivro2)
console.log(retornoFunc2)