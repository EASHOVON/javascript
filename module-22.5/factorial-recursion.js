function factorial(i) {
    if (i == 1) {
        return 1;
    }
    return i * factorial(i - 1);
     /* 
    আই এর মান এখন ৬ আসলে i * factorial(i-1)--> 6 * factorial(6-1) --> 6 * factorial(5)
    আই এর মান এখন ৫ আসলে i * factorial(i-1)--> 5 * factorial(5-1) --> 6 * 5 * factorial(4)
    আই এর মান এখন ৪ আসলে i * factorial(i-1)--> 4 * factorial(4-1) --> 6 * 5 * 4 * factorial(3)
    আই এর মান এখন ৩ আসলে i * factorial(i-1)--> 3 * factorial(3-1) --> 6 * 5 * 4 * 3 * factorial(2)
    আই এর মান এখন ২ আসলে i * factorial(i-1)--> 2 * factorial(2-1) --> 6 * 5 * 4 * 3 * 2 * factorial(1)
    আই এর মান এখন ১ আসার কারণে উপরের শর্তের সাথে মিলে যায় তাই শর্তঅনুযায়ি factorial(1) এর মান ১ রিটার্ন করবে। এখন হিসাব দাড়ালো 6*5*4*3*2*1=720 আর এটাই পাবো আমরা এই ফাংশন থেকে
    */
}

console.log(factorial(6));