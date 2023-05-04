let a = 60;
let b = 60;
let c = 60;

let sum = a + b + c;

let anglesPositive = a > 0 && b > 0 && c > 0;

if(anglesPositive){
    if(sum === 180){
        console.log("true");
} else {
    console.log("false");
};
} else {
    console.log('Erro: angulo inválido!');
}
