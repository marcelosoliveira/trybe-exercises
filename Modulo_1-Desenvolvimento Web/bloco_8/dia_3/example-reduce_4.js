/* Pode ver que mudou em nada o resultado da função. Mas veja que o 
primeiro valor do result não foi 32, mas sim 0.
Agora mude o 0 para 10 ou qualquer outro valor. */
const numbers = [32, 15, 3, 2, -5, 56, 10];

const getSum = (result, number) => {
  console.log(result); // 10 42 57 60 62 57 113
  return result + number;
  };
const sumNumbers = numbers.reduce(getSum, 10);
console.log(sumNumbers); // 123
