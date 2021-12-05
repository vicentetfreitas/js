const alunos = ['Luiz', 'Maria', 'João'];

console.log(alunos); //Todos os alunos
console.log(alunos[0]); //Primeiro elemento Luiz
console.log(alunos[2]); // Terceiro elemento João
alunos[0] = 'Eduardo'; // Alterando elementos da lista
console.log(alunos);
alunos[3] = 'Luiza'; //Adicionando elemento
console.log(alunos);
console.log(alunos.length); //Tamanho do array
console.log(alunos[alunos.length] = 'Patricia');
console.log(alunos[alunos.length] = 'Pedro');
console.log(alunos[alunos.length] = 'Renata');
console.log(alunos);
console.log(alunos.length);
alunos.push('Vicente'); //Adicionando elemento no final do array
console.log(alunos);
alunos.unshift('Fabio'); //Adicionando elemento no começo do array
console.log(alunos);
alunos.pop(); //Remove elemento no final do array
console.log(alunos);
const removidoFinal = alunos.pop();
console.log('Aluno removido do final = ', removidoFinal);
console.log(alunos);
const removidoComeco = alunos.shift(); // Remove elemento no começo do array
console.log('Aluno removido do começo = ', removidoComeco);
console.log(alunos)
delete alunos[2]; //Remove o valor do elemento/indice
console.log(alunos);
// console.log(alunos.slice(0, 3));

console.log(typeof alunos);
console.log(alunos instanceof Array); //É array