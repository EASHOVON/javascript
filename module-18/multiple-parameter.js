// Multiple parameter add, multiplication etc

function sumTwoNumbers(number1, number2) {
    var total = number1 + number2;
    return total;
}

var potatoPrice = 40;
var onionPrice = 60;
var sumResult = sumTwoNumbers(potatoPrice, onionPrice);
console.log('Apnar Alu ar Piajer Dam', sumResult, 'taka');



// Difference
function diffFromTwoNumbers(diffNumber1, diffNumber2) {
    var mainDff = diffNumber1 - diffNumber2;
    return mainDff;
}

var myMoney = 3000;
var marketCost = 1450;
var difference = diffFromTwoNumbers(myMoney, marketCost);
console.log('Market korar por bachlo', difference, 'taka.');


// Multiplication

function MultiplicationTwoNumber(mNumber1, mNumber2) {
    var afterMultiplication = mNumber1 * mNumber2;
    return afterMultiplication;
}

var singaraPrice = 10;
var singaraQuantity = 15;
var singaraCost = MultiplicationTwoNumber(singaraPrice, singaraQuantity);
console.log('সিঙ্গারা ১৫টা খাবা টাকা কিন্তু', singaraCost, 'লাগবে।');




// Dividation

function divTwoNumber(dnumber1, dnumber2) {
    var mDividasion = dnumber1 / dnumber2;
    return mDividasion;
}

var pocketMoney = 500;
var chickenPrice = 100;
var chickenWeight = divTwoNumber(pocketMoney, chickenPrice);
console.log('মুরগীর রান খামু আর হাড্ডি চাবামু এইজন্য', chickenWeight, 'কেজি মুরগী কিনছি।');
