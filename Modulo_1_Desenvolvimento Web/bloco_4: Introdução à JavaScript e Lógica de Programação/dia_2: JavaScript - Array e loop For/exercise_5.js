let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let numMaior = 0;

for (let num of numbers) {
    if (num > numMaior) {
        numMaior = num;
    }
}

console.log(`O maior número do vetor é ${numMaior}`);