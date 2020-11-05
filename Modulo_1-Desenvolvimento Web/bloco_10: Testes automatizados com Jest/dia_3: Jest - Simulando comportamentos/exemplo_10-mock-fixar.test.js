const math = require("./math");

test("Testando operações aritiméticas", () => {
  //1.Faça o mock da funcão subtrair e teste sua chamada.
  math.subtrair = jest.spyOn(math, "subtrair");
  math.subtrair(3, 1);
  expect(math.subtrair).toHaveBeenCalled();

  //2.Faça o mock da função multiplicar e implemente como
  //retorno padrão o valor '10'. Teste a chamada e o retorno.
  math.multiplicar = jest.fn().mockReturnValue(10);
  expect(math.multiplicar(2, 5)).toBe(10);
  expect(math.multiplicar).toHaveBeenCalled();

  /*  3.Faça o mock da função somar e implemente uma função 
  que recebe dois valores e retorna sua soma. Teste a chamada, 
  o retorno e os parâmetros passados. */
  math.somar = jest.fn().mockImplementation((a, b) => a + b);
  expect(math.somar(3, 4)).toBe(7);
  expect(math.somar).toHaveBeenCalledWith(3, 4);

  /*4.Faça o mock da função dividir e implemente um retorno padrão 
  com o valor '15'. Implemente também os seguintes valores para a 
  primeira e segunda chamadas: '2' e '5'. Teste a chamada, o retorno, 
  os parâmetros e quantas vezes a função foi chamada. */
  math.dividir = jest
    .fn()
    .mockReturnValue(15)
    .mockReturnValueOnce(2)
    .mockReturnValueOnce(5);

  expect(math.dividir(2, 1)).toBe(2);
  expect(math.dividir).toHaveBeenLastCalledWith(2, 1);
  expect(math.dividir).toHaveBeenCalled();
  expect(math.dividir(25, 5)).toBe(5);
  expect(math.dividir).toHaveBeenLastCalledWith(25, 5);
  expect(math.dividir(45, 3)).toBe(15);
  expect(math.dividir).toHaveBeenLastCalledWith(45, 3);
  expect(math.dividir).toHaveBeenCalledTimes(3);
});

test("Testando operações aritiméticas", () => {
  /*     5.Faça o mock da função subtrair de maneira que seja possível restaurar 
    sua implementação original. Defina como retorno padrão o valor '20'. 
    Teste o número de chamadas e o retorno. Restaure a implementação original 
    da função e teste sua execução. */
  math.subtrair = jest.spyOn(math, "subtrair").mockReturnValue(20);
  math.subtrair(10, 5);
  expect(math.subtrair(40, 20)).toBe(20);
  expect(math.subtrair).toHaveBeenCalledTimes(3);
  math.subtrair.mockRestore();
  expect(math.subtrair(7, 7)).toBe(0);
});
