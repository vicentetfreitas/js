/**
 * Não se cria constantes com palavras reservadas
 * Constantes precisam ter nomes signiticativos
 * Não pode começar o número de uma constante com um número
 * Não podem conter espaços ou traços
 * Utilizamos camelCase
 * Case-sensitive
 * Não se modifica o valor de uma constante
 * Utilizar sempre let ou invés de var
 */

//Declarando constantes do tipo: inteiro, ponto flutuante, string e boleano
const firstNumber = 5;
console.log(firstNumber);

const lastNumber = 15.50;
console.log(lastNumber);

const myName = 'Vicente'
console.log(myName);

const happy = true;
console.log(happy);

const result = firstNumber * lastNumber;
console.log(result)

//Descobrindo o tipo da variavel
console.log(typeof firstNumber);
console.log(typeof myName);