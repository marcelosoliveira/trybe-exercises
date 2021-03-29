/* Por último, há também, no módulo util , uma propriedade chamada promisify . Ela transforma o parâmetro recebido em uma promise. Veja no exemplo:
 */
const fs = require('fs');
const util = require('util');

const writeFile = util.promisify(fs.writeFile);

const text = 'Texto teste 4';

function writingFiles() {
  writeFile('./meu-arquivo.txt', text);
}

writingFiles();
