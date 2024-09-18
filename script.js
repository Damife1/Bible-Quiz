const questions = [
    {
        question: "Who asked for the head of John the baptist be cut off?",
        answers: [
            {text: "Herod", correct: false},
            {text: "herod's daughter", correct: false},
            {text: "Herodias", correct: true},
            {text: "Salome", correct: false},
        ]
    },

    {
        question: "who was the first judge in Israel?",
        answers: [
            {text: "Moses", correct: false},
            {text: "Gideon", correct: false},
            {text: "Samuel", correct: false},
            {text: "Othniel", correct: true},
        ]
    },

    {
        question: "Which king of Israel reigned for only seven years?",
        answers: [
            {text: "zimri", correct: true},
            {text: "Jehoash", correct: false},
            {text: "Omri", correct: false},
            {text: "Ahab", correct: false},
        ]
    },

    {
        question: "Which of these is the work of the Holy Spirit?",
        answers: [
            {text: "Helper", correct: false},
            {text: "Intercessor", correct: false},
            {text: "Comforter", correct: false},
            {text: "All", correct: true},
        ]    
    },

    {
        question: "Who appeared on the mount of transfiguration alongside Jesus?",
        answers: [
            {text: "Elijah", correct: true},
            {text: "Elisha", correct: false},
            {text: "Peter", correct: false},
            {text: "John the Baptist", correct: false},
        ]    
    },

    {
        question: "Which of these words did Jesus spoke on the cross?",
        answers: [
            {text: "My God, my God!", correct: false},
            {text: "It's finished", correct: true},
            {text: "Eloi Eloi", correct: false},
            {text: "I forgive you", correct: false},
        ]    

    },

    {
        question: "How many seals were opened in the book of Revelation?",
        answers: [
            {text: "4", correct: false},
            {text: "3", correct: false},
            {text: "9", correct: false},
            {text: "7", correct: true},
        ]    
    },

    {
        question: "What is the original language of the Old Testament?",
        answers: [
            {text: "Greek", correct: false},
            {text: "Aramaic", correct: false},
            {text: "Hebrew", correct: true},
            {text: "Latin", correct: false},
        ]    
    },

    {
        question: "What was the third plague God sent upon Egypt?",
        answers: [
            {text: "boils", correct: false},
            {text: "Water turned to blood", correct: false},
            {text: "Death of firstborns", correct: false},
            {text: "lice", correct: true},
        ]    
    },

    {
        question: "Who was the first Christian martyr in the New Testament?",
        answers: [
            {text: "James", correct: false},
            {text: "John the Baptist", correct: false},
            {text: "Paul", correct: false},
            {text: "Stephen", correct: true},
        ]    
    },

    {
        question: "Which prophet had a vision of dry bones?",
        answers: [
            {text: "Isaiah", correct: false},
            {text: "Daniel", correct: false},
            {text: "Jeremiah", correct: false},
            {text: "Ezekiel", correct: true},
        ]    
    },

    {
        question: "How many churches were addressed in the book of Revelation?",
        answers: [
            {text: "5", correct: false},
            {text: "7", correct: true},
            {text: "10", correct: false},
            {text: "12", correct: false},
        ]    
    },

    {
        question: "What is the name of the high priest that condemned Jesus to death?",
        answers: [
            {text: "Caiaphas", correct: true},
            {text: "Annas", correct: false},
            {text: "Gamaliel", correct: false},
            {text: "Ananias", correct: false},
        ]    
    },
    {
        question: "Who was the first gentile converted in the book of Acts?",
        answers: [
            {text: "Lydia", correct: false},
            {text: "Cornelius", correct: true},
            {text: "Simon the sorcerer", correct: false},
            {text: "The Ethiopian eunuch", correct: false},
        ]    
    },

    {
        question: "Who was the prophet that married a prostitute as a symbol of Israel unfaithfulness to God?",
        answers: [
            {text: "Hosea", correct: true},
            {text: "Joel", correct: false},
            {text: "Amos", correct: false},
            {text: "Micah", correct: false},
        ]    
    },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
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
    answerButton.appendChild(button);
    if(answer.correct){
        button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.Display = "none";
    while (answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }

}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct==="true";
    if (isCorrect){
        selectedBtn.classList.add("correct");
        score++
    }else{
        selectedBtn.classList.add("incorrect");
    }  
    Array.from(answerButton.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display = "block";  
    }

    function showScore(){
        resetState();
        questionElement.innerHTML = `You scored ${score} out of ${questions.
        length}!` ;      
        nextButton.innerHTML = 'Play Again';
        nextButton.style.display = 'block';
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