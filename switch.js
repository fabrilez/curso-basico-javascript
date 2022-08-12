var numero = 1;


switch (numero) {
    case 1: 
        console.log("Soy uno");
        break;
    case 10:
        console.log("Soy un 10");
        break;
    case 100:
        console.log("soy un 100");
        break;
    default:
        console.log("No soy nada");

}

jugar("tijera", "papel");

function jugar(user, machine){
    switch(true){
        case (user === machine):
            console.log('es un empate');
            break;
        case (machine === 'piedra' && user === 'papel'):
            console.log('Ganaste')
            break;
        case (machine === 'papel'  && user === 'tijera'):
            console.log('Ganaste')
            break;
        case (machine === 'tijera' && user === 'piedra'):
            console.log('Ganaste')
            break;
        default:
        console.log('¡Perdiste!'); 
    }       
}