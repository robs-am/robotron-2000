/* const calcular =  document.querySelector("#calcular")

calcular.addEventListener("click", () => {
    console.log("Fui clicado")
}) */

const elemento = document.querySelector("#calcular");
const resultado = document.querySelector(".resultado");

elemento.addEventListener("click", (evento) => {
  resultado.innerHTML = "Fui clicado"
})


/* const element = (document.getElementsByClassName('one'))
console.log(element) */



