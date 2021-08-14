// Multiple ways to get and set property
var computer = {
    price: 29000,
    storage: '156gb',
    color: 'silver',
    processor: 'intel i5'
}

// যদি অবজেক্ট এর মধ্যে কোনো প্রোপার্টির ভ্যালু দেখতে চাই তাহলে
console.log(computer.processor); // এভাবে দিলে computer অবজেক্ট এর মধ্যে processor প্রোপার্টিতে কি আছে তা জানতে পারবো।

// আমরা চাইলে অবজেক্ট এর ভিতর কোনো প্রোপার্টির মধ্যে যা আছে তা একটা ভ্যারিয়েবল এর মধ্যেও রাখতে পারি এভাবে

computerPrice = computer.price;
console.log(computerPrice);

// এখন এটা করলে computer object এর ভেতর price property এর মধ্যে যে ভ্যালূ আছে তা এই নতুন ভ্যারিয়েবল এর মধ্যে চলে এলো।

// Object এর Property ভ্যালু আমরা চাইলে সেট ও করতে পারি
computer.price = 22000; // এখন যদি console.log(computer) করি তাহলে দেখবো আগে compute object এর মধ্যে price ভ্যালুতে যা ছিলো তা পরিবর্তন হয়ে 22000 হয়ে গেছে।


// Object এর property Set করার ৩টি উপায় রয়েছে
// একটা উপায় হচ্ছে

computer.price = 22000;

// আর একটা উপায় হচ্ছে

computer['price'] = 23000;

// এভাবে
// আর একটা উপায় হচ্ছে

var priceProperty = "price";
computer[priceProperty] = 19000;
console.log(computer);