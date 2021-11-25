let umaString = "Um \"texto\" qualquer.";
console.log(umaString);

let umaString2 = 'Um texto';
console.log(umaString2[4]); //e
console.log(umaString2[8]); //undefined
console.log(umaString2[-8]); //undefined
console.log(umaString2.charAt(6)); //t
console.log(umaString2.concat(' ', 'em', ' ', 'um', ' ', 'lindo', ' ', 'dia.')); // texto em um lindo dia.
console.log(umaString2 + ' em um lindo dia.'); //t
console.log(`${umaString2} em um lindo dia.`); //t
console.log(umaString2.indexOf('texto')) // a palavra texto começa no indice 3 da frase.
console.log(umaString2.lastIndexOf('m', 3));
console.log(umaString2.replace('Um', 'OUTRA'));

let umaString3 = 'O rato roeu a roupa do rei de roma.'

//Exemplo de expressões regulares
console.log(umaString3.replace(/r/, '#'));
console.log(umaString3.replace(/r/g, '[R]')); // Usar flag g
console.log(umaString3.length); //Tamanho de uma string
console.log(umaString3.slice(2, 6));
console.log(umaString3.slice(-3, -1));
console.log(umaString3.split(' '));
console.log(umaString3.toLocaleLowerCase());
console.log(umaString3.toLocaleUpperCase());