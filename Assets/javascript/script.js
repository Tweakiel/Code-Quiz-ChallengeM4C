/*


GIVEN I am taking a code quiz
WHEN I click the start button ✔️


THEN a timer starts and I am presented with a question
WHEN I answer a question


THEN I am presented with another question
WHEN I answer a question incorrectly


THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0


THEN the game is over
WHEN the game is over
THEN I can save my initials and my score



*/


//grab element for timer element variable

var timerElement= document.querySelector("#timer");
var startButton= document.querySelector('.startGame');
var question=document.querySelector('.question');

//function for time

//making a function for the game to start
// so that this function reacts to the button and this functions will serve 
// as a bridge for the other functions to run such as hiding the headers and display other buttons

function startQuiz(){

timeLimit(10);
quet
}

function timeLimit(secsLeft){

    let timerInterval= setInterval(function() {

        secsLeft--;
        timerElement.textContent=secsLeft+ " seconds left.";

        if (secsLeft===0){

            clearInterval(timerInterval);
            //gameOverScreen();
        }

    }, 1000)
}

function question(){



}

startButton.addEventListener("click", startQuiz);

//console.log(startButton);
