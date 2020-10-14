const assert = require('assert');

const obj = {
  name: 'Marcelo',
  lastName: 'Santos',
  age: 34
}
 const expected = Object.keys(obj).length;
 
 assert.strictEqual(expected, 3, 'Tamanho do objeto deve ser igual a 3');
 assert.notStrictEqual(expected, 3, 'Tamanho do objeto deve ser diferente de 3');
 assert.deepEqual(expected, 3, 'Tamanho do objeto deve ser igual a 3');
 assert.notDeepEqual(expected, 3, 'Tamanho do objeto deve ser diferente de 3');
 assert.equal(expected, 3, 'Tamanho do objeto deve ser igual a 3');
 assert.notEqual(expected, 3, 'Tamanho do objeto deve ser diferente de 3');
 assert.ok(expected === 3, 'Tamanho do objeto deve ser igual a 3');
 assert.throws(expected, 3, 'Tamanho do objeto deve ser igual a 3'); //testa uma função inteira assert.throws