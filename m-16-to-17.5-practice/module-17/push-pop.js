// Add or remove element from Array using push, pop

// কোনো একটা Array এর মধ্যে যদি নতুন একটা এলিমেন্ট যোগ করতে চাই তবে
var lastBench = ["kalam", "balam", "salam"];
// নতুন একটা যদি এড করতে চাই 
// lastBench.push('jalam');
// এখন কনসোল লগ করলে
// console.log(lastBench);
// jalam এই ইলিমেন্ট টা যোগ হয়ে গেছে

// আবার ঠিক একই ভাবে কোনো Array এর মধ্যে থেকে যদি কোনো ভ্যালুকে বাহির করতে চাই তাহলে
// lastBench.pop();
// console.log(lastBench);
// এভাবে করলে Array এর মধ্যে থেকে শেষের দিকের একটা ভ্যালু মুছে যাবে।

// আমরা চাইলে যে মানটাকে রিমুভ করা হয়েছে সে মানটাকেও ব্যবহার করতে পারবো কোনো একটা ভ্যারিয়েবল এর মধ্যে এড করে
// var removeLast = lastBench.pop();
// console.log(removeLast); // এটা করলে যা উপরে Array এর মধ্যে থেকে বাদ দেওয়া হয়েছিলো তা এখানে দেখাবে।

// Array এর মধ্যে থেকে প্রথম দিকের এলিমেন্টকে বাদ দিতে হলে আমরা ব্যবহার করবো
// lastBench.shift();
// console.log(lastBench);

// Array এর মধ্যে থেকে প্রথম দিকে কোনো এলিমেন্টকে যোগ করতে হলে
lastBench.unshift('notun');
console.log(lastBench);
