const robotron = document.querySelector("#robotron") // usamos uma const para guardar um elemento. a const é uma variavel que nao pode ser alterada

robotron.addEventListener("click", dizOi) // usamos a variável dentro do escutador de eventos

function dizOi() {     
    console.log("oi")
}

const subtrair = document.querySelector("#subtrair")
const somar = document.querySelector("#somar")
const braco = document.querySelector("#braco")



controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.text)
    })
})

const controle = document.querySelectorAll(".controle-ajuste")

somar.addEventListener("click", (evento) => {manipulaDados("somar")})

subtrair.addEventListener("click", (evento) => {manipulaDados("subtrair")})

function manipulaDados(operacao) {
    if(operacao === "-") {
        braco.value = parseInt(braco.value) - 1
    } else {
        braco.value = parseInt(braco.value) + 1
    }
    
}