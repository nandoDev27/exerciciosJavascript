const titulo = document.getElementById('titulo')
const paragrafos = [...document.getElementsByTagName('p')]

function alterarConteudo() {
    titulo.innerText = 'Título alterado com JS!'

    paragrafos.forEach((e, i) => {
        e.innerText = `paragráfo ${i + 1}`
        e.classList.add('alterar')
    })
}