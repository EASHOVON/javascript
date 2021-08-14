// let num = 1;
// while (num <= 100) {
//     console.log(num);
//     num++;
// }


// let number = 51;
// while (number <= 80) {
//     console.log(number);
//     number += 2;
// }

// for(i=50; i<=80; i++){
   
//     if(i % 2 != 0){
//       console.log(i);
//     }
// }

// function sumThreeTime(number1, number2, number3) {
//   total = number1 + number2 + number3;
//   return total;
// }

// var myFirstNumber = 65;
// var mySecondNumber = 98;
// var myThirdNumber = 55;
// var myTotal = sumThreeTime(myFirstNumber, mySecondNumber, myThirdNumber);
// console.log('Your Three Number Total is', myTotal);

// function celsiusToFahrenheit(celsius) {
//   fahrenheit = ((celsius * 9 / 5) + 32);
//   return fahrenheit;
// }

// var myFahrenheit = celsiusToFahrenheit(24);
// console.log(myFahrenheit);

// function fahrenheitToCelsius(fahrenheit) {
//   celsius = ((fahrenheit - 32) * 5 / 9);
//   return celsius;
// }

// var myCelsius = fahrenheitToCelsius(25);
// console.log(myCelsius);

function markToGrade(mark) {
  if (mark >= 80) {
    console.log("A+");
  } else if (mark >= 70) {
    console.log("A-");
  } else {
    console.log("Tumi Fail");
  }
}

var myMark = 80;
var myGrade = markToGrade(myMark);
console.log(myGrade);