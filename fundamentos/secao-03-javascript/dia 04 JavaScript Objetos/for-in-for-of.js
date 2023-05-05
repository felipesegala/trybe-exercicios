// let names = {
//     person1: 'João',
//     person2: 'Maria',
//     person3: 'Jorge',
//   };

//   for (let index in names){
//     console.log('Olá', names[index]);
//   }

// let car = {
//     model: 'A3 Sedan',
//     manufacturer: 'Audi',
//     year: 2020
//   };

//   for(let index in car){ 
//     console.log(index, car[index]);
//   }

// let customer = {
//     firstName: 'Roberto',
//     age: 22,
//     job: 'Teacher',
//   };
  
//   let newKey = 'lastName';
//   let lastName = 'Ferreira';
  
//   //função que adiciona novas propriedades ao objeto
//   function addProperty(object, key, value) {
//     object[key] = value;
//   };
//   addProperty();

let student = {};

function addProperty(object, key, value){
    object[key] = value;
}

addProperty(student,'nome', 'Felipe Segala');
addProperty(student, `email`, `felipesegala@outlook.com`);
addProperty(student, `phone`, `13 997724922`);
addProperty(student, `github`, `felipesegala`);
addProperty(student, `linkedin`, `felipesegala`);

console.log(student);