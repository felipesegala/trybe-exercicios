//Array, For, for/of, while

// let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];
// tasksList.push('Almoço');

// for(let index = 0; index < tasksList.length; index += 1){
//     console.log(tasksList[index]);
// }


// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// let menuServices = menu[2];

// console.log(menuServices);
//mostrar um item especifico

// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// menu.push('Contato')
// console.log(menu);

// let numero = 7;

// for(contador = 1; contador <= 10; contador += 1){
//     console.log(numero * contador);
// }
// exemplo de tabuada

// let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

// for(index = 0; index < groceryList.length; index += 1){
//     console.log(groceryList[index]);
// }

// let names = ['João', 'Maria', 'Antônio', 'Margarida'];
// for(let name of names){
//     console.log(name);
// }


// let dado1 = Math.ceil(Math.random() * 6);
// console.log('resultado dado 1:', dado1);
// let dado2 = Math.ceil(Math.random() * 6);

// while (dado1 !== dado2) {
//   dado2 = Math.ceil(Math.random() * 6);
//   console.log('resultado dado 2:', dado2);
// }

let n = 9;

let resultado = 100;
for (let index = 0; index <= n; index += 1) {
  resultado -= index;
};
console.log(resultado);
