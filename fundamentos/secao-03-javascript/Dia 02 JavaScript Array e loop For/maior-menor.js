// Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];
let bigger = array[0];
let smaller = array[0];

for( index = 1; index < array.length; index += 1){
    if( array[index].length > bigger.length){
        bigger = array[index];
    }
}

for( index = 1; index < array.length; index += 1){
    if( array[index].length < smaller.length){
        smaller = array[index];
    }
}
console.log(bigger);
console.log(smaller);