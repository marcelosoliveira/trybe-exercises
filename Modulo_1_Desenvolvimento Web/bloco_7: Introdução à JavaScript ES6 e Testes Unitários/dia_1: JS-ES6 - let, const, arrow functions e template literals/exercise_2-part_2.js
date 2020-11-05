const longestWord = frase => {
    frase = frase.split(' ');
    let palavra = '';
    for (index = 0; index < frase.length; index += 1) {
        if(frase[index].length > palavra.length) {
            palavra = frase[index];
        }        
    }
    return palavra;
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")); // retorna 'aconteceu'