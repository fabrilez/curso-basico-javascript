let autos = [];
let cantidadAutos = 0;
let cantRegistrados = 0;

//Creo funcion constructora

function Auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

//Solicitamos al usuario la cantidad de autos a registrar

cantidadAutos = parseInt(prompt('Cuantos autos deseas registrar?'));

while(cantRegistrados < cantidadAutos) {
    //definimos variables con scope local
    let marca = prompt('Marca: ');
    let modelo = prompt('Modelo: ');
    let annio = prompt('Annio: ');
    //paso las variables de scope local a la funcion constructora
    var autoNuevo = new Auto(marca, modelo, annio);
    //agrego el auto al arreglo de autos
    autos.unshift(autoNuevo);
    //incrementamos en 1 la cantidad de registrados
    cantRegistrados++;
}



for(let i= 0; i < autos.length; i++) {
    console.log(autos[i]);
}