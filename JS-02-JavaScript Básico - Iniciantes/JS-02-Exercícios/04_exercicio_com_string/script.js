const nome = prompt('Digite seu nome comepleto:');

document.body.innerHTML += `O seu nome é: <strong> ${nome} </strong> <br />`;
document.body.innerHTML += `Seu nome tem: <strong> ${nome.length} </strong> letras COM espaços <br />`;
document.body.innerHTML += `A segunda letra no seu nome é:  <strong> ${nome.charAt(1)}</strong> <br />`;
// document.body.innerHTML += `A segunda letra no seu nome é: <strong>${nome[1]}</strong> <br />`;
document.body.innerHTML += `Qual o primeiro índice da letra i no seu nome? <strong> ${nome.indexOf('i')}<strong> <br />`;
document.body.innerHTML += `Qual o último índice da letra i no seu nome? <strong> ${nome.lastIndexOf('i')}<strong> <br />`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: <strong> ${nome.slice(-3)} </strong> <br />`;
document.body.innerHTML += `As palavras do seu noem são: <strong>${nome.split(' ')}</strong> <br />`;
document.body.innerHTML += `Seu nome com letras maiúsculas: <strong>${nome.toUpperCase()}</strong><br />`;
document.body.innerHTML += `Seu nome com letra minúscula: <strong>${nome.toLocaleLowerCase()}</strong> <br />`;