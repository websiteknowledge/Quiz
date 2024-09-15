const questions = [
    {
        question: "What is the most unhealthy energy drink in the world?",
        answers: [
            { text: "Red Bull", correct: false},
            { text: "Prime", correct: true},
            { text: "Powerade", correct: false},
            { text: "Monster", correct: false},
        ]
    },
    {
        question: "What is the most expensive piece of art at a museum?",
        answers: [
            { text: "The Card Players", correct: false},
            { text: "Salvator Mundi", correct: false},
            { text: "Interchange painting", correct: false},
            { text: "Mona Lisa", correct: true},
        ]
    },
    {
        question: "What is the worlds population in 2024?",
        answers: [
            { text: "1.4 Million", correct: false},
            { text: "2.7 Billion", correct: false},
            { text: "8.2 Billion", correct: true},
            { text: "6.5 Billion", correct: false},
        ]
    },
    {
        question: "What is the capital of switzerland?",
        answers: [
            { text: "Lucerne", correct: false},
            { text: "Zermatt", correct: false},
            { text: "Geneva", correct: false},
            { text: "Bern", correct: true},
        ]
    },
    {
        question: "What's the biggest country in the world?",
        answers: [
            { text: "New Zeland", correct: false},
            { text: "Russia", correct: true},
            { text: "U.S.A", correct: false},
            { text: "Canada", correct: false},
        ]
    },
    {
        question: "What is the biggest contenent in the world?",
        answers: [
            { text: "Asia", correct: true},
            { text: "Europe", correct: false},
            { text: "Africa", correct: false},
            { text: "North America", correct: false},
        ]
    },
    {
        question: "who is the fastest athlete of all time?",
        answers: [
            { text: "Usain Bolt", correct: true},
            { text: "Caeleb Dressel", correct: false},
            { text: "Noah Lyles", correct: false},
            { text: "LeBron James", correct: false},
        ]
    },
    {
        question: "What is the largest ocean in the world?",
        answers: [
            { text: "Indian Ocean", correct: false},
            { text: "The Pacific Ocean", correct: true},
            { text: "Atlantic Ocean", correct: false},
            { text: "Arctic Ocean", correct: false},
        ]
    },
    {
        question: "What is the coldest country in the world?",
        answers: [
            { text: "Greenland", correct: false},
            { text: "Russia", correct: false},
            { text: "Antarctica", correct: true},
            { text: "U.S.A", correct: false},
        ]
    },
    {
        question: "What is the hottest country in the world?",
        answers: [
            { text: "Ghana", correct: false},
            { text: "India", correct: false},
            { text: "South Africa", correct: false},
            { text: "Mali", correct: true},
        ]
    },
    {
        question: "Did you like this quiz?",
        answers: [
            { text: "It's very good", correct: true},
            { text: "It's good", correct: true},
            { text: "It's ok", correct: true},
            { text: "It's bad", correct: true},
            { text: "It's terrible", correct: true},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = "true"
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.
        length}!`;
        nextButton.innerHTML = "Play again";
        nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }

});

startQuiz();