// Array with for loop
var numbers = [45, 86, 34, 87, 12, 98, 82, 88, 99];
for (var i = 0; i < 7; i++) {
    var element = numbers[i];
    console.log(element);
}

// যদি এমন হয় তবে Array এর মধ্যে কতগুলো ভ্যালু আছে তা যদি আমার না জানা থাকে তবে এভাবেও করতে পারি।
var numbers = [45, 86, 34, 87, 12, 98, 82, 88, 99];
for (var i = 0; i < numbers.length; i++) {
    var element = numbers[i];
    console.log(element);
}

// এক্ষেত্রে যতক্ষন না Array এর মধ্যে যত নাম্বার আছে তা না দেখাবে ততক্ষন চলতে থাকবে ফর লুপের খেলা।