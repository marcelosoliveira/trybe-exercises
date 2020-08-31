let salBase = 3000.00;

let inss = 0;
let salInss = 0;
let ir = 0;
let salIr = 0;

if (salBase <= 1556.94 ){
    inss = 0.08;
    salInss = salBase - (salBase * inss);
}else if (salBase > 1556.94 && salBase <= 2594.92){
    inss = 0.09;
    salInss = salBase - (salBase * inss);
}else if (salBase > 2594.93 && salBase <= 5189.82){
    inss = 0.11;
    salInss = salBase - (salBase * inss);
}else if (salBase > 5189.82) {
    salInss = salBase - 570.88;
}

if (salInss <= 1903.98) {
    salIr = 0;
}else if (salInss > 1903.98 && salInss <= 2826.65){
    ir = 0.075;
    salIr = (salInss * ir) - 142.80 ;
}else if (salInss > 2826.65 && salInss <= 3751.05){
    ir = 0.15;
    salIr = (salInss * ir) - 354.80 ;
}else if (salInss > 3751.05 && salInss <= 4664.68){
    ir = 0.225;
    salIr = (salInss * ir) - 636.13 ;
}else if (salInss > 4664.68){
    ir = 0.275;
    salIr = (salInss * ir) - 869.36  ;
}

let salLiq = salInss - salIr;

console.log(`O salário líquido de ${salBase} é de R$${salLiq.toFixed(2)}`);

