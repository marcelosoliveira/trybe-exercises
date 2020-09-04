function maiorIndice() {
    let testeArray = [2, 3, 6, 7, 10, 1];
    let result = 0;
    let maior = 0;
    for (let key in testeArray){
        if (testeArray[key] > maior) {
            maior = testeArray[key];
            result = key;
        }
    }
    return result;
}
console.log(maiorIndice());