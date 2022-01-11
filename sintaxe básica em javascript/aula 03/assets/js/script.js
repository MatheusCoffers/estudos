//declaração array

let array = ['matheus', 5, false, ['array1'], ['array2'], ['array3'], ['array4']];
console.log(array);

//foreach
array.forEach(function(item,index){console.log(item,index)});

//push
array.push('novo item');
console.log(array);

//pop
array.pop();
console.log(array);

//shift
array.shift();
console.log(array);

//unshift
array.unshift('coffers');
console.log(array);

//indexOf
console.log(array.indexOf(false));

//splice
array.splice(0,2);
console.log(array);

//slice
let novoArray = array.slice(0,2);
console.log(array);
console.log(novoArray);

//objeto
let object = {string:'string', number:1, boolean:false, arrayInterno:['array'], objectIntern:{number:1,name:'luquetas balaquetas'}};

console.log(object.objectIntern);

var string = object.string;
var arrayInterno = object.array;

var {string,boolean,objectIntern} = object;

