const fat = number => number <= 1 ? 1 : number * fat(number - 1);

console.log(fat(5));
