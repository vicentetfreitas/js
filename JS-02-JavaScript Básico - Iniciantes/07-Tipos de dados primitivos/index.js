//Tipos de dados primitivos: string, number, undefined, null, boolean

//string
const firstName1 = 'Vicente';
const firstName2 = "Vicente";
const firstName3 = `Vicente`;

//number
const number1 = 10;
const number2 = 10.50;

// undefined = não aponta para local nenhum da memória
let firstNameStudent;
let lastNameStudent = null; // nulo não aponta para local nenhum da memória

//boolean = true ou false
const approved = true;
// const approved = false;

//Descobrir o tipo da variável
console.log(typeof firstName1);
//Descobrir o tipo e nome da variável
console.log(typeof firstName1, firstName1)
console.log(typeof firstNameStudent, firstNameStudent);
console.log(typeof lastNameStudent, lastNameStudent); // bug da linguagem js pois null não é do tipo object

//OBS: em tipos primitivos os valores são copiados
let a = 2;
const b = a;
console.log(b);