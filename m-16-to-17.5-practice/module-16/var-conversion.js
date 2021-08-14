// Integer, Float, ParseInt, ParseFloat Type Conversion
// আমরা যেভাবে দুইটা নিউমেরিক ভেরিয়েবলকে যোগ করি সেভাবে কিন্তু আমরা দুইটা স্ট্রিং ভেরিয়েবলকেও যোগ করতে পারি।
var firstName = "Jennie";
var lastName = "Kim";
// var fullName = firstName + lastName;
var fullName = firstName + ' ' + lastName;
console.log(fullName);


var first = "Ariana";
var last = "Grande";
var name = first + ' ' + last;
// console.log(name);

var onionPrice = "42";
var eggPrice = "41";
// সংখ্যা যোগ আর স্ট্রীং এর  যোগ এর মধ্যে কিন্তু পার্থক্য আছে। সংখ্যা সংখ্যা যোগ করলে দুটো সংখ্যা মিলে একটা নতুন সংখ্যা হয়। ‍কিন্তু স্ট্রীং আর স্ট্রীং যোগ করলে সেটা দুটো স্ট্রীং কে পাশাপাশি বসিয়ে দেয়।
var totalPrice = onionPrice + eggPrice;
console.log(totalPrice);

// কোনো ভেরিয়েবল এর মান যদি পূর্ন সংখ্যা হয় তখন সেই সংখ্যাকে বলা হয় Integer
var sunglass = 3;

// কোনো ভেরিয়েবল এর মান যদি পূর্ণ সংখ্যা না হয়ে ভগ্নাংশ দেই তবে সেই ভগ্নাংশ সংখ্যাকে বলা হয় Float
var price = 99.99;

// আমরা String কে যদি নাম্বার এ কনভার্ট করতে চাই তাহলে এভাবে করবো
// এখানে onionPrice, eggPrice এর ভ্যালু String হিসেবে আছে এটাকে এখন আমরা Numeric এ কনভার্ট করেবো।
var onionPriceNumber = parseInt(onionPrice);
var eggPriceNumber = parseFloat(eggPrice);
console.log(onionPriceNumber);
console.log(eggPriceNumber);
// যদি দশমিক ওয়ালা কোনো সংখ্যা স্ট্রিং হিসেবে থাকে তাহলে তাকে যদি আমরা parseInt করি সেক্ষেত্রে স্ট্রিং টা নাম্বারে কনভার্ট হবে আর দশমিক এবং দশমিক এর পরের সংখ্যাটুকু ফেলে দিয়ে শুধু সংখ্যাটা রাখবে। আর যদি দশমিক ওয়ালা স্ট্রিং কে দশমিক অবস্থাতেই সংখ্যায় কনভার্ট করতে চাই তাহলে আমরা parseFloat ব্যবহার করবো এতে করে দশমিক সংখ্যার স্ট্রিং দশমিক সংখ্যায় পরিবর্তন হবে।

