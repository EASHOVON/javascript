const blueButton = document.getElementById('make-blue-button');
        blueButton.onclick = makeBlue;


        function makeRed(){
            document.body.style.backgroundColor = 'red';
        }


        function makeBlue(){
            document.body.style.backgroundColor = 'blue';
}
        

// Anonymous function
const greenButton = document.getElementById('make-green-button');
        greenButton.onclick = function (){
            document.body.style.backgroundColor = 'green';
}
        
// Handle by using add eventlistener
const goldenButton = document.getElementById('make-goldenrod');
        goldenButton.addEventListener('click',makeGoldenRod);
        function makeGoldenRod(){
            document.body.style.backgroundColor = 'goldenrod';
}

// something
