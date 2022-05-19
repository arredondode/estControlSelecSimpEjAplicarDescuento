/*Estructura de Control – Selección Simple

Ejercicio – Aplicar Descuento

•Desarrolle un algoritmo que diga el precio de
una compra
• La compra se compone del precio del producto
y la cantidad
•Si el cliente gasta más de $1000 debemos
aplicarle un descuento del 10%
*/

let precioDelProducto: number = Number(
  prompt("Ingrese el precio del producto:")
);
let cantidad: number = Number(prompt("Ingrese la cantidad:"));
let precioFinal: number = precioDelProducto * cantidad;
let descuento: number = precioFinal * 0.1;

if (precioFinal >= 1000) {
  console.log("El precio final es de: " + (precioFinal - descuento));
} else {
  console.log("El precio final es: " + precioFinal);
}
