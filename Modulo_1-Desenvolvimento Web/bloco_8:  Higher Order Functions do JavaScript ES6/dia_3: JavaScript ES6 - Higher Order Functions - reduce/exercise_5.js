    
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];



function containsA() {
  const letras = names.reduce((acc, palavras) => acc += palavras);
  const count = letras.toLowerCase().split('a').length - 1;
  return count;
}

assert.deepEqual(containsA(), 20);