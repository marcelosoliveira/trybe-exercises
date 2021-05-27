const userToken = require('./centralEventsErrorsToken.js');

it("Testa se o usuário e senha são válidos", async () => {
  const token = await userToken("bob", "123456789");

  expect(token).toBe(36);
});

it("Testa se usuário ou senha é inválido", async () => {
  const result = await userToken('bob', '123456789');

  expect(result.error).toBe('Usuário ou senha inválido!');
});
