const target = "A AA B BB Aa Bb AAA";

const regExp1 = /A{1,2}/g;

const regExp2 = /A A+/g;

console.log(target.match(regExp2));
