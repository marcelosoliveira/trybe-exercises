let num1 = 9;
let num2 = 8;
let num3 = 17;

let numPar = 0;

if (num1 % 2 === 0) {
    numPar += 1;
}
if(num2 % 2 === 0) {
    numPar += 1;
}
if(num3 % 2 === 0) {
    numPar += 1;
}

if (numPar > 0) {
    console.log("Tem número par? ",true);
}else {
    console.log("Tem número par? ", false);
}

console.log(`Total de números pares é ${numPar}`);