let { numbers } = require('./exercicio_1');

test('Exercício 2 divisão de numbers', () => {
  numbers = jest.fn().mockImplementationOnce((a, b) => a / b);

  expect(numbers(10, 5)).toBe(2);
  expect(numbers).toHaveBeenCalled();
  expect(numbers).toHaveBeenCalledTimes(1);
  expect(numbers).toHaveBeenLastCalledWith(10, 5);
})