let a = 30;
let b = 15;
let c = 40;
console.log("a =", a, "b =", b, "c =", c, "\n");

if ((a > b) && (a > c)) {
    console.log(a, "é maior que", b, "e que", c);
}else if ((b > a) && (b > c)) {
    console.log(b, "é maior que", a, "e que", c);
}else if ((c > a) && (c > b)) {
    console.log(c, "é maior que", a, "e que", b);
}