// Check whether a year is a leap year or not.

// কোনো সালের সংখ্যাকে ৪ দ্বারা ভাগ করলে যদি ভাগশেষ না থাকে অর্থাৎ ০ হয় তাহলে ওই সাল লিপ ইয়ার হবে।

function isLeapYear(year) {
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
        return true;
    }
    return false;
}

const yourYear = 2025;
const isYourYearLeapYear = isLeapYear(yourYear);
console.log('This Year is Leap Year', isYourYearLeapYear);

