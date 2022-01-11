var currentNumberWraper = document.getElementById('currentNumber');
var currentNumber = 0;

function colorChange() {
    if(currentNumber<0){
        document.getElementById("currentNumber").style.color = 'red';
    }
    else{
        document.getElementById("currentNumber").style.color = "black";
    }

}

function increment() {
    if(currentNumber<10) {
        currentNumber += 1;
        currentNumberWraper.innerHTML = currentNumber;
    }
}

function decrement() {
    if(currentNumber>-10) {
        currentNumber -= 1;
        currentNumberWraper.innerHTML = currentNumber;
    }
}

document.getElementById('increment').addEventListener("click",increment);
document.getElementById('decrement').addEventListener("click",decrement);
document.getElementById('increment').addEventListener("click",colorChange);
document.getElementById('decrement').addEventListener("click",colorChange);

