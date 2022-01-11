//tipos de funções

//declarativa
function funcao(){
    console.log('ok')
}

funcao();

//expressões de funções
var funcao1 = function funcao(){
    console.log('expressao de funcao com nome');
}

var funcao2 = function(){
    console.log('expressão de funcao sem nome');
}

funcao1();
funcao2();

//arrow function
var funcao3 = () =>{
    console.log('sou uma arrow function')
}
funcao3();