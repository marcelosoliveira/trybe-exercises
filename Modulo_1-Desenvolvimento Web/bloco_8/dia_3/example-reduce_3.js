/* O reduce possui uma outra diferença: você pode passar um segundo 
parâmetro para o reduce, logo após a função. Veja a seguir, será 
usado o último exemplo dado da soma dos números: */
const numbers = [32, 15, 3, 2, -5, 56, 10];

const getSum = (result, number) => {
  console.log(result); // 32 47 50 52 47 103
  return result + number;
};

const sumNumbers = numbers.reduce(getSum);
console.log(sumNumbers); // 113

/* Com a alteração: */
const getSum1 = (result, number) => {
  console.log(result); // 0 32 47 50 52 47 103
  return result + number;
  };
const sumNumbers1 = numbers.reduce(getSum1, 0); // Parâmetro adicionado ao reduce: o "0"
console.log(sumNumbers1); // 113
