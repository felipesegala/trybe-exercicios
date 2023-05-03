let word = 'tryber';
let invert = '';

for (let index = 0; index < word.length; index += 1){
    invert += word[word.length - 1 - index];
}

console.log(invert);


// outra solução 
// let word = 'tryber';
// let reverseWord = '';

// reverseWord = word.split('').reverse().join('');

// console.log(reverseWord);