const users = {
  4: { name: "Mark" },
  5: { name: "Paul" },
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
    if (users[id]) {
      return resolve(users[id]);
    }

    return reject({ error: "User with " + id + " not found." });
  });
};

const getUserName = (userID) => {
  return findUserById(userID).then((user) => user.name);
};

describe("Teste para verificar se existe o id usuário e retorna o nome", () => {
  test("Retorna o nome do usuário", () => {
    expect.assertions(1);
    return expect(getUserName(4)).resolves.toEqual("Mark");
  });
});

describe("Teste para verificar que não existe o id usuário", () => {
  test("Retorna um erro", () => {
    expect.assertions(1);
    return expect(getUserName(6)).rejects.toEqual({ error: "User with 6 not found."});
  });
});
