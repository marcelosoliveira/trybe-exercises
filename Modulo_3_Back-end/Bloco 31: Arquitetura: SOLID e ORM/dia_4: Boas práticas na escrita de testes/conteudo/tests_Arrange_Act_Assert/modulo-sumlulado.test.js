/* Como não vamos testar se o módulo de arquivos do Node funciona (esperamos que alguém já tenha feito isso), podemos simulá-lo */
jest.mock("fs");

/* Dentro do teste, podemos simular o método que nosso módulo deve chamar e qual o retorno */
fs.readFileSync = jest.fn().mockReturnValue({ id: 3 });


const utils = require("./utils");

/* Mocka a função validateDate de dentro do objeto utils e retorna true */
const validateDateSpy = jest
  .spyOn(utils, "validateDate")
  .mockReturnValueOnce(true);

  /* É necessario importar o modelo que será mockado */
const UserModel = require("./model");

/* Mocka o método getById da classe UserModel */
const getById = jest
  .spyOn(UserModel.prototype, "getById")
  .mockReturnValueOnce(users);