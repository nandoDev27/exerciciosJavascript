let opcao = ''
let imoveis = []

do {
    opcao = prompt('Olá, Seja bem vindo(a) ao cadastro de imóveis!\n' + 'Imóveis cadastrados: ' + imoveis.length + '\nSelecione uma opção \n1 - Salvar imovel \n2 - Imóveis salvos \n3 - Encerrar')

    switch (opcao) {
        case '1':
            let imovel = {}
            let nome = prompt('Nome do proprietário: ')
            let qtdQuartos = prompt('Quantidade de quartos: ')
            let qtdBanheiros = prompt('Quantidade de banheiros: ')
            let qtdGaragem = prompt('Possui garagem? (Sim/Não)')

            imovel.proprietario = nome
            imovel.quartos = qtdQuartos
            imovel.banheiros = qtdBanheiros
            imovel.garagem = qtdGaragem

            imoveis.push(imovel)

        break

        case '2':
            for(let i = 0; i < imoveis.length; i++) {
                alert('Proprietário:  ' + imoveis[i].proprietario + '\nQuartos: ' + imoveis[i].quartos + '\nBanheiros: ' + imoveis[i].banheiros + '\nPossui garagem? ' + imoveis[i].garagem) 
            }
        break

        case '3':
            alert('Encerrado...')
        break

        default: 
            alert('Opção inválida...')
        break

    }
} while (opcao !== '3')