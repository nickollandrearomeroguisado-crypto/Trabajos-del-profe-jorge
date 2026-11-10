//=== Ejemplo de colocar los numero primos pero que solo pueda inscribir numeros ===
// const number1 = prompt("Ingrese un numero");
// console.log(number);

// const number = 5;

// if (isNaN(number)) console.log("No es numero"); //para que pueda solo ingresar numeros
//     else if(number % 2 == 0) console.log("Es par");
// else console.log("es impar");

// replace(/\D/g, ""); //para que pueda solo ingresar numeros

//=== Ejercicio ===
// const number = prompt("Ingrese un numero");
// const number1 = 1;
// const resultado = number1 % 2; 

// console.log(`El número ${number1} es ${resultado == 1 ? "impar" : "par"}`);

// if (!isNaN(number1)) {
//     console.log("Es un número válido");
// } else {
//     console.log("Contiene caracteres no válidos");
// }

//=== Bucle While ===

// while(number < 8){
//     console.log
//     number++
// }

// const number = 7;
// let total = 0;

// for(let i=1; i<=20; i++){
//     const resultado = number * i;
//     console.log(`${number} x ${i} = ${resultado}`);
    
//     console.log(resultado + resultado);
    
//     total+= resultado
// } 

// console.log(`La suma total es:${total}`);

//=== While ===
// const i = 1;
// while(i <= 20) {
//     const resultado = number * i;
//     console.log();
// }

//=== Ejemplo ===
const number = 7;

// let suma = 0;

// for(let i = 1; i < 21; i++) {
    
//     console.log(`El resultado de ${number} * ${i} es ${number * i}`);
//     suma += number * i;
// }

// console.log("el total es " + suma);

//=== Funciones ===
// function suma(a,b,c){
//     const number2 = 8;
//     const sumar = a + b + c + number + number2;
//     return sumar;
// }

// console.log(suma(1, 2, 5));

//=== Metodo ===
// const sumarNumbers = (a, b, c) => a + b + c + number + 8;

//=== Ejercicio de calculadora ===
console.log(`=== Suma ===`);
function suma(a, b){
    // const number2 = 8;
    const sumar= a + b;
    return sumar;
}

console.log(suma(1, 2));

console.log(`=== Resta ===`);
function resta(a, b){
    // const number3 = 8;
    const restar = a - b;
    return restar;
}

console.log(resta(5, 1));

console.log(`=== Multiplicacion ===`);
function multiplicar(a, b){
    // const number4 = 8;
    const multiplicar = a * b;
    return multiplicar;
}

console.log(multiplicar(5, 3));

console.log(`=== División ===`);
function division(a, b){
    // const number5 = 8;
    const dividir = a / b; 
    return dividir;
}

console.log(division(9, 3));
