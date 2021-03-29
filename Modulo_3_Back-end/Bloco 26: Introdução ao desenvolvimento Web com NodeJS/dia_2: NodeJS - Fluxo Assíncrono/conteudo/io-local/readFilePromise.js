const fs = require('fs');

function readFilePromise (fileName) {
  return new Promise((resolve, reject) => {

    fs.readFile(fileName, (err, content) => {
      if (err) return reject(Error("Arquivo não encontrado! " + err));
      resolve(content.toString('utf8'));
    });

  });
}

readFilePromise('./promise.txt')
  .then((result) => console.log(result))
  .catch((err) => console.error(err.message));
