const productUtils = require('./calculateDiscount');

test("When the discount is 15% and the discount flag is true, then the product price should be dicreased by 15%", () => {
  const product = { name: "Coca-cola", discount: 0.15, price: 10 };

  const finalPrice = productUtils.calculateDiscount(
    product.price,
    product.discount
  );

  expect(finalPrice).toBe(8.5);
});
