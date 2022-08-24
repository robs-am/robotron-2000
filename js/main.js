/* const robotron = document.querySelector("#robotron") // usamos uma const para guardar um elemento. a const é uma variavel que nao pode ser alterada

robotron.addEventListener("click", dizOi) // usamos a variável dentro do escutador de eventos

robotron.addEventListener("click", function() { //função anonima só sera executada nesse momento, só podera ser chamada nesse momento, nesse evento.
    console.log("Cliquei no Robô.")
})

function dizOi(nome) {     
    console.log(nome)
    console.log("Bem vindo ao Robotron 2000")
}
dizOi("Roberta") */

const subtrair = document.querySelector('#subtrair')
const somar = document.querySelector('#somar')
const braco = document.querySelector('#braco')

somar.addEventListener("click", () => {manipulaDados("somar")})
    


subtrair.addEventListener("click", () => {manipulaDados("subtrair")})
   


function manipulaDados(operacao) {          //terceiriza a validação em uma outra função para evitar repeti-la. Trazendo assim toda a logica de manipulação de dados para um único lugar. Como consequencia, agora a  unica responsabilidade do Eventlistener será a função click//
    
        if(operacao === "subtrair") {
            braco.value = parseInt(braco.value) -1
        } else {
            braco.value = parseInt(braco.value) +1
        }    
    
    }