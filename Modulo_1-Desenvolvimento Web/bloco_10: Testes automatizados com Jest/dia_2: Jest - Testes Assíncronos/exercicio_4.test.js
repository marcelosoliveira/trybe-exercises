const fetch = require("node-fetch");

const getRepos = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};

describe("Requisição com fetch", () => {
  it("Teste de requisição github ok", async (done) => {
    await getRepos("https://api.github.com/users/tryber/repos").then(
      (element) => {
        expect(element).toContain("sd-00-block5-project-pixels-art");
        expect(element).toContain("sd-000-project-mongodb-aggregations");
      }).catch(error => error);
    done();
  });
});
