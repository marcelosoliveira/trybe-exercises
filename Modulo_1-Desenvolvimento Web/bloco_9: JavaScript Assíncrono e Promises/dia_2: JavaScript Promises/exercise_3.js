const promise  = new Promise((resolve, reject) => {
    const arrayQuad = [];
    let sum = 0;
    for (index = 0; index < 10; index  += 1) {
      const number = Math.floor(Math.random() * 51);
      arrayQuad.push(number ** 2);
    }
    sum = arrayQuad.reduce((acc, arr) => acc += arr);
    if (sum < 8000) {
      div = [2, 3, 5, 10];
      array = [];
      for (num of div) {
        array.push(Math.round(sum / num));
      }
      resolve(array);    
    } else {
      reject(sum);
    }
  })
  .then((array) =>
  console.log(`Resolvido! O array da soma dividida pelos números 2, 3, 5, 10: ${array}`))
  .catch((sum) => 
  console.log(`Rejeitado! O número ${sum} é maior ou igual que 8000`));
  