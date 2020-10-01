const assert = require('assert');
const { Console } = require('console');

const verify = (password) => {
  if(password.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{9,})$/)){
    return `Senha cadastrada com sucesso! Sua senha é: ${password}`;
    //return password
  }else{
    return 'Senha inválida!';
  } 
};
console.log(verify('Mas123drj'));

assert.strictEqual(verify('Mas123drj'), 'Senha cadastrada com sucesso! Sua senha é: Mas123drj');
assert.strictEqual(verify('Mas122j'), 'Senha inválida!');

/* const pass = '/^[a-z])([A-Z])([@#$%])(\d)){9,20}$/'; */