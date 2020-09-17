function somaNumeros(n) {
    let soma = 0 ;
    let num = n;
    for (let i = 1; i <= num; i += 1) {
        soma += i;
    }
    return soma;
}
console.log(somaNumeros(7));