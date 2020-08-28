let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let valorImpar = 0;

for (let num of numbers) {
    if (num % 2 !== 0) {
        valorImpar += 1;
    }
}

if (valorImpar === 0) {
    console.log("Nenhum valor ímpar encontrado");
}else {
    console.log(`A quantidade de valores ímpares é ${valorImpar}`);
}

