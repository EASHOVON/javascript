// Check even and odd numbers using function

// কোনো সংখ্যা জোড় না বিজোড় তা জানার জন্য আমরা সেই সংখ্যাকে % করবো ২ দিয়ে।

// কোনো সংখ্যাকে যাদি ২ দিয়ে ভাগ করার পর ভাগশেষ শূণ্য হয় তবে সেই সংখ্যা হবে জোড়।

// কোনো সংখ্যাকে যদি ২ দিয়ে ভাগ করার পর ভাগশেষ অবশিষ্ঠ থাকে তবে সেই সংখ্যাটি বিজোড় হবে।


// function isEven(number) {
//     if (number % 2 == 0) {
//         return true;
//     }
//     return false;
// }

// const myNumber = 1640;
// const isMyNumberEven = isEven(myNumber);
// console.log('My Number is Even', isMyNumberEven);

function isOdd(number) {
    if (number % 2 == 1) {
        return true;
    }
    return false;
}

const myNumber = 8170;
const isMyNumberOdd = isOdd(myNumber);
console.log('My Number is Odd', isMyNumberOdd);
