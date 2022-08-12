var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);
}

for(i = 0; i < estudiantes.length; i++) {
    saludarEstudiantes(estudiantes[i]);
}

for (var estudiante of estudiantes) {
    saludarEstudiantes(estudiante);
}