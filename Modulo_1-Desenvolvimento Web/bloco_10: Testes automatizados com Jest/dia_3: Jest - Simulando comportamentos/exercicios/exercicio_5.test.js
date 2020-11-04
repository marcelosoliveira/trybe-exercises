let palavra = require('./exercicio_4');
 
describe('Testes para primeira função do exercício 4', () => {
  test('Funções do exercício anterior, repita a implementação para a primeira função', () => {
    palavra.caixaAlta = jest.spyOn(palavra, 'caixaAlta')
      .mockImplementation((palavra) => palavra.toLowerCase());
    palavra.caixaAlta('MaRcElO');
    expect(palavra.caixaAlta).toHaveBeenCalled();
    expect(palavra.caixaAlta('OlIvEiRa')).toBe('oliveira');
    expect(palavra.caixaAlta).toHaveBeenCalledWith('OlIvEiRa');
    expect(palavra.caixaAlta).toHaveBeenCalledTimes(2);
  });
  test('Restaure a implementação original e crie os testes necessários para validar', () => {
    palavra.caixaAlta.mockRestore();
    palavra.caixaAlta('MaRcElO');
    expect(palavra.caixaAlta('OlIvEiRa')).toBe('OLIVEIRA');
  });
});