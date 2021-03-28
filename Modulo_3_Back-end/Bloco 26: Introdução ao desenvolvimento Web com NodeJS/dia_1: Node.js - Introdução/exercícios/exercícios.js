//Exercício 1

// npm init

const PESO_80KG = 80; // Você pode utilizar o valor que desejar aqui
const ALTURA_1M_78CM = 178; // Você pode utilizar o valor que desejar aqui

function calculaImc () {
  const peso = PESO_80KG;
  const altura = ALTURA_1M_78CM;

  console.log('Peso: %s, altura: %s', peso, altura);

  const imc = (peso / Math.pow(altura, 2)).toFixed(2);

  console.log('IMC: %s', imc);
}

calculaImc();


//Exercício 2

{
  // ...
  "scripts": {
    // ...
    "imc": "node imc.js"
  }
  // ...
}


//Exercicio 3

// npm i readline-sync
// Importar o readline-sync no arquivo imc.js :

const readline = require('readline-sync');

// const PESO_80KG = 80; // Você pode utilizar o valor que desejar aqui
// const ALTURA_1M_78CM = 178; // Você pode utilizar o valor que desejar aqui

// function calculaImc () {
//   const peso = PESO_80KG;
//   const altura = ALTURA_1M_78CM;

//   console.log('Peso: %s, altura: %s', peso, altura);

//   const imc = (peso / Math.pow(altura, 2)).toFixed(2);

//   console.log('IMC: %s', imc);
// }

// calculaImc();

// Substituir os valores de peso e altura por perguntas à pessoa que executou o script utilizando o método questionInt :

// const readline = require('readline-sync');

// function calculaImc () {
  const peso = readline.questionInt('Qual o seu peso? (em kg)');
  const altura = readline.questionInt('Qual a sua altura? (em cm)');

//   console.log('Peso: %s, altura: %s', peso, altura);

//   const imc = (peso / Math.pow(altura, 2)).toFixed(2);

//   console.log('IMC: %s', imc);
// }

// calculaImc();


// Exercício 4

// const readline = require('readline-sync');

// function calculaImc () {
  const peso = readline.questionFloat('Qual o seu peso? (em kg)');
  //   const altura = readline.questionInt('Qual a sua altura? (em cm)');
  
  //   console.log('Peso: %s, altura: %s', peso, altura);
  
  //   const imc = (peso / Math.pow(altura, 2)).toFixed(2);
  
  //   console.log('IMC: %s', imc);
  // }
  
  // calculaImc();


  // Exercicio 5

/*   Considere a seguinte tabela para classificar a situação do IMC:
IMC	Situação
Abaixo de 18,5	Abaixo do peso (magreza)
Entre 18,5 e 24,9    	Peso normal
Entre 25,0 e 29,9	Acima do peso (sobrepeso)
Entre 30,0 e 34,9	Obesidade grau I
Entre 35,0 e 39,9	Obesidade grau II
40,0 e acima	Obesidade graus III e IV */

// const readline = require('readline-sync');

// function calculaImc () {
// ...

//   console.log('IMC: %s', imc);

if (imc < 18.5) {
  console.log('Situação: Abaixo do peso (magreza)');
  return;
}

if (imc >= 18.5 && imc < 25) {
  console.log('Situação: Peso normal');
  return;
}

if (imc >= 25 && imc < 30) {
  console.log('Situação: Acima do peso (sobrepeso)');
  return;
}

if (imc >= 30 && imc < 35) {
  console.log('Situação: Obesidade grau I');
  return;
}

if (imc >= 35 && imc < 40) {
  console.log('Situação: Obesidade grau II');
  return;
}

console.log('Situação: Obesidade graus III e IV');
// }

// calculaImc();


// Exercicio 6

//Criar o arquivo velocidade.js com um conteúdo parecido com o seguinte:

const readline = require('readline-sync');

const distancia = readline.questionInt('Distância percorrida (m)');
const tempo = readline.questionInt('Tempo gasto (s)');

const velocidadeMedia = (distancia / tempo).toFixed(2);

console.log(`Velocidade média: ${velocidadeMedia} m/s`);

//Crie o script velocidade com o conteúdo node velocidade.js no package.json :

{
  // ...
  "scripts": {
    // ...
    "velocidade": "node velocidade.js"
  }
  // ...
}


// Exercício 7

// Crie o arquivo sorteio.js com o conteúdo a seguir:

const readline = require('readline-sync');

// Criamos uma função para poder utilzar early return
function logResultado(numero, resposta) {
  // Aqui, utilizamos o return para interromper a execução da função
  // Esse é o padrão de código conhecido com early return, ou seja:
  // retornamos "mais cedo" pois uma determinada condição (no caso, a resposta estar certa)
  // não foi atingida.
  if (numero !== resposta) {
    return console.log(`Opa, não foi dessa vez. O número era ${numero}`);
  }

  // Como o if da linha acima tem um `return`, não precisamos do `else`, já que, se a execução
  // do código entrar no if, a linha abaixo não será executada
  return console.log('Parabéns, número correto!');
}

function runGame() {
  const numero = Math.random() * 10;

  const resposta = readline.questionInt(
    'Digite um número entre 0 e 10 para saber se é o número que estou pensando'
  );

  logResultado(numero, resposta);

  const novamente = readline.question(
    'Deseja jogar novamente? (Digite s para sim, e qualquer outra coisa para não)'
  );

  // Mais uma vez, utilizamos um return para interromper a execução do código mais cedo,
  // o que elimina a necessidade do else
  if (novamente !== 's') return console.log('OK, até a próxima!');

  // Chamamos a mesma função para executar novamente o jogo.
  // Uma função que chama a si mesma é chamada de função **recursiva**
  runGame();
}

// Executamos o jogo pela primeira vez
runGame();


// Exercício 8

const readline = require('readline-sync');

// Criamos uma lista dos scripts disponíveis
// Utilizamos objetos com `name` e `script` para facilitar a criação da lista que será exibida
const scripts = [
  { name: 'Calcular IMC', script: './imc.js' },
  { name: 'Calcular velocidade média', script: './velocidade.js' },
  { name: 'Jogo de adivinhação', script: './sorteio.js' },
];

// Iteramos sobre os scripts para criar a lista numerada
const mensagem = scripts
  .map((script, index) => `${index + 1} - ${script.name}`)
  // Adicionamos uma linha a mais no começo da mensagem
  .unshift('Escolha um número para executar o script correspondente')
  .join('\n');

const scriptNumber = readline.questionInt(mensagem) - 1;

const script = scripts[scriptNumber];

if (!script) return console.log('Número inválido. Saindo');

// Chamamos o script selecionado
// Note que, no dia a dia, é mais comum utilizarmos outras formas de executar arquivos externos
// No entanto, para fins didáticos, o `require` nos atende por enquanto.
require(script.script);

{
  // ...
  "scripts": {
    // ...
    "start": "node index.js"
  }
  // ...
}

//Bônus
//Exercício 1

const readline = require('readline-sync');

function realizaFatoracao(x) {
  // Se x for 0 ou 1
  return [0, 1].includes(x)
    // Retornamos 1
    ? 1
    // Caso contrário, continuamos o cálculo do fatorial multiplicando x pelo fatorial de x - 1
    : x * realizaFatoracao(x - 1);
}

async function realizaCalculo() {
  const x = readline.questionInt('Informe o valor de x:');

  if (x <= 0) {
    console.log('Digite um número maior que 0!')
    return;
  }

  console.log(`x: ${x}`);

  const resultado = realizaFatoracao(x);

  console.log(`Resultado: ${resultado}`);
}

realizaCalculo();

{
  // ...
  "scripts": {
    // ...
    "fatorial": "node fatorial.js"
  }
  // ...
}

// ...
// const scripts = [
//   { name: 'Calcular IMC', script: './imc.js' },
//   { name: 'Calcular velocidade média', script: './velocidade.js' },
//   { name: 'Jogo de adivinhação', script: './sorteio.js' },
{ name: 'Calcular fatorial', script: './fatorial.js' },
// ];
// ...

//Exercício 2

const readline = require('readline-sync');

function calculaElemento (n) {
  // a armazena o último número que calculamos
  let a = 1;
  // b armazena o penúltimo número que calculamos
  let b = 1;

  // Repetimos o loop enquanto `n` for maior que 0
  for (; n >= 0; n--) {
    if (b) console.log(b);
    // Armazenamos o último valor calculado em uma variável temporária
    const temp = a;
    // Para calcular o novo valor, somamos o último valor com o penúltimo valor
    // O novo valor é armazenado em `a`, já que ele passa a ser o último valor calculado
    a = a + b;
    // O valor antigo de `a`, que estava armazenado na variável temporária
    // agora se torna o penúltimo número e, por isso, é armazenado em `b`
    b = temp;
  }

  console.log(b);
  return b;
}

async function realizaCalculo() {
  const n = readline.questionInt('Digite o valor de n:');

  if (n <= 0) {
    console.log('Digite um número maior que 0!')
    return;
  }

  console.log(`n: ${n}`);

  calculaElemento(n - 2);
}

realizaCalculo();

{
  // ...
  "scripts": {
    // ...
    "fibonacci": "node fibonacci.js"
  }
  // ...
}

// ...
// const scripts = [
//   { name: 'Calcular IMC', script: './imc.js' },
//   { name: 'Calcular velocidade média', script: './velocidade.js' },
//   { name: 'Jogo de adivinhação', script: './sorteio.js' },
//   { name: 'Calcular fatorial', script: './fatorial.js' },
{ name: 'Exibir n números de fibonacci', script: './fibonacci.js' },
// ];
// ...