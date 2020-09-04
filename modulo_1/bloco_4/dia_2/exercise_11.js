let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (i = numbers.length -1; i >= 0; i -= 1) {
    for (j = 0; j < i; j += 1) {
        if (numbers[i] > numbers[j]) {
            let pos = numbers[i];

            numbers[i] = numbers[j];
            numbers[j] = pos;
        }
    }
}

console.log(`Array Ordenado em ordem decrescente \n ${numbers}`);