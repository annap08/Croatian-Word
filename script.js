const questions = [
    { question: "How do you say 'Hello' in Croatian?", options: ["Bok", "Doviđenja", "Hvala", "Molim"], answer: 0 },
    { question: "How do you say 'Thank you' in Croatian?", options: ["Bok", "Doviđenja", "Hvala", "Molim"], answer: 2 },
    { question: "How do you say 'Please' in Croatian?", options: ["Bok", "Doviđenja", "Hvala", "Molim"], answer: 3 },
    { question: "How do you say 'Goodbye' in Croatian?", options: ["Bok", "Doviđenja", "Hvala", "Molim"], answer: 1 },
    { question: "How do you say 'Yes' in Croatian?", options: ["Ne", "Da", "Možda", "Nikad"], answer: 1 },
    { question: "How do you say 'No' in Croatian?", options: ["Da", "Ne", "Možda", "Uvijek"], answer: 1 },
    { question: "How do you say 'Excuse me' in Croatian?", options: ["Oprosti", "Izvoli", "Molim", "Hvala"], answer: 0 },
    { question: "How do you say 'Sorry' in Croatian?", options: ["Oprosti", "Molim", "Izvoli", "Hvala"], answer: 0 },
    { question: "How do you say 'Good morning' in Croatian?", options: ["Dobro jutro", "Dobar dan", "Dobra večer", "Laku noć"], answer: 0 },
    { question: "How do you say 'Good night' in Croatian?", options: ["Dobar dan", "Dobro jutro", "Laku noć", "Dobra večer"], answer: 2 },
    { question: "How do you say 'Water' in Croatian?", options: ["Voda", "Hrana", "Pivo", "Kava"], answer: 0 },
    { question: "How do you say 'Food' in Croatian?", options: ["Piće", "Hrana", "Voda", "Kava"], answer: 1 },
    { question: "How do you say 'Coffee' in Croatian?", options: ["Kava", "Čaj", "Sok", "Vino"], answer: 0 },
    { question: "How do you say 'Tea' in Croatian?", options: ["Kava", "Čaj", "Sok", "Vino"], answer: 1 },
    { question: "How do you say 'Wine' in Croatian?", options: ["Pivo", "Vino", "Sok", "Voda"], answer: 1 },
    { question: "How do you say 'Beer' in Croatian?", options: ["Pivo", "Vino", "Sok", "Kava"], answer: 0 },
    { question: "How do you say 'Apple' in Croatian?", options: ["Kruška", "Jabuka", "Banana", "Naranča"], answer: 1 },
    { question: "How do you say 'Orange' in Croatian?", options: ["Kruška", "Banana", "Jabuka", "Naranča"], answer: 3 }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const scoreElement = document.getElementById('score');
    const totalElement = document.getElementById('total');

    questionElement.textContent = questions[currentQuestionIndex].question;
    optionsElement.innerHTML = '';

    questions[currentQuestionIndex].options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => checkAnswer(index);
        optionsElement.appendChild(button);
    });

    scoreElement.textContent = score;
    totalElement.textContent = questions.length;
}

function checkAnswer(selectedOption) {
    const correctOption = questions[currentQuestionIndex].answer;

    if (selectedOption === correctOption) {
        score++;
        alert('Correct!');
        nextQuestion();  // Automatically load the next question
    } else {
        alert(`Incorrect! The correct answer was "${questions[currentQuestionIndex].options[correctOption]}"`);
        nextQuestion();  // Move to the next question even if the answer is incorrect
    }
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex >= questions.length) {
        alert(`Quiz finished! Your final score is ${score} out of ${questions.length}.`);
        currentQuestionIndex = 0;
        score = 0;
    }

    loadQuestion();
}

window.onload = loadQuestion;