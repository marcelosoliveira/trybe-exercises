function maisLetras() {
    let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
    let result = "";
    for (let nome in nomes) {
        for (let letras in nomes){
            if (nomes[nome].length < nomes[letras].length){
                result = nomes[letras];
            }
        }
    }
    return result;
}
console.log(maisLetras());
