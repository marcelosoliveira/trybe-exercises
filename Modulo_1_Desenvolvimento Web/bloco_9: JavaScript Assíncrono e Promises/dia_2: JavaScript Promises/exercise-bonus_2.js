async function promise() {
  const arrayQuad = [];
  let sum = 0;
  for (index = 0; index < 10; index  += 1) {
    const number = Math.floor(Math.random() * 51);
    arrayQuad.push(number ** 2);
  }
  sum = await arrayQuad.reduce((acc, arr) => acc += arr);
    if (sum < 8000) {
    return console.log(`Resolvido o número ${sum} é menor que 8000`);
    }
  throw new Error(console.log('É mais de oito mil! Essa promise deve estar quebrada!'));
  
}

promise();