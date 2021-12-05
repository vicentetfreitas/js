let numero = Number(prompt('Digite um número: '));

const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
// texto.innerHTML = `<p>Seu número + 2 é ${numero + 2}. </p>`;
texto.innerHTML = '';

texto.innerHTML += `<h2>Raiz quadrada de <span style="color: red; font-weight: 300;"> ${numero} </span > = <strong style="color: red; font-weight: 300;">${Math.sqrt(numero)}</strong></h2> `;
texto.innerHTML += `<h2> <span style="color: red; font-weight: 300;"> ${numero} </span> é inteiro: <span style="color: red; font-weight: 300;">${Number.isInteger(numero)}</span> </h2> `;
texto.innerHTML += `<h2> É NaN: <span style="color: red; font-weight: 300;"> ${Number.isNaN(numero)} </span></h2 > `;
texto.innerHTML += `<h2> Arredondado para cima: <span style="color: red; font-weight: 300;"> ${Math.ceil(numero)} </span> </h2> `;
texto.innerHTML += `<h2> Arredondado para baixo: <span style="color: red; font-weight: 300;"> ${Math.floor(numero)} </span> </h2> `;
texto.innerHTML += `<h2> Com duas casas decimais: <span style="color: red; font-weight: 300;"> ${numero.toFixed(2)}</span></h2>`;