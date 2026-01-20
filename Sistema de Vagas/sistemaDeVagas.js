let opcao = ''
let vagas = []

function criarVaga(nomeVaga, descricao, dataLimite){
    let vaga = {
        nomeVaga,
        descricao,
        dataLimite
    }

    return vaga
}

do{
    opcao = prompt(`Seja bem vindo!\n Escolha uma opção: \n1 - Listar vagas disponiveis \n2 - Criar uma nova vaga \n3 - Visualizar uma vaga \n4 - Inscrever um candidato em uma vaga \n 5 - Excluir uma vaga \n6 - Sair`) 
    switch(opcao){
        case '1': 
         alert('Em andamento...')
        break

        case '2':
            
    }
} while (opcao !== '6')


