let { caixaAlta, primeiraLetra, concatenarString } = require('./exercicio_4');

describe('Testes das funções do exercício 4', () => {
  test('Primeira função, ela deve retornar a string em caixa baixa', () => {
    caixaAlta = jest.fn().mockImplementation((palavra) => palavra.toLowerCase());
    expect(caixaAlta('MARCELO')).toEqual('marcelo');
    expect(caixaAlta).toHaveBeenCalled();
  });

  test('Para a segunda função, última letra de uma string', () => {
    primeiraLetra = jest.fn().mockImplementation((palavra) => palavra[palavra.length - 1]);
    expect(primeiraLetra('MARCELO')).toEqual('O');
    expect(primeiraLetra).toHaveBeenCalled();
  });

  test('A terceira deve receber três strings e concatená-las', () => {
    concatenarString = jest.fn().mockImplementation((palavra1, palavra2, palavra3) => palavra1+palavra2+palavra3);
    expect(concatenarString('Marcelo', 'Santos', 'Oliveira')).toEqual('MarceloSantosOliveira');
    expect(concatenarString).toHaveBeenCalled();
  });
});