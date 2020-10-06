/* Outras formas de usar o .map é unir dois arrays para criar um novo.
Considere que você possui duas listas: o preço do primeiro produto (Arroz)
é o primeiro elemento da lista prices (2.99), e assim por diante: */

const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const listProduct = products.map((prod, index) => {
  return { [prod]: prices[index]};
});
console.log(listProduct);

const updateProducts = (listProducts, listPrices) => {
  return listProducts.map((product, index) => (
    { [product]: listPrices[index] }
  ));
};

const listProducts = updateProducts(products, prices);
console.log(listProducts);
