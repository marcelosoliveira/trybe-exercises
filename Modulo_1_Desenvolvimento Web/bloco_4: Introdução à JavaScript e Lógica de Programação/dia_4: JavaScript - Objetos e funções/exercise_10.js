function numRepeat() {
    let numbers = [2, 3, 2, 5, 8, 2, 3];
    let num = 0;
    let count = 0;
    for (let i = 0; i < numbers.length; i += 1){
        let countRepeat = 0;        
        for (let j = 1; j <= numbers.length; j += 1) {
            if (numbers[i] === numbers[j]) {
                countRepeat += 1;
            }
        }
        if (count < countRepeat){
            num = numbers[i];
            count = countRepeat;
        }
    }
    return num;
}
console.log(numRepeat());