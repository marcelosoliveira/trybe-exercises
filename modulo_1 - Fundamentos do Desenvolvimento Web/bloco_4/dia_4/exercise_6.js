function verificaPalindrome(nome) {
    let palindrome = "";
    console.log(palindrome);
    for (let i = nome.length -1; i >= 0; i -= 1) {
        palindrome += nome[i];
    }
    if (palindrome === nome) {
        return true;
    }else {
        return false;
    }
}
console.log(verificaPalindrome('arara'));
console.log(verificaPalindrome('desenvolvimento'));
