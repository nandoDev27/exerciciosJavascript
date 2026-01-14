const nome = prompt('Seja bem-vindo(a), informe seu nome: ')
let saldo = 0
let opcao = ''



do {
   opcao = prompt('Sr(a)' + nome + ', o seu saldo é de R$' + saldo + '.\n Selecione uma opção do menu \n1 - Realizar depósito \n2 - Realizar saque \n3 - Encerrar')

    switch(opcao){
        case '1': 
           let deposito = parseFloat(prompt('Informe o valor do depósito: '))
           saldo += deposito
        break;

        case '2': 
            let saque = parseFloat(prompt('Informe o valor do saque: '))
            
            if(saldo > saque){
                alert('Saque realizado com sucesso')
                saldo -= saque
            } else {
                alert('Você não possui saldo suficiente para realizar o saque')
            }
        break;
        

        case '3' : 
            alert('Encerrando...')
        break
        
        default:
            alert('Opção inválida.')
        break
    }
} while (opcao !== '3')