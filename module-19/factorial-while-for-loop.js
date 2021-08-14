// Factorial using a while loop or a decrementing loop

function getFactorial(number) {
    let factorial = 1;
    let i = 1;
    while (i <= number) {
        factorial = factorial * i;
        i++;
    }
    return factorial;
}

const myFactorial = getFactorial(6);
console.log(myFactorial);

Decrementing
function getFactorial(number) {
    let factorial = 1;
    let i = number;
    while (i >= 1) {
        factorial = factorial * i;
        i--;
    }
    return factorial;
}

const myFactorial = getFactorial(8);
console.log(myFactorial);

// for loop decrementing
function getFactorial(number) {
    let factorial = 1;
    for (i = number; i >= 1; i--){
        factorial = factorial * i;
    }
    return factorial;
}

const myFactorial = getFactorial(8);
console.log(myFactorial);