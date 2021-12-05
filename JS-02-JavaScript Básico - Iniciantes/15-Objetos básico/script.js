const pessoa_01 = {
    nome: 'Vicente',
    sobrenome: 'Freitas',
    idade: 29
};
console.log(pessoa_01);
console.log(pessoa_01.nome);

const pessoa_02 = {
    nome: 'Maria',
    sobrenome: 'Oliveira',
    idade: 25
};
console.log(pessoa_02);

//Factory(Fábrica de objetos): Função que cria objetos
function criaPessoa(nome, sobrenome, idade) {
    return { nome: nome, sobrenome: sobrenome, idade: idade };
}
const pessoa_03 = criaPessoa('Renato', 'Gaucho', 57); //Argumento é o valor passado para o parâmetro
console.log(pessoa_03);
console.log(pessoa_03.nome, pessoa_03.sobrenome, pessoa_03.idade);

function criaPessoa_02(nome, sobrenome, idade) {
    return { nome, sobrenome, idade };
};
const pessoa_04 = criaPessoa_02('Amanda', 'Ribeiro', 35);
console.log(pessoa_04);

//Método é a função dentro de um objeto

const pessoa_05 = {
    nome: 'Vicente',
    sobrenome: 'Freitas',
    idade: 29,
    fala() {
        console.log('Olá eu sou uma função!');
    },
    fala_02() {
        console.log(`${this.nome} ${this.sobrenome} ${this.idade} está falando oi`);

    },
    mostraIdade() {
        console.log(`A minha idade atual é: ${this.idade}`);
    },
    incrementaIdade() {
        this.idade++;
    }
}
pessoa_05.fala();
pessoa_05.fala_02();
pessoa_05.mostraIdade();
pessoa_05.incrementaIdade();
pessoa_05.mostraIdade();