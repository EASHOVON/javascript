// Recalculate factorial multiple times using a function

function factorial(number) {
    let fact = 1;
    for (let i = 1; i <= number; i++){
        fact = fact * i;
    }
    return fact;
}

let afterFactorial = factorial(10);
console.log(afterFactorial);