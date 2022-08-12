//creamos un array que contenga varios objetos

var articulos = [
    {nombre: "Bici", costo: 3000},
    {nombre: "TV", costo: 2500},
    {nombre: "Libro", costo: 320},
    {nombre: "Celular", costo: 10000},
    {nombre: "Laptop", costo: 20000},
    {nombre: "Teclado", costo: 500},
    {nombre: "Audifonos", costo: 1700}
];

//creamos una variable para filtar los articulos, en este caso articulos con costo menor o igual a 500, filter crea un nuevo array con los elementos del array que se paso como parametro y que cumpla con la condicion definida

var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500;
});

articulosFiltrados;

//map hace un mapeado con el elemento que queremos del objeto en un nuevo array, crea un nuevo array con los resultados de la llamada a la funcion indicada aplicados a cada uno de sus elementos 

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
});

nombreArticulos;

//esto nos trae en un array un solo articulo, ya que hacemos una pequenha validacion de que solo queremos que encuentre un articulo con nombre Laptop, retorna el primer elemento de un array que cumple con una condicion definida en un nuevo array.

var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop"
});

encuentraArticulo;

//foreach regresa solo los nombres, no los mete dentro de un array nuevo, foreach ejecuta la funcion indicada una vez por cada elemento del array

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

//some hace una validacion, en este caso solo nos devuelve si tenemos un articulo que sea de menor costo que le decimos, en este caso le pedimos que vea si hay articulos de 700 pesos para abajo, y si hay, nos devuelve true pero si no, devuelve false, retorna true o false si hay elementos en un array que cumplan con la condicion indicada

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
})

articulosBaratos;
