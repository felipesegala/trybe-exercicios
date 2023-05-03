let biggestPrimeNumber = 0;

for (let currentNumber = 2; currentNumber <= 50; currentNumber += 1) {
  let isPrime = true;
  for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
    if (currentNumber % currentDivisor === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    biggestPrimeNumber = currentNumber;
  }
}

console.log(biggestPrimeNumber);

// outra forma de resolver
//você pode otimizar esse código! Se quer encontrar o maior número primo entre 2 e 50, por que não começar a procurar de forma decrescente? Assim, você não precisa percorrer todos os números do intervalo, basta encontrar o primeiro número primo que seja menor que 50. 🤯

// let biggestPrimeNumber = 0;

// for (let currentNumber = 50; currentNumber >= 2; currentNumber -= 1) {
//   let isPrime = true;
//   for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
//     if (currentNumber % currentDivisor === 0) {
//       isPrime = false;
//     }
//   }
//   if (isPrime) {
//     biggestPrimeNumber = currentNumber;
//     break; // O break finaliza a execução do laço For
//   }
// }

// console.log(biggestPrimeNumber);