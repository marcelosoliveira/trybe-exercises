let array = [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54];

for (i = array.length -1; i >= 0; i -= 1) {
    for (j = 0; j < i; j += 1) {
        if (array[i] > array[j]) {
            let pos = array[i];

            array[i] = array[j];
            array[j] = pos;
        }
    }
    console.log(`Array Ordenado em ordem crescente \n ${array}`);
}

//console.log(`Array Ordenado em ordem crescente \n ${array}`);