var distancia = prompt('Ingrese la distancia a recorrer: ');
comprobarDistancia(distancia);


function comprobarDistancia(distancia){
    if(distancia < 1000){
        document.write('Se recomienda realizar la distancia ingresada a Pie');
    }
    if(distancia > 1000 && distancia < 10000){
        document.write('Se recomienda realizar la distancia ingresada en Bicicleta');
    }
    if(distancia > 10000 && distancia < 30000){
        document.write('Se recomienda realizar la distancia ingresada en Colectivo');
    }
    if(distancia > 30000 && distancia < 100000){
        document.write('Se recomienda realizar la distancia ingresada en Automovil');
    }
    if(distancia > 100000){
        document.write('Se recomienda realizar la distancia ingresada en Avion');
    }
}
