/**
 * Operadores Aritméticos:
 * 
 * + Adição / Concatenação
 * - / * 
 * ** Potenciação
 * % Resto da divisão
 * 
 * Precedência:
 * () **  * / % + - 
 * 
 * Incremento = ++
 * Decremento = --
 * 
 * OSERVAÇÃO:
 * NaN - Not a Number
 */
const num1 = 5;
const num2 = 2;
const num3 = 10;
console.log();

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 ** num2);
console.log(num1 % num2);
console.log(num1 * num2 / num3);
console.log();

let contador = 1;
contador++; // 1 + 1 = 2
++contador; // 2 + 1 = 3 
contador++; // 3 + 1 = 4 
contador++; // 4 + 1 = 5 
console.log(contador);
console.log();

let contador2 = 1;
console.log(contador2++);
console.log(contador2);
console.log(++contador2);

console.log();
let contador3 = 10;
console.log(--contador3);
console.log(contador3);
console.log(contador3--);
console.log(contador3);
console.log();

console.log('Contador + passo');
const passo = 2;
let contador4 = 1;
contador4 = contador4 + passo;
console.log(contador4);
contador4 = contador4 + passo;
console.log(contador4);
contador4 = contador4 + passo;
console.log(contador4);

contador += passo; // contador = contador + 50
console.log(contador4);

// Exemplo de NaN
const num4 = 40;
const num5 = 'Vicente';
console.log(num4 * num5);

// Conversão de string para números
console.log('Conversão de strings paga números');
const num6 = 60;
const num7 = parseInt(`70`); // Converte para inteiro
const num8 = parseFloat(`5.2`); // Converte para float
console.log(num6 + num7);
const num9 = Number(`9.2`); // Converte para number
const num10 = Number(`10`); // Converte para number ;
console.log(num6 + num7);
console.log(typeof num7);
console.log(typeof num8);
console.log(typeof num9);
console.log(typeof num10);