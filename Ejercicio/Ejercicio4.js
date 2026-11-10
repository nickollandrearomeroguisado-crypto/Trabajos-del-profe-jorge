//=== Objetos ===
const objeto = {
    name: "Juan",
    age: 30,
    city: "Madrid",
    cumpleaños: function() {
        this.age += 1
    },
    telefono: {
        movil: 123456789,
        fijo: 987654321
    },
    changeName() {
        this.name = "Pedro";
    }
}

console.log(objeto.name);

console.log(objeto["age"]);

console.log(objeto.telefono.movil);

objeto.name = "Pedro";
console.log(objeto.name);

objeto.cumpleaños();
console.log(objeto.age);

console.log(Object.keys(objeto));

const newObject = {
    ...objeto, //crea una copia de la variable objeto
    senaEmail: "test@mise.educ.co"
};

console.log(newObject);

//Se define un array
const numbers = [2,3,4,5,6,7,8,9];

console.log(numbers[0]); //para acceder un numero del array empieza desde cero 
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);
console.log(numbers[4]);
console.log(numbers[5]);
console.log(numbers[6]);
console.log(numbers[7]);

console.log(numbers.length); //para medir la longitud
console.log(numbers[numbers.length - 1]);

numbers.push(20); //para agregar el numero o variable al final
console.log(numbers);

numbers.unshift(10); //para agregar el numero o variable al inicio
console.log(numbers);

numbers.pop(); //para eliminar el numero del final
console.log(numbers);

numbers.shift(); //para eliminar el numero del inicio
console.log(numbers);

for (let number of numbers){
    console.log(number);
}

let numberArray = null;
numbers.forEach((number) => {
    console.log(number);
    if(number === 5){
        numberArray = number;
    }
} );

console.log(numberArray);

const expose2 = numbers.map((number) => {
    return number * 2;
});

console.log(expose2);

const numbersFiltered = numbers.filter((number) => {
    return number > 5;
});

console.log(numbersFiltered);

console.log(numbers.reverse);

const numbers3 = [3,1,5,8,4];
numbers3.sort((a,b) => { //los organiza los numeros 
    return a - b;
});

console.log(numbers3);

const exponen2 = numbers3.sort((a,b) => { 
return b - a;
}).map((number) => {
    return number * 2;
});

console.log(exponen2);

console.log(exponen2.includes(16)); //si existe el valor
console.log(exponen2.find((number) => { //
    return number === 1;
}));

console.log(exponen2.join('-')); //le convierte en string (entre comillas)

const arrayObjects = [
    {
        name: 'Juan',
    },
    {
        name: 'Pedro'
    }
];

// console.log(arrayObjects);

