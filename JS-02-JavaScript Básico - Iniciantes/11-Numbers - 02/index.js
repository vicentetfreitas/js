let num1 = 1500;
let num2 = 2.5;
let num3 = 10.5789551255547;
let temp = num1 * 'ola'; //NaN
let num4 = 0.7;
let num5 = 0.1;

console.log(num1.toString() + num2);
console.log(num1.toString(2));
console.log(num3.toFixed(2));
console.log(Number.isInteger(num1)); // verifica se um número é do tipo inteiro
console.log(Number.isNaN()); // verifia se existe erro
console.log(num4 + num5);
console.log(num4 += num5); // num1 = num1 + num2

//Correção de imprecisão de casas décimais
num4 = parseFloat(num4.toFixed(2));
console.log(num4);
num4 = Number(num4.toFixed(2));
console.log(num4);