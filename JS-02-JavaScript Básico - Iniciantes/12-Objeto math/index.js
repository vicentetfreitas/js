let num1 = 9.54578;

let num2 = Math.floor(num1);
console.log(`Arredonda um número para baixo. Ex: ${num2}`);

num2 = Math.ceil(num1);
console.log(`Arredonda um número para cima. Ex: ${num2}`);

num2 = Math.round(num2);
console.log(`Arredonda um número automaticamente para baixo ou para cima. Ex: ${num2}`);

console.log(`Maior número de uma sequência de números. Ex: `, Math.max(1, 2, 3, 4, 5, -10, -50, 1500, 9, 8, 7, 6));
console.log(`Menor número de uma sequência de números. Ex: `, Math.min(1, 2, 3, 4, 5, -10, -50, 1500, 9, 8, 7, 6));

console.log(`Gerando número alteatório. Ex: ${Math.random()}`); //Padrão
const aleatorio = Math.round(Math.random() * (10 - 5) + 5);
console.log(`Número aleatório entre 5 e 10 sem casas decimais. Ex: ${aleatorio}`)

console.log(`Número PI = `, Math.PI);
console.log(`Potenciação. Ex: 2^10 = ${Math.pow(2, 10)}`);