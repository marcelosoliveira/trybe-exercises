// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    let count = 0;
    const vogais = 'aeiou';
    for (index = 0; index < vogais.length; index += 1) {
        for (key = 0; key < str.length; key += 1) {
            if (vogais[index] === str[key].toLowerCase()) {
                count += 1;
            }
        }
    }
    return count;
}

module.exports = vowels;
