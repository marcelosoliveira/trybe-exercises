/* Há também um método nativo do módulo fs que transforma suas funções em promises. Para utilizá-lo, basta modificar a importação do módulo, como no exemplo abaixo:
 */
const fs = require('fs').promises;

const text = 'Texto teste 3';

function writingFiles() {
  fs.writeFile('./meu-arquivo.txt', text);
}

writingFiles();
