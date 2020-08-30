let num1 = 9;
let num2 = 7;
let num3 = 18;

let numImpar = 0;

if (num1 % 2 > 0) {
    numImpar += 1;
}
if(num2 % 2 > 0) {
    numImpar += 1;
}
if(num3 % 2 > 0) {
    numImpar += 1;
}

if (numImpar > 0) {
    console.log("Tem número ímpar? ",true);
}else {
    console.log("Tem número ímpar? ", false);
}

console.log(`Total de números ímpares é ${numImpar}`);