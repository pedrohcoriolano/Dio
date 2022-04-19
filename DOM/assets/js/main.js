const corpo = document.querySelector('body')
const rodape = document.querySelector('footer')
const titulo = document.querySelector('#titulo')
const botao = document.querySelector('#botao')
const dark = 'dark-mode'

function mudar() {
    corpo.classList.toggle(dark)
    rodape.classList.toggle(dark)
    botao.classList.toggle(dark)
    
    if(botao.classList.contains(dark)) {
        botao.innerHTML = 'Light Mode'
        titulo.innerHTML = 'Dark Mode ON'
        return
    }

    botao.innerHTML = 'Dark Mode'
    titulo.innerHTML = 'Light Mode ON'
}



botao.addEventListener('click', mudar)