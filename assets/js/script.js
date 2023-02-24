const startButton = document.getElementById('start-btn');
const questionContainerElement =document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

// Makes questions random
let shuffledQuestions, currentQuestionsIndex;

startButton.addEventListener('click', startGame);

function startGame() {
    console.log('Started');
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionsIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
}

function selectAnswer() {

}

const questions =[
    {
        question: 'What is the capital of Ireland?',
        answers:[
            {text: 'Dublin', correct: true},
            {text: 'Belfast', correct: false}
        ]
    },
]