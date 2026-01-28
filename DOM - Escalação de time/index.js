function addPlayer() {
    let position = document.getElementById('position')
    let name = document.getElementById('name')
    let numberShirt = document.getElementById('numberShirt')

    const timeEscalado = document.getElementById('timeEscalado')

    const h5 = document.createElement('h5')
    h5.innerText = 'Jogador'

    const playerLi = document.createElement('li')
    playerLi.id = numberShirt.value

    const positionP = document.createElement('p')
    positionP.innerText = position.value

    const nameP = document.createElement('p')
    nameP.innerText = name.value

    const numberP = document.createElement('p')
    numberP.innerText = numberShirt.value
    numberP.className = 'number'

    const confirmar = confirm('Deseja confirmar a escalação?')
    if (confirmar) {
        position.value = ''
        name.value = ''
        numberShirt.value = ''
        playerLi.append(h5, positionP, nameP, numberP)
        timeEscalado.appendChild(playerLi)
    } else {
        alert('Ação cancelada!')
    }
}

function removePlayer(){
    const timeEscalado = document.getElementById('timeEscalado')
    const numberShirtRemove = document.getElementById('numberShirtRemove')
    const player = document.querySelectorAll('#listPLayer > li')

    console.log(player)
    const confirmar = confirm('Deseja remover o jogador? ')

    if(confirmar){
        player.forEach((e) => {
        if(e.id == numberShirtRemove.value){
            numberShirtRemove.value = ''
            timeEscalado.removeChild(e)
        }
    })
    } else {
        alert('Ação cancelada!')
    }


}