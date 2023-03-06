/* jshint esversion: 11 */
const continentBtns = document.querySelectorAll('.continent-btn');
const nextButton = document.getElementById('next-btn');
const restartButton = document.getElementById('restart-btn');
const questionContainerElement = document.getElementById('question-container');
const country = document.getElementById('country');
const answerButtonsElement = document.getElementById('answer-buttons');
const mainTitle = document.getElementById('main-title');
let time = 1000;
const countdownEl = document.getElementById('countdown-timer');
let score = 0;
let timerInterval;
const scoreContainer = document.getElementById("score-container");


let shuffledQuestions, currentQuestionIndex, questions;

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});

/*Selects the questions by continent*/
continentBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        let continent = btn.id;
        if (continent == 'europe') {
            questions = europeQuestions;
        } else if (continent == 'asia') {
            questions = asiaQuestions;
        } else if (continent == 'africa') {
            questions = africaQuestions;
        } else if (continent == 'n-america') {
            questions = namericaQuestions;
        } else if (continent == 's-america') {
            questions = samericaQuestions;
        } else if (continent == 'oceania') {
            questions = oceania;
        }
        startGame();

    });
});

/* Once continent is chosen hide continent buttons*/

function startGame() {
    continentBtns.forEach(btn => {
        btn.classList.add('hide');
    });
    updateCountdown();


    /* Makes questions random */

    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    scoreContainer.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);

}


function showQuestion(question) {
    country.innerText = question.country;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        } else {
            button.dataset.correct = false;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}


function selectAnswer(e) {

    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    if (correct == "true") {
        score++;
        document.getElementById('score-counter').innerText = `${score} / ${shuffledQuestions.length}`;

    }

    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });

    if (shuffledQuestions.length == currentQuestionIndex + 1) {
        timer = 0;
        timeOver();

    } else {
        nextButton.classList.remove('hide');
    } 
}

function setStatusClass(element, correct) {
    clearStatusClass(element);

    if (correct == 'true') {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}


/* Countdown timer for quiz */
function updateCountdown() {
    timerInterval = setInterval(() => {
        countdownEl.innerHTML = time < 60 ?  + time : time;
        if (time <= 0) {
            timeOver();
        } else {
            time--;
        }
    }, 1000);
}
function timeOver(){
    clearInterval(timerInterval);
    questionContainerElement.classList.add('hide');
    nextButton.classList.add('hide');
    restartButton.classList.remove('hide');
}

// // Change page to gameover
// // The following stackoverflow was used
// //  https://stackoverflow.com/questions/52627142/how-can-i-automatically-change-a-page-in-javascript

// function changePage(){
//     window.open(index.html);
// }