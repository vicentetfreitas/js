let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A
//Imprimir A B C

// varA = varB; // B
// varB = varC; // C
// varC = varA; // B
// //Error
// console.log(`${varA} ${varB} ${varC}`);
console.log();

const varAtTemp = varA;
varA = varB; // B
varB = varC; // C
varC = varAtTemp; // A
console.log(`${varA} ${varB} ${varC}`);

//[varA, varB, varC] = [varB, varC, varA]
// console.log(`${varA} ${varB} ${varC}`);