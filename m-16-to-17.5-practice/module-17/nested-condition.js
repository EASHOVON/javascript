// Multi Stage condition and nested conditions

var danishPrice = 50;
var butterBread = 25;
var toastBiskuit = 10;
var myBudget = 100;

if (danishPrice < myBudget) {
    console.log('Danish Kheye Danish Jabo');
} else if (butterBread < myBudget) {
    console.log('Butter Bon Diye Cha Khamu');
} else if (toastBiskuit < myBudget) {
    console.log('Toast Diye Cha Khamu');
} else {
    console.log('Batas Diye Cha Khamu');
}