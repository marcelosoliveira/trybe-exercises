let angulo1 = 50;
let angulo2 = 70;
let angulo3 = 60;

let somaAngulos = angulo1 + angulo2 + angulo3;

if (somaAngulos === 180) {
    console.log(true);
} else if ((somaAngulos < 180) || (somaAngulos > 180)) {
    console.log(false);
}else {
    console.error("!Err!");
}
