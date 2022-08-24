/* const robotron = document.querySelector("#robotron") // usamos uma const para guardar um elemento. a const é uma variavel que nao pode ser alterada

robotron.addEventListener("click", dizOi) // usamos a variável dentro do escutador de eventos

robotron.addEventListener("click", function() { //função anonima só sera executada nesse momento, nao podera ser chamada nesse momento, nesse evento.
    console.log("Cliquei no Robô.")
})

function dizOi(nome) {     
    console.log(nome)
    console.log("Bem vindo ao Robotron 2000")
}
dizOi("Roberta") */

const bracoMais = document.querySelector('#somar')
const bracoMenos = document.querySelector('#subtrair')
const bracoValor = document.querySelector('#braco')

bracoMais.addEventListener('click', () => {
    braco.value++;
})

bracoMenos.addEventListener('click', () => {
    if(braco.value > 0) {
        braco.value--; } 
    else {
        alert("Não é possivel ter um valor negativo de peças.")
    }
})

/* controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.text)
    })
})

const controle = document.querySelectorAll(".controle-ajuste")

somar.addEventListener("click", (evento) => {manipulaDados("somar")}) //toda vez que clicar no somar +1

subtrair.addEventListener("click", (evento) => {manipulaDados("subtrair")}) //toda vez que clicar no subtrair -1

function manipulaDados(operacao) {
    if(operacao === "-") {
        braco.value = parseInt(braco.value) - 1
    } else {
        braco.value = parseInt(braco.value) + 1
    }
    
}  */