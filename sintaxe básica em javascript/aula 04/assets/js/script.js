var jogador1 = 0;
var jogador2 = 0;
var placar;

//if
if (jogador1>0 ){
    console.log('jogador 1 marcou ponto!');
    placar = jogador1>jogador2
} else if (jogador2>0) {
    console.log('jogador 2 marcou ponto!');
    placar = jogador2>jogador1 
} else {
    console.log('ninguém marcou ponto');
}

//switch case
switch (placar){
    case placar = jogador1 > jogador2:
        console.log('jogador1 ganhou!');
        break

    case placar = jogador2 > jogador1:
        console.log('jogador 2 ganhou');
        break

    default:
        console.log('ninguem ganhou');
        break
}

let array = [1,2,3,4,5];
let object = {p1:'feio', p2:2, p3:3};

//for
for (let indice = 0; indice < array.length; indice++){
    console.log(indice);
}

//for/in
for(let i in array) {
    console.log(i);
}

for(i in object){
    console.log(i);
}

//for/of
for(i of array){
    console.log(i)
}

for(i of object.p1){
    console.log(i)
}

//while
var a = 0;

while (a<10) {
    a++;
    console.log(a);
}

a=0
//do while
do {
    a++;
    console.log(a)
} while (a<10)