function avaliarAluno(nota1, nota2, funcao) {
    let resultado = calcularMedia(nota1, nota2)
    console.log(`Sua média foi: ${resultado}`)

    let situacao = funcao(resultado)
    console.log(`Sua situação: ${situacao}`)
    
}

function calcularMedia(nota1, nota2) {
    return (nota1 + nota2) / 2
}

function verificarSituacao(res) {
    if (res >= 7) {
        return 'Aprovado'
    } else {
        return 'Reprovado'
    }
}

avaliarAluno(8, 5, verificarSituacao)