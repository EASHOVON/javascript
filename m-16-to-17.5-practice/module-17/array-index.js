// Array index, get and set by index indexOf.

// Array এর মধ্যে কোনো এলিমেন্টের Index বা পজিশন দেখতে বা জানতে
var numbers = [45, 98, 65, 72, 52, 63]; // এখান থেকে যেকোনো সংখ্যা কত নাম্বার পজিশনে আছে তা বের করতে পারবো আমরা।
// var index = numbers.indexOf(52);
var index = numbers.indexOf(45);
console.log(index); // করলে আমরা দেখতে পারবো ৪৫ এর পজিশন ০ কারণ Array এর Index শুরু হয় ০ থেকে বুঝলেন।

// আর যদি কোনো Array এর মধ্যে কোনো ভ্যালু এড করা নেই এমন কোনো ভ্যালুর পজিশন বা Index জানতে চাওয়া হয় তবে তার পজিশন বা Index দেখাবে -1
var index = numbers.indexOf(100);
console.log(index); // এবার এটা করলে এটার Index দেখাবে -1 কারণ Array এর মধ্যে ওটার কোনো অস্তিত্ব নেই তাই এমন দেখাচ্ছে।

// আবার যদি কোনো Array এর কোনো পজিশন কে ধরে সেই পজিশনে কি আছে সেটাও দেখতে পারবো।

// var secondIndex = numbers[2];
// console.log(secondIndex);
console.log(numbers[2]);
// এতে করে আমরা কোনো একটা Array এর মধ্যে ২ নাম্বার পজিশনে কি আছে তা দেখতে পারবো।

// Array এর মধ্যে পূর্বে ডিক্লার করা কোনো মানের পজিশন বা Index কে ধরে ওই পজিশন এ যা আছে তা পরিবর্তন করতে হলে আমরা এভাবে করতে পারি।

numbers[2] = 800; // তাহলে numbers Array এর মধ্যে ইনডেক্স 1 এ যা আছে তা পরিবর্তন হয়ে ৯৫ হয়ে যাবে।
console.log(numbers);