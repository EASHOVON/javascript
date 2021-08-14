// Sum of all numbers in an array


// let sum = 0;
// for (let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     sum = sum + element;
// }

// console.log(sum);

function arrayTotal(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        sum += element;
    }
    return sum;
}

const number = [44, 23, 34, 32, 54, 62, 78];
const sumOfArray = arrayTotal(number);
console.log(sumOfArray);