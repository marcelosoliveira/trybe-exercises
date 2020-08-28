let notas = [8, 9, 7, 8];

let somaNotas = 0;

let media = 0;

for(let n of notas) {
    somaNotas += n;
}

media = somaNotas / notas.length;

console.log(`A média dos valores do vetor é ${media}`);