const nome = prompt('Digite seu nome: ')
let visitaCidade = prompt('Já visitou alguma cidade? (Sim/Não) ')
let cidade = ''
let cidadesVisitadas = ''
let quantidadeCidades = 0

while (visitaCidade === 'Sim') {
    cidade = prompt('Informe o nome da cidade: ')
    cidadesVisitadas += '\n' + cidade
    quantidadeCidades++
    visitaCidade = prompt('Já visitou outra cidade? (Sim/Não) ')
    if (visitaCidade === 'Não') {
        alert('Obrigado pela participação!')
    }
}

alert('Parabéns ' + nome + '\n' +
    'você visitou ' + quantidadeCidades + ' cidades\n ' + 'e foram elas: ' + cidadesVisitadas
)