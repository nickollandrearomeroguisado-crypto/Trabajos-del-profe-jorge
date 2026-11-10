// const numero = 2;
// const resultado = numero % 2;

// if(numero == 2){
//     console.log("Es par");
// } else{
//     console.log("Es impar");
// } 

// if(numero == 0){
//     console.log("Es cero");
// } else if (numero < 0){
//     console.log("Es negativo");
// }

const number = -1;

if(number === 0 || number === "0") {
    console.log("Es cero, ni par ni impar");
} else if(number < 0) {
    console.log("Es negativo");
} else if(number & 2 === 0) {
    console.log("Es par");
} else {
    console.log("Es impar");
}

//SWITCH
const number2 = 2;

//=== Ejercicio "se puedo de esta forma o de ejemplo" ===
console.log(`=== Ejercicio ===`);
switch(number2){
    case 0:
        console.log("Es cero, ni par ni impar");
        break;
    case -1:
        console.log("Es negativo");
        break;    
    case 3:
        console.log("Es impar");
        break;
    case 2:
        console.log("Es par");
        break;
    default:
        console.log("Número no contemplado");
}

//=== Ejemplo ===
console.log(`=== Ejemplo ===`);
switch(true){
    case (number === 0):
        console.log("El número es cero");
        break;
    case (number < 0):
        console.log("El número es negativo");
        break;
    case (number % 2 === 0):
        console.log("El número es par");
        break;
    case (number % 2 !== 0):
        console.log("El número es impar");
        break;
    default:
        console.log("No se pudo determinar el tipo de número");
        break;
}

//=== Bucles for y Bucles while ===

// for(let i= 1; i < 5; i++) {
//     console.log(i);
// }

console.log(`=== Bucle del 1 al 20 de dos en dos ===`);
for(let i=1; i <= 20; i+=2) {
    console.log(i);
    if(i == 15) break;
}
