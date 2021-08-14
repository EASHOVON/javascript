// Problem-1
// function feetToInch(feet) {
//     let inch = feet * 12;
//     return inch;
// }

// let myFeet = feetToInch(20);
// console.log('Your feet conversion is', myFeet, 'inch');

// Problem-2

// function centimeterToMeter(centimeter) {
//     let meter = centimeter / 100;
//     return meter;
// }
// let myCentimeter = centimeterToMeter(100);
// console.log('Your centimeter conversion is', myCentimeter, 'meter');

// Problem-3

// function paperRequirments(bookOneCopy, bookTwoCopy, bookThreeCopy) {
//     let bookOnePaperRequirment = bookOneCopy * 100;
//     let bookTwoPaperRequirment = bookTwoCopy * 200;
//     let bookThreePaperRequirment = bookThreeCopy * 300;
//     let totalBooksPaperRequirment = bookOnePaperRequirment + bookTwoPaperRequirment + bookThreePaperRequirment;
//     return totalBooksPaperRequirment;
// }


// let myAllBookCopyPaperRequirment = paperRequirments(5, 3, 7);
// console.log(myAllBookCopyPaperRequirment);



// Problem-4
// function bestFriend(array) {
//     let biggerNameLength = array[0].length;
//     let biggerName = "";
//     for (var i = 1; i < array.length; i++){
//         const arrayValue = array[i].length;
//         if (biggerNameLength < arrayValue) {
//             biggerNameLength = array[i].length;
//             biggerName = array[i];
//         }
//     }

//     return biggerName;
// }

// const friendList = ["shovon", "shourav", "ashrafuzzaman", "shohel rana", "rokunuzzaman shourav"];
// let finalBiggerName = bestFriend(friendList);
// console.log(finalBiggerName);




// Problem-5

const englishMarks = [70, 40, 50, 60, -30, 40];
const evenMarks = [];
for (const element of englishMarks) {
    if (element > 0) {
        evenMarks.push(element);
    } else {
        break;
    }
}

console.log(evenMarks);