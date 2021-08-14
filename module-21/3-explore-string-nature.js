// Explore string nature and reserve a string
const greetings = 'Hello, how are you?';
function reverseString(text) {
    let reverse = ''
    for (const letter of text) {
        reverse = letter + reverse;
    }
    return reverse;
}

const reversed = reverseString(greetings);
console.log(reversed);