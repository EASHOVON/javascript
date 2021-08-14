// Number-1 Practice
// var myName = 'Shovon'; // string
// var myAge = 24; // Numeric
// var passExam = false; // Boolean

//  Number-2 Practice

// let studentNumber = 250; // let দিয়ে ভ্যারিয়েবল আমরা তখনই লিখবো যখন সেই ভ্যারিয়েবল এর মান পরবর্তিতে আমরা পরিবর্তন করবো বা করতে চাইবো।
// const permanentAddress = 'Vhuter Golir Chipa'; // const দিয়ে আমরা ভ্যারিয়েবল তখনই লিখবো যখন সেই ভ্যারিয়েবল এর মান পরবর্তিতে আমরা পরিবর্তন করবো না।

// Number-3 Practice
// const myBudget = 80000;
// const mobilePrice = 24000;
// const laptopPrice = 36000;
// const computerTable = 10000;
// const computerTableQuantity = 2;
// const computerTableTotalPrice = computerTable * computerTableQuantity;
// const shoppingCost = mobilePrice + laptopPrice + computerTableTotalPrice;
// const differnceLaptopAndMobilePrice = laptopPrice - mobilePrice;
// const allTableWithMyBudget = myBudget / computerTable;
// const remainMyBudget = myBudget % shoppingCost;
// console.log('Your All Shopping Cost is', shoppingCost, 'taka.');
// console.log('Your Laptop and Mobile Price Difference is', differnceLaptopAndMobilePrice, 'taka.');
// console.log('Your Two Computer Table Total Price is', computerTableTotalPrice, 'taka.');
// console.log('You can buy', allTableWithMyBudget, 'pice of Table with your budget.');
// console.log('Your remaining Money after shopping is', remainMyBudget);


// Namber-4 Practice
// let myAge = 18;
// if (myAge < 18) {
//     console.log("Sorry You can't drive car.");
// } else {
//     console.log("Yes You can drive the car");
// }

// let myBudget = 180;
// let chickenPrice = 120;
// if (myBudget > chickenPrice) {
//     console.log("Murgir Ran Khamu Ar Haddi Chabamu.");
// } else {
//     console.log("Dal Ar Alu Vortai best");
// }

// let number = 25;
// if (number % 2 == 0) {
//     console.log("Your Number is Even.")
// } else {
//     console.log("Your Number is Odd.")
// }

// let rain = false;
// if (rain != true) {
//     console.log("Cholo Bahire Jai")
// } else {
//     console.log("Na Vai baire Jamu na.")
// }

// let marks = 80;
// if (marks <= 79) {
//     console.log("Your Grade is A")
// } else {
//     console.log("Your Grade is A+")
// }

// let marks = 75;
// if (marks >= 80) {
//     console.log("Your Grade is A+");
// } else {
//     console.log("Your Grade is A");
// }



// Practice-5
// let gotJob = false;
// let home = true;

// // if (gotJob == true && home == true) {
// //     console.log("Cholo Biye Kore Feli")
// // } else {
// //     console.log("Tor Kopale Biya nai.")
// // }

// if (gotJob == true || home == true) {
//     console.log("Cholo Biye kore Feli")
// } else {
//     console.log("Tor kopale Biye nai")
// }



// Practice-6
// const burgerPrice = 400;
// const pizzaPrice = 1500;
// const chickenFry = 800;
// const myBudget = 2000;

// if (myBudget > burgerPrice) {
//     console.log("Burger Khabo Sos diye");
// } else if (myBudget > pizzaPrice) {
//     console.log("Pizza Khabo Moja kore");
// } else if (myBudget > chickenFry) {
//     console.log("Murgi vaja khamu ar haddi chabamu");
// } else {
//     console.log("Piyaju Nia ay vai ogulai best");
// }

// Practice-7
// let i = 7;
// while (i <= 19) {
//     console.log(i);
//     i += 2;
// };

// Practice-8
// let arr = [30, 49, 50, 78, 20, 80, 60, 36];
// let arrayLength = arr.length;
// console.log(arrayLength);
// arr[4] = 200;
// console.log(arr);
// arr.push(1000, 2000);
// console.log(arr);
// arr.pop();
// console.log(arr);

// Practice-9
// let arr = ["Shovon", "Shourav", "Sumon", "Shantonu", "Shima", "Shila"];
// for (i = 0; i < arr.length; i++){
//     let showArray = arr[i];
//     console.log(showArray);
// }

// Practice-10
// let rolls = [40, 50, 70, 85, 90, 95, 45, 55];

// for (i = 0; i < rolls.length; i++){
//     if (rolls[i] > 80) {
//         console.log(rolls[i]);
//     }
// }

// Practice-11
// function multiplyThreeNumber(num1, num2, num3) {
//     let totalMultiply = num1 * num2 * num3;
//     return totalMultiply;
// }

// let calculateMultiply = multiplyThreeNumber(4, 5, 8);
// console.log(calculateMultiply);

// Practice-12
let student = {
    name: "shovon",
    age: 25,
    job: "Computer Operator"
};

student.job = "Web Developer";
console.log(student);

