const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

test('Escreva um teste que verifique a chamada do callback de uma função uppercase', (done) => {
  uppercase('tryber', async (letter) => {
    await expect(letter).toMatch('TRYBER');
    done();
  });
  
})