function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;

}

var autoNuevo = new auto("Tesla", "Model 3", 2020);

console.log(autoNuevo);
//nos trae como resultado: auto {marca: 'Tesla', modelo: 'Model 3', annio: 2020}
var autoNuevo2 = new auto("Tesla", "Modelo X", "2018");
var autoNuevo3 = new auto("Toyota", "Corolla", "2020")


