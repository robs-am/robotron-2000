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


//FORÇA ROBOTRON//





const subtrair = document.querySelector('#subtrair')
const somar = document.querySelector('#somar')
const braco = document.querySelector('#braco')
const controle = document.querySelectorAll('[data-controle]') // variável que buscará o nó para manipular todos os controles. Nós são arrays e o melhor método de função para arrays é a foreach:
const estatisticas = document.querySelectorAll('[data-estatisticas]')
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        
    })         
})

// foreach: esse método retornará os e confirmará os 10 elementos que precisaremos no browswer
//depois adicionamos o addEventListener
//por último adicionamos o evento na funçao anonima para que o console nos informe o que esta acontecendo quando é clicado e posteriormente target
//adicionamos textContext para o console entender o somar e subtrair
// troca-se a classe .controle-ajuste pelo atributo data-controle


   


function manipulaDados(operacao, controle) {          
    //terceiriza a validação em uma outra função para evitar repeti-la. Trazendo assim toda a logica de manipulação de dados para um único lugar. Como consequencia, agora a  unica responsabilidade do Eventlistener será a função click//
        const peca = controle.querySelector('[data-contador]')
        if(operacao === "-") {
            peca.value = parseInt(peca.value) -1
        } else {
            peca.value = parseInt(peca.value) +1
        }    
    
    }

    //trocamos o id braco pela classe controle-contador para  conseguirmos controlar todo o robo.
    //No metodo forEach nao queremos buscar o controle-contador do documento inteiro e sim apenas do controle, então precisamos passar isso para o método atraves do parametro evento.target.parentNode na funcao manipulaDados