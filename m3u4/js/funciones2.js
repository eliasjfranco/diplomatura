var texto = document.getElementById("texto");
var cantidad = document.getElementById("cantidad");
var btn = document.getElementById("btn");
var contador = 0;
texto.addEventListener("input", function(){
    contador++ ;
    cantidad.value = "La cantidad de caracteres ingresados es: " + contador;
})

btn.addEventListener("click", function(){
    contador = 0;
    cantidad.value = "";
    texto.value = "";
})