// let base = 5;
// let height = 8;
// let area = base * height;

// console.log(area);

// let perimeter = 5 + 5 + 8 + 8;
// console.log(perimeter);

// let nota = 80;

// if ( nota >= 80) {
//     console.log("Parabens, você faz parte do grupo de pessoas aprovadas!");
// }else if( nota < 80 && nota >= 60){
//     console.log("Você está na nossa lista de espera.")
// }else if( nota < 60){
//     console.log("infelizmente, você reprovou!")
// }

// let comida = 'pão na chapa';
// let bebida = 'café';

// if (bebida === 'café' && comida === 'pão na chapa') {
//   console.log('Muito obrigado(a) pela refeição :)');
// } else {
//   console.log('Acho que houve um engano com meu pedido');
// }

// let conditionOne = true;
// let conditionTwo = false;

// console.log(conditionOne && conditionTwo);

// let cenouras = true;
// let leite = true;
// let arroz = true;
// let feijao = true;

// let listaDeCompras = cenouras && leite && arroz && feijao;
// console.log(true && true); // true
// console.log(true && false); // false
// console.log(false && true); // false
// console.log(false && false); // false

// let currentHour = 10;
// let message = "";

// if( currentHour >= 22){
//     console.log("Não deveríamos comer nada, é hora de dormir!")
// }else if( currentHour >= 18 && currentHour < 22){
//     console.log("Rango da noite, vamos jantar :D");
// }else if ( currentHour >= 14 && currentHour < 18){
//     console.log("Vamos fazer um bolo pro café da tarde?")
// }else if (currentHour >= 11 && currentHour < 14){
//     console.log("Hora do almoço!!!")
// }else if ( currentHour == 4 || 11){
//     console.log("Hmmm, cheiro de café recém-passado")
// }

// console.log(message);

// let weekDay = "sabado";

// if (weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira") {
//     console.log("Oba, mais um dia de aprendizado na Trybe >:D");
//    } else {
//      console.log("FINALMENTE, descanso merecido! UwU!");
//    }

// switch / case

let status = "aprovada";

switch(status){
  case "aprovada":
    console.log('Parabens');
    break;
  
  case "lista":
    console.log("Lista de espera");
    break;
    
  case "reprovada":
    console.log("infelizmente ...")
    break;

  case "default":
    console.log("incorreto");
    break;
} 
console.log(status);
    