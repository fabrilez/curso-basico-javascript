//funciones declarativas

function saludo() {
    return "Hola Mundo";
}


//funciones expresivas


var miFuncion = function(a, b) {
    return a + b;
}

miFuncion(5, 5);

// function saludarEstudiante(estudiante) {
//     console.log('Hola ' + estudiante);
//      En este ejemplo hacemos un string y concatenando con el valor que nos da la varible
// }

function saludarEstudiante(estudiante) {
    console.log(`Hola ${estudiante}`);
    //poniendo `` estas comillas con un string y utilizando el signo de dolar abriendo las llaves y poniendo una variable te imprime el string concatenado al valor de la variable
}

saludarEstudiante("Fabrizio");

