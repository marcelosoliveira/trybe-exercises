//[45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newNumbers = [];
let mult = 0;
numbers.push(2);

for (i = 1; i < numbers.length; i += 1) {
    for (j = 0; j < i; j += 1){
        mult = numbers[i] * numbers[j]; 
    }
    newNumbers.push(mult);
}

console.log(`O novo vetor é \n ${newNumbers}`);
