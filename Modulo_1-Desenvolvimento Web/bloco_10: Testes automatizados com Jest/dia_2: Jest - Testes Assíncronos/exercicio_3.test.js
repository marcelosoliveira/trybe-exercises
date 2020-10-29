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

describe("Reescreva o teste do exercício 2, desta vez utilizando a sintaxe de async/await.", () => {
  it("Retorna o nome do usuário", async () => {
    const name = await getUserName(5);
    expect(name).toBe("Paul");
  });
});

describe("Reescreva o teste erro do exercício 2, com try/catch.", () => {
  it("Retorna erro, usuário não exite", async () => {
    try {
      await getUserName(2);
    } catch (error) {
      expect(error).toEqual({error: "User with 2 not found."});
    }
  });
});
