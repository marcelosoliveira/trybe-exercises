let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let somaNum = 0;

let media = 0;

for(let num of numbers) {
    somaNum += num;
}

media = somaNum / numbers.length;

console.log(`A média dos valores do vetor é ${media}`);