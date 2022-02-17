var alumnos = [
    {
      nombre: 'Juan Gomez',
      nota: 7
    }, {
      nombre: 'Pedro Rodriguez',
      nota: 4
    }, {
      nombre: 'Roxana García',
      nota: 8
    }, {
      nombre: 'Luciano Lopez',
      nota: 5
    }, {
      nombre: 'Fernanda Gimenez',
      nota: 6
    }, {
      nombre: 'Florencia Martinez',
      nota: 10
    }, {
      nombre: 'Raul Sanchez',
      nota: 7
    }, {
      nombre: 'Sandra Figueroa',
      nota: 8
    }
];

var aprobados = alumnos.filter(a => a.nota >= 7);

for(let alu of aprobados){
    let elemento = document.createElement("li");
    elemento.appendChild(document.createTextNode("Alumno aprobado: " + alu.nombre + " nota: " + alu.nota));
    document.getElementById("lista").appendChild(elemento);
}

