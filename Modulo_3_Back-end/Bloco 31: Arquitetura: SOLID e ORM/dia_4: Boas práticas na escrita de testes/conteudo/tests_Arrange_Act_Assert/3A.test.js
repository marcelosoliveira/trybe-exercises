test("When user's age is bigger than 18, should be tagged as an adult", () => {
  /* Arrange/Organização: inicia o usuário como um mock */
  const user = { name: "Eduardo Pedroso", age: 21, email: "mail@mail.com" };

  /* Act/Ação: chama uma função e guarda o retorno, aqui é onde o teste acontece de fato */
  const isUserAnAdult = userUtils.isUserAnAdult(user);

  /* Assert/Afirmação: a flag major realmente voltou true? É aqui que vamos ter a resposta para essa pergunta */
  expect(isUserAnAdult).toEqual(true);
});
