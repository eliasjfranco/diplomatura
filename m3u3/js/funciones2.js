var cantidad_numero = 5;
var numero = [5];
for(var x=0; x<cantidad_numero; x++){
    numero[x] = prompt('Debe ingresar un numero, cantidad de numeros restantes: ' + (cantidad_numero - x));
}

var mayor = Math.max.apply(null,numero);

alert('El número mayor ingresado es: ' + mayor);