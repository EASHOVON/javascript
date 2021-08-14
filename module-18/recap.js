var favouriteBook = "4 hour work week";

// Array
var bookList = ["positioning", "hooked", "start with my", "shoe dog"];
var shoeDogIndex = bookList.indexOf("shoe dog");
bookList[1] = "Story Brand";
bookList.push("Small Giants");
bookList.pop();

// conditionals
if (bookList[1] == "hooked") {
    console.log("I am hooked");
}
else {
    console.log("I am not hooked");
}

// 4. While loop
var i = 0; // loop variable
while (i < 15) {
    console.log(i);
    console.log("looping looping looping");
    i++;
}


// For loop

for (var i = 0; i < 15; i++){
    console.log(i);
}