/* A função soma todos os valores de um array:
Apenas com o for: */
const numbers = [32, 15, 3, 2, -5, 56, 10];
let sumNumbers1 = 0; // A variável 'acumula', a cada iteração do for, o resultado da operação feita lá!
for(let i = 0; i < numbers.length; i += 1){
  sumNumbers1 = sumNumbers1 + numbers[i];
}
console.log(sumNumbers1); // 113

/* Com .reduce: */
const sumNumbers2 = numbers.reduce((result, number) => result + number); // O parâmetro `result` é o acumulador. Ele recebe, do `reduce`, o retorno da função a cada iteração.
console.log(sumNumbers2); // 113

// Ou seja:

const getSum = (result, number) => result + number;
const sumNumbers = numbers.reduce(getSum);
console.log(sumNumbers); // 113