function retornaNumero(romano) {
    let numRomano = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    let result = 0;
    let num = numRomano.I;;
    let rom = romano;

    for (let i = 0; i < rom.length; i += 1) {
        for (let key in numRomano) {
            if (key === rom[i].toUpperCase()) {
                if (i === 0) {
                    result = numRomano[key];
                    num = result;                    
                }else {
                    let numKey = numRomano[key];
                    if (num < numKey) {
                        result = numKey - num;
                    }else if (num > numKey) {
                        result = numKey + num;
                    }else {
                        result = num;
                        num = result;
                    } 
                }                               
            }
        }
    }
    return result;
}
console.log(retornaNumero("XL"));
