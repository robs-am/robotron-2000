const button = document.querySelector("#calcular")

calcular.addEventListener("click", function() {
    console.log("Fui clicado.")
})

//ou//

const calculo = document.querySelector('#calcular');
const resultado = document.querySelector('.resultado');

calculo.addEventListener('click', () => {
    resultado.innerHTML = 'Notas Enviadas com Sucesso!'
})