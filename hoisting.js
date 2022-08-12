
//El concepto de hoisting hace referencia a cuando se declaran e inicializan las variables, en ECMASCRIP 5 hacia atras tenemos este concepto de que si la mandamos a llamar por ejemplo, en un console.log antes de declararla e inicializarla nos devuelve un undefined.  
console.log(miNombre)
var miNombre = 'Fabrizio';
//esta declaracion nos trae un undefined
var miApellido = "Lezcano";
console.log(miApellido)
//esta declaracion nos trae el valor de MiApellido
saludar();
function  saludar(){
    console.log('Hola ' + segundoApellido)
}
//las funciones si pueden ser llamadas antes de declararlas y nos devuelve el resultado que queremos, en este caso nos devuelve hola undefined debido a que en la funcion mandamos a llamar la variable segundoApellido que recien abajo la declaramos
var segundoApellido = "Ramirez"

console.log(segundoApellido);