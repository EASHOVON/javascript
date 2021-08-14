// Swap variable, swap without temp destructing

var first = 5;
var second = 7;
console.log(first, second);

// var temp = first;
// first = second;
// second = temp;
// console.log(first, second);

[first, second] = [second, first];
console.log(first, second);