let opcao = ''
let vagas = []

function criarVaga(nomeVaga, descricao, dataLimite) {
    let vaga = {
        nomeVaga,
        descricao,
        dataLimite,
        inscritos: []
    }

    return vaga
}

function inscreverCandidato(nomeCandidato, idadeCandidato, indiceVaga) {
    let candidato = {
        nomeCandidato,
        idadeCandidato,
        indiceVaga
    }

    return candidato
}

do {
    opcao = prompt(`Seja bem vindo!\n Escolha uma opção: \n1 - Listar vagas disponiveis \n2 - Criar uma nova vaga \n3 - Visualizar uma vaga \n4 - Inscrever um candidato em uma vaga \n5 - Excluir uma vaga \n6 - Sair`)
    switch (opcao) {
        case '1':
            vagas.forEach((elemento, indice) => {
                alert(`Vaga: ${elemento.nomeVaga} \nIndice: ${indice} \nQuantidade de inscritos: ${elemento.inscritos.length}`)
            })
            break

        case '2':
            let nomeVaga = prompt('Informe o nome da vaga: ')
            let descricao = prompt('Informe a descrição da vaga: ')
            let dataLimite = prompt('Informe a data limite da vaga: ')

            vagas.push(criarVaga(nomeVaga, descricao, dataLimite))
            console.log(vagas)
            break

        case '3':
            alert('Em andamento...')
            break

        case '4':
            let nomeCandidato = prompt('Informe o nome do candidato: ')
            let idadeCandidato = prompt('Informe a idade do candidato: ')
            let indiceVaga = prompt('Informe o indice da vaga: ')

            confirm(`Confirmar a inscrição do candidato: ${nomeCandidato} \nIdade: ${idadeCandidato}
            \nPara a vaga n°: ${indiceVaga} ?`)

            if (confirm && idadeCandidato > '18') {
                alert('Inscrição realizada com sucesso')
            } else if (confirm && idadeCandidato < '18') {
                alert('Vaga não disponível para menores de idade')
            } else {
                alert('Falha na inscrição')
            }

            vagas.forEach((vaga, indice) => {
                if (indiceVaga == indice) {
                    vaga.inscritos.push(inscreverCandidato(nomeCandidato, idadeCandidato, indiceVaga))
                } else if (indiceVaga != indice || indiceVaga == undefined) {
                    alert('Vaga não encontrada, verifique se o indice está correto.')
                } else {
                    alert('Vaga inexistente')
                }
            })
            break
        case '5':
            const indiceExcluir = prompt('Informe o indice da vaga: ')

            if (vagas == [] || indiceExcluir == '') {
                alert('Não foi possível remover, verifique se o indice está correto.')
            } else {
                vagas.forEach((elemento, indice) => {
                    if (indiceExcluir == indice) {
                        confirm(`Deseja excluira vaga: ${elemento.nomeVaga} \nDescrição: ${elemento.descricao} \nData limite: ${elemento.dataLimite} \nInscritos${elemento.inscritos.length}?`)

                        if (confirm && indiceExcluir == indice) {
                            vagas.splice(indiceExcluir, 1)
                            alert('Vaga exlcluida')
                        } else {
                            alert('Vaga inexistente')
                        }
                    } else if (indiceExcluir != indice) {
                            alert('Não foi possível remover, verifique se o indice está correto.')
                    } else {
                        alert('Operação cancelada')
                    }
                })
            }

            break
        default:
            alert('Opção inválida')
    }
} while (opcao !== '6')

console.log(vagas)

