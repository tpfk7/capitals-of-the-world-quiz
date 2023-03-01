/* jshint esversion: 11 */
const continentBtns = document.querySelectorAll('.continent-btn');
const nextButton = document.getElementById('next-btn')
const restartButton = document.getElementById('restart-btn')
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const mainTitle = document.getElementById('main-title')
let score = 0;


let shuffledQuestions, currentQuestionIndex, questions;

nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

/*Selects the questions by continent*/
continentBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        // let continent = btn.dataset.continent;
        let continent = btn.id;
        if (continent == 'europe') {
            questions = europeQuestions;
        } else if (continent == 'asia') {
            questions = asiaQuestions;
        } else if (continent == 'africa'){
            questions = africaQuestions;
        } else if (continent == 'n-america'){
            questions = namericaQuestions;
        } else if (continent == 's-america'){
            questions = samericaQuestions;
        } else if (continent == 'oceania'){
            questions = oceania;
        }
        startGame();
    });
});



function startGame() {
    console.log('Started');
    continentBtns.forEach(btn => {
        btn.classList.add('hide');
    });

    /* Makes questions random */

    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();

}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex]);
    

}

function showQuestion(question) {

    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button =document.createElement('button')
        button.innerText = answer.text 
        button.classList.add('btn')
        if (answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState(){
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild){
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}


function selectAnswer(e) {

    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    
    
    
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex +1){
    nextButton.classList.remove('hide')
    } else{
        restartButton.innerText = 'Restart'
        restartButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct){
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
        score++;
        document.getElementById('score-counter').innerHTML = "Score: " + score;

    }else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

function scoreCounter(){
    document.getElementById('score-counter').innerHTML ="Score: " + score;

}


scoreCounter();