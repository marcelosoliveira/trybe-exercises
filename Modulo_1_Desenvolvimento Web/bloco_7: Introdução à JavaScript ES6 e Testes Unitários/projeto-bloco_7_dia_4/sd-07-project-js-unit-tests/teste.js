/* Função average. */
const average = (array) => {
  let med = 0;
  let sum = 0;
  if (array.length === 0) {
    return undefined;
  }
  for (let index = 0; index < array.length; index += 1) {
    if (typeof (array[index]) === 'string') {
      return undefined;
    }
    sum += array[index];
  }
  med = Math.round(sum / array.length);
  return med;
};
console.log(average([2, 3]));

/* Função vqv */
const vqv = (nome, idade) => {
  if (nome === undefined || idade === undefined) {
    return undefined;
  }
  return `'Oi meu nome é ${nome}!
Tenho ${idade} anos,
trabalho na Trybe e mando muito em programação!
#VQV!'`;
};

console.log(vqv('Marcelo', 34));

/* Função productDetails
 */

const productDetails = (firstProduct, secondProduct) => [
  {
    name: firstProduct,
    details: {
      productId: `${firstProduct}123`,
    },
  },
  {
    name: secondProduct,
    details: {
      productId: `${secondProduct}123`,
    },
  },
];
console.log(productDetails('Alcool gel', 'Máscara')[1].details.productId);

/* Função myCounter */
const myCounter = () => {
  const myArray = [];
  for (let count = 0; count <= 3; count += 1) {
    myArray.push(count);
    for (let index = 2; index <= 3; index += 1) {
      myArray.push(index);
    }
  }
  return myArray;
};
console.log(myCounter());

/* Função restaurant */
const payPal = () => {
  const foodName = Object.keys(Object.entries(meuRestaurante.fetchMenu)[0][1]);
  const drinkName = Object.keys(Object.entries(meuRestaurante.fetchMenu)[1][1]);
  const foodValue = Object.values(Object.entries(meuRestaurante.fetchMenu)[0][1]);
  const drinkValue = Object.values(Object.entries(meuRestaurante.fetchMenu)[1][1]);
  const consumption = meuRestaurante.consumption;
  let sum = 0;
  for (let index = 0; index < consumption.length; index += 1) {
    for (let keys = 0; keys < consumption.length; keys += 1) {
      if (consumption[index] === foodName[keys]) {
        sum += foodValue[keys];
      }
      if (consumption[index] === drinkName[keys]) {
        sum += drinkValue[keys];
      }
    }
  }
  sum = sum + (sum * 0.1);
  return sum;
};
const createMenu = (menu) => {
  meuRestaurante = {
    fetchMenu: menu,
    consumption: [],
    order: (str) => meuRestaurante.consumption.push(str),
    pay: () => payPal(),
  };
  return meuRestaurante;
};
const assert = require('assert');
const objetoRetornado2 = createMenu({food: {'coxinha': 3.90, 'sanduiche': 9.90},
  drinks: {'agua': 3.90, 'cerveja': 6.90}});
objetoRetornado2.order('coxinha');
objetoRetornado2.order('agua');
objetoRetornado2.order('coxinha');
assert.strictEqual(objetoRetornado2.pay(), 12.87);
console.log(objetoRetornado2.pay());
