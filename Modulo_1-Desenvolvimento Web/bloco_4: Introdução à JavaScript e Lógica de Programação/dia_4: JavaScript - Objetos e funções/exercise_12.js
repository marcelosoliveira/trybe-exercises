function verificaFimPalavra(word, ending) {
    let inicio = word;
    let final = ending;
    let palavraFinal = "";

    if (inicio.length > final.length){
        for (let i = inicio.length -2; i < inicio.length; i += 1) {
            palavraFinal += inicio[i];
        }
    }else {
        console.error();
    }
    if (inicio === word && final === palavraFinal) {
        return true;
    }else {
        return false;
    }

}
console.log(verificaFimPalavra('trybe', 'be'));
console.log(verificaFimPalavra('joaofernando', 'fernan'));