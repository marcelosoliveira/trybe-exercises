const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

//5.Compare dois objetos (JSON) para verificar se são idênticos ou não
assert.deepStrictEqual(obj1, obj2, "Objeto 1 é igual ao objeto 2");

//Comparando o obj 1 com o obj 3
assert.notDeepStrictEqual(obj1, obj3, "Objeto 1 é diferente ao objeto 3");