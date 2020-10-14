let num = 37;
let primo = 0;

for (let i = 3; i < num; i += 1) {
    if (num % i === 0 ) {
        primo += 1;
    }else {
        primo += 0
    }   
}
if (primo === 0) {
    console.log(`O número ${num} é primo`);
}else {
    console.log(`O número ${num} não é primo`);
}
