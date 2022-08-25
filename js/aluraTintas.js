const lista = document.querySelector('.lista')

document.querySelector('#mostrar') //adicionado id mostrar ao html
.addEventListener('click', () => { lista.hidden = false })

document.querySelector('#ocultar') //adicionado id ocultar ao html
.addEventListener('click', () => { lista.hidden = true })