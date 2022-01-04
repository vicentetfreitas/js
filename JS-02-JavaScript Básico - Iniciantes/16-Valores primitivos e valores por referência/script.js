/**
 * Primitivos (imutáveis) - string, number, boolean, undefined, null, 
 * bifint, symbol - Valores copiados
 * 
 * Referência (mutável) - array, object, function - Passados por referência
 * 
 */
//Exemplo de tipos de dados primitivos string imutavél
let nome = 'Vicente';
nome[0] = 'R';
console.log(nome[0], nome);

let a = 'A';
let b = a; // Cópia
console.log(a, b);

a = 'Outra coisa';
console.log(a, b);
console.log();

// Exemplo de tipos de dados por referência
let c = ['1,2,3'];
let d = c;
console.log(c, d);

c.push(4);
console.log(c, d);

c.pop(); // Tirar um valor no final do array
console.log(c, d);

const e = {
    nome: 'Vicente',
    sobrenome: 'Freitas'
}
const f = e;
console.log(f)
e.nome = 'Teixeira';
console.log(e);
// Exemplo de Spreed 
const g = {...e }
console.log(g);
console.log(e);
console.log(f);