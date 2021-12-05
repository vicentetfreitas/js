function saudacao() {
    console.log('Bom dia!');
}
saudacao();

function saudacao_dois(nome) {
    console.log(`Bom dia ${nome}!`);
}
saudacao_dois('Vicente');

function saudacao_tres(nome) {
    return `Bom dia ${nome}!`;
}
const variavel = saudacao_tres('Freitas');
console.log(variavel);

function soma(num1, num2) {
    return console.log(num1 + num2);
}
soma(10, 10);

function soma2(x, y) {
    const resultado = x + y;
    return resultado;
}
console.log(soma2(1, 98));

const raiz = function(n) { return n ** 0.5; }
console.log(raiz(9));

//Arrow functions
const raizDois = n => n ** 0.5;
console.log(raizDois(25));