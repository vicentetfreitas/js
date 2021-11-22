/**
 * Vicente T Freitas tem 29 anos, pesa 105 Kg
 * ten 1.80 de altura e seu IMC é de 25.925925925925954
 * Vicente Freitas nasceu em 1992
 */

const firstName = 'Vicente T';
const lastName = 'Freitas';
const age = 29;
const weight = 105;
const heightInMeter = 1.80;

let imc;
imc = weight / (heightInMeter * heightInMeter);

let yearOfBirth;
yearOfBirth = 2021 - age;

console.log(`${firstName} ${lastName} tem ${age} anos, pesa ${weight} kg, `);
console.log(`tem ${heightInMeter} de altura e seu IMC é de ${imc} `);
console.log(`${firstName} nasceu em ${yearOfBirth} `);