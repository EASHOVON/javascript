// Calculate Factorial in a Recursive function

function factorial(n) {
    if (n == 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

const myFactorial = factorial(5);
console.log(myFactorial)

// আমরা n এর মান যখন ৫ দিলাম তখন
// 5 * factorial (4);
// 4 * factorial (3);
// 3 * factorial (2);
// 2 * 1;


// আবার উপর দিকে যাবে

