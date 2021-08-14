// Unit Convert Inch to Feet, Miles to Kilometer.

function inchToFeet(inch) {
    var feet = inch / 12;
    return feet;
}


var myinch = inchToFeet(33);
console.log(myinch);

var fatherInch = inchToFeet(100);
console.log(fatherInch);


function milesToKm(miles) {
    var km = miles * 1.60934;
    return km;
}

var mymiles = milesToKm(20);
console.log(mymiles);