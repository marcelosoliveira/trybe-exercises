function maiorIndice() {
    let testeArray = [2, 4, 6, 7, 10, 0, -3];
    let result = 0;
    for (let key in testeArray){
        for(let chave in testeArray){
            if (testeArray[key] > testeArray[chave]) {
                result = chave;
            }
        }
    }
    return result;
}
console.log(maiorIndice());