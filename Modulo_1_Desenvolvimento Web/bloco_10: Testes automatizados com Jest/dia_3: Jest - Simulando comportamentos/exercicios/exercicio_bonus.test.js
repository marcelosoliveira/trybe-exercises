const { fetchJoke } = require('./exercicio_bonus');
const fetch = require('node-fetch');
jest.mock('node-fetch');

describe('Faça um mock do fetch, que faz a chamada à API, utilizando os seguintes dados:', () => {
  it('Testes de mocks na api fetchjoke', async (done) => {

    const mockJoker = {
      id: '7h3oGtrOfxc',
      joke: 'Whiteboards ... are remarkable.',
      status: 200
    }

    fetch.mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(mockJoker)
    }));

    const response = await fetchJoke();
    expect(response).toBe('7h3oGtrOfxc');
    done();
  });
});