/* Rodando tudo junto
Como vimos agora há pouco, Promises são executadas assim que são criadas. Isso quer dizer que, no código abaixo, todos os arquivos serão lidos ao mesmo tempo e, portanto, não teremos uma forma de saber quando cada um vai terminar de ser lido. Mas e se precisarmos do resultado da leitura dos três arquivos?
Entra no palco: Promise.all !
O Promise.all é um método da Promise que nos permite passar um array de Promises e receber, de volta, uma única Promise, que será resolvida com os resultados de todas as Promises, assim que todas elas forem resolvidas. Ele também nos permite utilizar um único catch , que será chamado caso qualquer uma das Promises seja rejeitada.
Vamos reescrever quase o mesmo código que fizemos acima, mas, desta vez, vamos escrever, no final, a soma do tamanho de todos os arquivos.
 */

const fs = require('fs');

function readFilePromise (fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, content) => {
      if (err) return reject(err);
      resolve(content);
    });
  });
}

Promise.all([
  readFilePromise('arquivo.txt'),
  readFilePromise('promise.txt'),
  readFilePromise('meu-novo-arquivo.txt')
])
.then(([file1, file2, file3]) => {
  const fileSizeSum = file1.byteLength + file2.byteLength + file3.byteLength;
  console.log(`Lidos 3 arquivos totalizando ${fileSizeSum} bytes`);
})
.catch((err) => {
  console.error(`Erro ao ler arquivos: ${err.message}`);
});
