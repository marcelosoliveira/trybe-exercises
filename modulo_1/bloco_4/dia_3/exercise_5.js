let n = 7;
let aster = "";
let position = n;
let meio = " ";


for (let i = 1; i <= n; i += 1) {
    for (let j = 1; j <= i; j += 1) {
        if(j < position) {
            aster += " ";
        }else {
            
            aster += "*";
        }      
    }
    console.log(aster);
    aster = "";
    position -= 1;
}