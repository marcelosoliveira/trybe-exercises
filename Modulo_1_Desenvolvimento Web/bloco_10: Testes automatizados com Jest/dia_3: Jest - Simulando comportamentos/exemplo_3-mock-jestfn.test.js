let randomNumber = () => Math.round(Math.random() * 100);

let isDivisible = (number) => (randomNumber() % number) === 0;

describe('Testa as funções randomNumber e isDivisible', () => {
  test('Testa se a função randomNumber é divisível pela função isDivisible', () => {
    randomNumber = jest.fn().mockReturnValue(10);
    isDivisible(10);
    expect(randomNumber).toHaveBeenCalled();
    expect(isDivisible(2)).toBe(true);
  });

  test('Testa se a função randomNumber é divisível pela função isDivisible com mock', () => {
    randomNumber = jest.fn()
      .mockReturnValue(15)
      .mockReturnValueOnce(30)
      .mockReturnValueOnce();

      expect(isDivisible(5)).toBe(true);
      expect(isDivisible(20)).toBe(false);
      expect(isDivisible(10)).toBe(false);
      expect(isDivisible(3)).toBe(true); 
  });
});