/* jshint esversion: 11 */
const continentBtns = document.querySelectorAll('.continent-btn');
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

// Makes questions random
let shuffledQuestions, currentQuestionIndex, questions;

nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

continentBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        // let continent = btn.dataset.continent;
        let continent = btn.id;
        if (continent == 'europe') {
            questions = europeQuestions;
        } else if (continent == 'asia') {
            questions = asiaQuestions;
        }
        startGame();
    });
});



function startGame() {
    console.log('Started');
    continentBtns.forEach(btn => {
        btn.classList.add('hide');
    });

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
    nextButton.classList.remove('hide')
}

function setStatusClass(element, correct){
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    }else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}
