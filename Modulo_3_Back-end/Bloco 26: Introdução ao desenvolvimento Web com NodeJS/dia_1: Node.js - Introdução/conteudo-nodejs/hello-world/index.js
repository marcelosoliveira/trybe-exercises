console.log('Hello, world!');

const readline = require('readline-sync');

const name = readline.question("Qual o seu nome: ");
const idade = readline.questionInt("Qual a sua idade: ");

console.log(`Seu nome é ${name} e você tem ${idade} anos`); 

