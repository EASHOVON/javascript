// Different variable types and use toFixed with parseFloat

// কোনো ভেরিয়েবল এর টাইপ কি তা জানতে -->
console.log(typeof variableName);
// কোনো ভেরিয়েবল এর ক্যালকুলেশন এর মান যখন দশমিক এর অনেকগুলো সংখ্যা ওয়ালা 
// হয় তাহলে দশমিকের পরে কয় সংখ্যা দেখাবো তা আমরা ঠিক করে দিতে পারি। কিভাবে ?
var firstNumber = 0.1;
var secondNumber = 0.2;
var total = firstNumber + secondNumber;
console.log(total);
// তো এটার আনসার আসলো 0.30000000000000004 এখন এই যে দশমিক এর পরে 
// এতো গুলো সংখ্যা আমরা চাইলে ঠিক করে দিতে পারি যে দশমিক এর পরে কয় সংখ্যা দেখাবে।
console.log(total.toFixed(1));
// এখন এটা করার পরে আমরা আনসার পেলাম কি- 0.3 কিন্তু সমস্যা হচ্ছে এই 0.3 সংখ্যাটা আমরা কিন্তু স্ট্রিং হিসেবে পেলাম এটাকে আবার নাম্বারে কনভার্ট করে নিতে হবে।
console.log(parseFloat(total.toFixed(1)));
// এবার কিন্তু এটা স্ট্রিং থেকে নাম্বার এর কনভার্ট হয়ে গেলো। দেখতে কঠিন মনে হলে চলুন আমরা একটু ভেঙ্গে করি।
total = total.toFixed(1);
total = parseFloat(total);
console.log(total);
// এভাবেও কিন্তু আমরা করতে পারি।