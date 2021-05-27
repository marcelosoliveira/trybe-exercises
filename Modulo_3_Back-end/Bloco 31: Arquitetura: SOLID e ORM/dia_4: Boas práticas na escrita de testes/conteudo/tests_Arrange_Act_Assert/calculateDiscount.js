const calculateDiscount = (price, discount) => {
  return price - price * discount;
};

module.exports = { calculateDiscount };
