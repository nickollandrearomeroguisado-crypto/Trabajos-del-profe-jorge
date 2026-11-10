//=== Ejercicio ===
const nombre = prompt("Ingrese el nombre");
const edad = prompt("Ingrese la edad");

const Lista = {
    Persona1: {
        name: 'Carlos',
        age: 20
    },
    Persona2: {
        name: 'Ana',
        age: 25
    },
    Persona3: {
        name: 'Sara',
        age: 30
    },
    Persona4: {
        name: 'Manuel',
        age: 35
    },
    Persona5:{
        name: 'Karol',
        age: 23
    },
    Persona6: {
        name: nombre,
        age: edad
    }
};

console.log(Lista.Persona1, Lista.Persona2, Lista.Persona3, Lista.Persona4, Lista.Persona5, Lista.Persona6);

console.log(`${Lista.Persona1.name}, ${Lista.Persona1.age}`);
console.log(`${Lista.Persona2.name}, ${Lista.Persona2.age}`);
console.log(`${Lista.Persona3.name}, ${Lista.Persona3.age}`);
console.log(`${Lista.Persona4.name}, ${Lista.Persona4.age}`);
console.log(`${Lista.Persona5.name}, ${Lista.Persona5.age}`);
console.log(`${Lista.Persona6.name}, ${Lista.Persona6.age}`);

// console.log(`=== Resultado ===`);
// console.log(`Persona más joven: ${Lista.Persona1.name}, ${Lista.Persona1.age}`);
// console.log(`Persona más vieja: ${Lista.Persona4.name}, ${Lista.Persona4.age}`);

// console.log(`--- Persona1 ---`);
// console.log(`Nombre: ${Lista.Persona1.name}`);
// console.log(`Edad: ${Lista.Persona1.age}`);

// console.log(`--- Persona2 ---`);
// console.log(`Nombre: ${Lista.Persona2.name}`);
// console.log(`Edad: ${Lista.Persona2.age}`);

// console.log(`--- Persona3 ---`);
// console.log(`Nombre: ${Lista.Persona3.name}`);
// console.log(`Edad: ${Lista.Persona3.age}`);

// console.log(`--- Persona4 ---`);
// console.log(`Nombre: ${Lista.Persona4.name}`);
// console.log(`Edad: ${Lista.Persona4.age}`);

// console.log(`--- Persona5 ---`);
// console.log(`Nombre: ${Lista.Persona5.name}`);
// console.log(`Edad: ${Lista.Persona5.age}`);