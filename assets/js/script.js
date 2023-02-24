const continentBtns = document.querySelectorAll('.continent-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

// Makes questions random
let shuffledQuestions, currentQuestionIndex, questions;



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

    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {

    questionElement.innerText = question.question;
}

function selectAnswer() {

}
