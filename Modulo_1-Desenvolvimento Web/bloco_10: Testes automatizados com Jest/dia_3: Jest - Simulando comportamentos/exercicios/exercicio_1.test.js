let { numbers } = require('./exercicio_1');

test('Exercício 1 ramdon numbers', () => {
  numbers = jest.fn().mockReturnValue(10);

  numbers();
  expect(numbers).toHaveBeenCalled();
  expect(numbers()).toBe(10);
  expect(numbers).toHaveBeenCalledTimes(2);

});