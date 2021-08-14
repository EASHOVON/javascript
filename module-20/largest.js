// Find the largest element of an array.

function largestElement(numbers) {
    let largest = 0;
    for (let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        if (element > numbers) {
            largest = element;
        }
    }
    return largest;
}