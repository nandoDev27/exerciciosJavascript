function addPlayer() {
    let position = document.getElementById('position').value
    let name = document.getElementById('name').value
    let numberShirt = document.getElementById('numberShirt').value

    const timeEscalado = document.getElementById('listPlayer')

    const playerLi = document.createElement('li')
    playerLi.id = numberShirt
    playerLi.className = 'playerFree'
    playerLi.innerText = `Posição ${position} Jogador: ${name} Camisa: ${numberShirt}`

    const confirmar = confirm('Deseja confirmar a escalação?')
    if (confirmar) {
        document.getElementById('position').value = ''
        document.getElementById('name').value = ''
        document.getElementById('numberShirt').value = ''
        timeEscalado.appendChild(playerLi)
    } else {
        alert('Ação cancelada!')
    }
}

function removePlayer() {
    const timeEscalado = document.getElementById('listPlayer')
    const numberShirtRemove = document.getElementById('numberShirtRemove').value
    const playerRemove = document.querySelectorAll('#listPlayer > li')

    const confirmar = confirm('Deseja remover o jogador? ')
    console.log(playerRemove)

    if (confirmar) {
        playerRemove.forEach((e) => {
            if (e.id == numberShirtRemove) {
                timeEscalado.removeChild(e)
            }
        })
    } else {
        alert('Ação cancelada!')
    }
}

// function transferPlayer(){
//     const transfer = document.getElementById('transfer')
//     const playerTransfer = [...document.querySelectorAll('#listPlayer > li')]

//     playerTransfer.map((element) => {
//         element.addEventListener('click', (ev)=>{
//             console.log(ev.target)
//         })
//     })
// }

