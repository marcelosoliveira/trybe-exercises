const { TestScheduler } = require('jest');
let { numbers } = require('./exercicio_1');

afterEach(() => {
  numbers.mockReset();
});
 
describe('Testes para o exercício 3', () => {
  test('Crie uma nova implementação que receba três parâmetros e retorne sua multiplicação', () => {
    numbers = jest.fn().mockImplementation((a, b, c) => a * b * c);
    numbers(1, 2, 3);
    expect(numbers).toHaveBeenCalled();
    expect(numbers(3, 3, 3)).toBe(27);
    expect(numbers).toHaveBeenCalledTimes(2)
    expect(numbers).toHaveBeenCalledWith(3, 3, 3);
  });

  test('Crie uma nova, que receba um parâmetro e retorne seu dobro', () => {
    numbers.mockImplementation((a) => a * 2);
    numbers(1);
    expect(numbers).toHaveBeenCalled();
    expect(numbers(3)).toBe(6);
    expect(numbers).toHaveBeenCalledTimes(2)
    expect(numbers).toHaveBeenCalledWith(3);
  });
});