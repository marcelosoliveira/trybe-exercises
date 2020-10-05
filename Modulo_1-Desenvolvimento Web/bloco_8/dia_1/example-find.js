/* Queremos encontrar e imprimir no console o primeiro elemento de um array que 
satisfaça a uma determinada condição. Pode ser, por exemplo, 
encontrar o primeiro número que seja divisível por 5 em uma lista de números.
Primeiro, usando for e if: */
const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
let firstMultipleOf5;
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] % 5 === 0) {
    firstMultipleOf5 = numbers[i];
    break;
  }
}

console.log(firstMultipleOf5);

//Agora, a mesma coisa usando Array.find:
const firstMultipleOf6 = numbers.find(number => number % 5 === 0);

console.log(firstMultipleOf6);
