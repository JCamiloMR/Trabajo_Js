// Archivo: example.js

// Definición de variables con 'let'
let a = 10;
let b = 20;
let c = 30;
let d = 40;
let e = 50;
let f = 60;
let g = 70;
let h = 80;
let i = 90;
let j = 100;

// Definición de variables con const
const pi = 3.14159;
const euler = 2.71828;
const gravedad = 9.81;
const velocidadLuz = 299792458; 
const Numero = 6.023; 

// Realizar operaciones con las variables
let sum = a + b;
let resta = c - d;
let producto = e * f;
let divi = g / h;

// Usar el operador ternario
let isEven = (i % 2 === 0) ? "es par" : "es impar";
let esMayorQue100 = (j > 100) ? "es mayor que 100" : "es 100 o menor";

// Mostrar resultados en la consola
console.log("Suma de a y b: ", sum);
console.log("Diferencia entre c y d: ", resta);
console.log("Producto de e y f: ", producto);
console.log("Cociente de g y h: ", divi);
console.log("i ", isEven);
console.log("j ", esMayorQue100);

// Operaciones con constantes
let AreaCirculo = pi * (f ** 2);
let eurlerExponente = euler ** 2;
let caida = Math.sqrt((2 * d) / gravedad);
let  multiPi = Numero * pi;

console.log("Área del círculo con radio f: ", AreaCirculo);
console.log("Valor de e^2: ", eurlerExponente);
console.log("Tiempo de caída desde altura d: ", caida, "segundos");
console.log("Numero por Pi: ", multiPi);
