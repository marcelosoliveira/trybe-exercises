let numbers = [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54];

for (i = 1; i < numbers.length; i += 1) {
    for (j = 0; j < i; j += 1) {
        if (numbers[i] < numbers[j]) {
            let pos = numbers[i];

            numbers[i] = numbers[j];
            numbers[j] = pos;
        }
    }
}

console.log(`Array Ordenado em ordem crescente \n ${numbers}`);
