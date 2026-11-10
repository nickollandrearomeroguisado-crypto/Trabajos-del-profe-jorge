//=== Parte 1 ===
const nombre = prompt("Ingrese un nombre");
const email = prompt("Ingrese un correo electrónico");

// eliminacion des espaciados innecesarios
const resultado = nombre.trim();

if(!resultado || resultado.length > 3){
    console.log("Nombre no válido");
} else {
    console.log("Nombre agregado con éxito");

    console.log("Nombre agregado con éxito");

    // Validación del email
    if (!email.includes("@") || (!email.endsWith(".com") && !email.endsWith(".co"))) { //endswith sirve para comprobar si una cadena de texto termina con uns caracteres.
        console.log("Ingrese el email (debe contener @ y .com o .co)");
    } else {
        // Guardar el nombre en mayúsculas
        const resultado1 = resultado.toUpperCase();
        console.log(`Nombre: ${resultado1}, Email: ${email}`);
    }
}

//=== Parte 2 ===
const tipoCliente = prompt("Ingrese el tipo de cliente (normal, estudiante o premium):").toLowerCase().trim();
const compra = Number(prompt("Ingrese el valor de la compra:"));

let descuento = 0;

switch(tipoCliente){
    case "premium":
        descuento = 20;
        console.log("Tienes un 20% de descuento");
        break;
    case "estudiante":
        descuento = 10;
        console.log("Tienes un 10% de descuento");
        break;
    case "normal":
        descuento = 0;
        console.log("Tienes un 20% de descuento");
        break;
    default:
        console.log("Tipo de cliente no válido");
        descuento = 0;
}

if (tipoCliente === "premium") {
    if (compra > 500000) {
        descuento = 25;
        console.log("Tienes un descuento de 25%");
    }
}

if (tipoCliente === "estudiante") {
    console.log("Tu envío es gratis");
} else {
    if (compra > 100000) {
        console.log("Tu envío es gratis");
    } else {
        console.log("Tu costo de envío es de $15.000");
    }
}

console.log(`Descuento final: ${descuento}%`);

// === Parte 3 ===
const catalogo = [
    {nombre: "Teclado", precio: 120000},
    {nombre: "Mouse", precio: 80000},
    {nombre: "Monitor", precio: 450000},
    {nombre: "USB 32GB", precio: 35000},
    {nombre: "Portátil", precio: 2500000},
]

//Arrow Function
const precioConIva = (precio) => precio * 1.19;

//Cantidad de productos
const cantidad = Number(prompt("¿Cuántos productos desea comprar?").replace(/\D/g, ""));

//Para armar el carrito
const carrito = [];

for (let i = 0; i < cantidad; i++) {
    let nombreProducto = prompt(`Ingrese el nombre del producto #${i + 1}:`);
    let productoEncontrado = catalogo.find(p => p.nombre.toLowerCase() === nombreProducto.toLowerCase());

    while (!productoEncontrado) {
        nombreProducto = prompt("Producto no encontrado. Vuelve a ingresar un producto válido:");
        productoEncontrado = catalago.find(p => p.nombre.toLowerCase() === nombreProducto.toLowerCase());
    }

    carrito.push(productoEncontrado); //puesh se utiliza para añadir elementos al final del array.
}

//Productos con precio final > $100.000
const productosCaros = carrito.filter(p => precioConIva(p.precioConIva) > 100000); //filter sirve para crear un  nuevo arreglo con todos los elementos que cumplan una condicion.
console.log("Productos > $100.000:", productosCaros);

//lineas formateadas del detalle
const detalle = carrito.map(p => `${precioConIva(p.precio).toLocalString("es-CO")}`);// map sirve para transformar listas
console.log("Detalle de compra:", detalle);

//subtotal acumulado
const subtotal = carrito.reduce((acumulado, p) => acumulado + precioConIva(p.precio), 0); //reduce procesa todos sus elementos para combinarlos y devolvar un unico valor
console.log(`Subtotal: $${subtotal.toLocalString("es-CO")}`); //toLocalString sirve para transformar un número en un texto con el formatode una region o pais.

//=== Parte 4 ===
const venta = [
    cliente = "Sara Arguello",
    email1 = "sara@gmail.com",
    tipoCliente1 = premium,
    descuentoAplicado = descuento,
    costoEnvio = "",
    productos = carrito,
    totalFinal = total
];

function calcularTotal(subtotal, Iva, descuento, envio) {
    let iva = subtotal * (Iva / 100);
    let total = subtotal + iva - descuento + envio;
    return total;
}

let resultado1 = calcularTotal();
console.log(resultado1);

console.log(`========= BYTESTORE =========`);
console.log(`Cliente: ${venta.cliente}`);
console.log(`Email: ${venta.email1}`);
console.log(`Tipo: ${venta.tipoCliente1}(${venta.descuentoAplicado})`);

console.log(`---------------`);

console.log(`${detalle}`);

console.log(`---------------`);

console.log(`Subtotal(IVA incluido): ${subtotal}`);
console.log(`Descuento: ${descuento}`);
console.log(`Envío: Gratis`);
console.log(`TOTAL A PAGAR: ${resultado}`);

console.log(`=============================`);

console.log(`¡Gracias por su compra!`);