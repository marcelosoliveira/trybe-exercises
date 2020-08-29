let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let numMenor = 0;

for (let num of numbers) { 
    for (let n = 0; n < numbers.length; n += 1) {
        if (num > numbers[n]) {
            numMenor = numbers[n];
        }
    }
}

console.log(`O menor número do vetor é ${numMenor}`);