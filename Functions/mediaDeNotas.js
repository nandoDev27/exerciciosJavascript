function mediaNotas(nota1, nota2) {
    return (nota1 + nota2) / 2
}

let res = mediaNotas(10, 2)

if (res >= 7) {
    console.log('Parabéns, você foi aprovado! Sua nota foi: ' + res)
} else {
    console.log('Reprovado, sua média foi: ' + res)
}

