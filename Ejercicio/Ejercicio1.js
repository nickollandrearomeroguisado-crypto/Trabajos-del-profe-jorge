const Nombre = 'Ana';
let Edad = 18;
const Ciudad = 'Colombia';
const Comida_favorita = 'Bandeja Paisa';
const Futbol = true;
// $Edad = 18;

// console.log(Nombre);
// console.log(Edad);
// console.log(Ciudad);
// console.log(Comida_favorita);

console.log(`==== FICHA ====`);
console.log("Nombre = " + Nombre);
console.log("Edad = " + Edad);
console.log("Ciudad = " + Ciudad);
console.log("Comida Favorita = " + Comida_favorita);
console.log(`¿Le gusta el fútbol? ${Futbol ? "Sí" : "No"}`);

Edad++;
console.log(`El año que viene tendrá ${Edad} años`);

//2.

const numero = 11;
const resultado = numero % 2;

console.log(`==== Numeros Primos ====`);
console.log(`El número ${numero} es ${resultado == 1 ? "impar" : "par"}`);

//3.
//=== Condicionales ===
if(numero == "9"){
    console.log("true");
} else if(numero == 10){
    console.log("false");
} else {
    console.log(numero);
}

//4.
//Condicional de una sola linea el ? el if y el : es else
console.log(resultado == 1 ? "impar" : "par");

