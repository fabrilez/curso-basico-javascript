var miNombre = 'Fabrizio';
//Esta variable es de scope glbal, por lo que puedo llamar esra variable adentro y afuera de funciones

function saludar(){
    var miApellido = 'Lezcano';
    //esta variable es de scope local, por lo que solo la puedo llamar dentro de la propia funcion, no en otra funcion ni fuera de funciones
    return miNombre + " " + miApellido
}

saludar();

console.log(miApellido);
//esto nos da un resultao undefined ya que miApellido no esta declarado en el scope global