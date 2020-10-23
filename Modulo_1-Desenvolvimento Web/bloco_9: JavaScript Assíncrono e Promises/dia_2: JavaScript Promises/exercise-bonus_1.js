const promise  = new Promise((resolve, reject) => {
    const arrayQuad = [];
    let sum = 0;
    for (index = 0; index < 10; index  += 1) {
      const number = Math.floor(Math.random() * 51);
      arrayQuad.push(number ** 2);
    }
    sum = arrayQuad.reduce((acc, arr) => acc += arr);
    sum < 8000 ? resolve(sum) : reject(sum);
  })
  .then((sum) => 
  console.log(`Resolvido o número ${sum} é menor à 8000`))
  .catch((sum) => 
  console.log(`Rejeitado o número ${sum} é maior ou igual à 8000`));