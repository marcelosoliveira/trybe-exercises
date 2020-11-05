let { fetchDog } = require("./exercicio_6");

describe('testing fetchDog implementation', () => {
  fetchDog = jest.fn();

  afterEach(() => {
    fetchDog.mockReset();
  });

  test('when request is successful', () => {
    fetchDog.mockResolvedValue('request success');

    expect(fetchDog()).resolves.toBe('request success');
    expect(fetchDog).toHaveBeenCalledTimes(1);

    fetchDog();
    expect(fetchDog).toHaveBeenCalledTimes(2);
  });

  test('when request is failed', () => {
    fetchDog.mockRejectedValue('request failed');

    expect(fetchDog()).rejects.toBe('request failed');
    expect(fetchDog).toHaveBeenCalledTimes(1);
  });

});