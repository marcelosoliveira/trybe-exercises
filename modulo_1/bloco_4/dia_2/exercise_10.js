let array = [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54];

for (i = 1; i < array.length; i += 1) {
    for (j = 0; j < i; j += 1) {
        if (array[i] < array[j]) {
            let pos = array[i];

            array[i] = array[j];
            array[j] = pos;
        }
    }
}

console.log(`Array Ordenado em ordem crescente \n ${array}`);
