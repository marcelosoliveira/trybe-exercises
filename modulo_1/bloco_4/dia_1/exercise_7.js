let porcentagem = 80;

if (porcentagem >= 90) {
    let nota = "A";
    console.log(`Sua nota é ${nota}`);
}else if (porcentagem >= 80) {
    let nota = "B";
    console.log(`Sua nota é ${nota}`);
}else if (porcentagem >= 70) {
    let nota = "C";
    console.log(`Sua nota é ${nota}`);
}else if (porcentagem >= 60) {
    let nota = "D";
    console.log(`Sua nota é ${nota}`);
}else if (porcentagem >= 50) {
    let nota = "E";
    console.log(`Sua nota é ${nota}`);
}else if (porcentagem < 50 && porcentagem > 0) {
    let nota = "F";
    console.log(`Sua nota é ${nota}`);
}else {
    console.error("Nota inválida!");
}