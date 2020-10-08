/*Para fixar ainda mais conceito de reduce, faça uma função que some todos os 
números pares do array: 
Solução é está a seguir, mas tente realizar a função sem vê-la. 
Tente criar uma usando reduce e filter, e outra apenas usando reduce. */
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

//Soma de número ímpares
const numberOdd = numbers.filter((number) => number % 2 !== 0).reduce(
(soma, num) => soma + num);
console.log(numberOdd);

//Apenas reduce
//Soma de número pares
const numberPair = numbers.reduce((acumulator, number) => number % 2 === 0 ? 
acumulator + number : acumulator);
console.log(numberPair);
