// Initialize variables
let currentQuestionIndex = 0;
let score = 0;

// Load the current question and options
function loadQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const scoreElement = document.getElementById('score');
    const totalElement = document.getElementById('total');

    // Set the question text
    questionElement.textContent = questions[currentQuestionIndex].question;

    // Clear previous options
    optionsElement.innerHTML = '';

    // Create a button for each option
    questions[currentQuestionIndex].options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.className = 'option-btn'; // Add class for styling
        button.onclick = () => checkAnswer(index);
        optionsElement.appendChild(button);
    });

    // Update score and total questions
    scoreElement.textContent = score;
    totalElement.textContent = questions.length;
}

// Check if the selected option is correct
function checkAnswer(selectedOption) {
    const correctOption = questions[currentQuestionIndex].answer;

    if (selectedOption === correctOption) {
        score++;
        alert('Correct!');
    } else {
        alert(`Incorrect! The correct answer was "${questions[currentQuestionIndex].options[correctOption]}"`);
    }

    // Load the next question automatically after the answer is checked
    nextQuestion();
}

// Move to the next question or redirect to results page
function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex >= questions.length) {
        // Redirect to results page with score and total questions
        window.location.href = `result.html?score=${score}&total=${questions.length}`;
    } else {
        loadQuestion();
    }
}

// Load the first question when the page loads
window.onload = loadQuestion;

// Example questions array
const questions = [
    {
        question: 'What is the Croatian word for "Hello"?',
        options: ['Bok', 'Hvala', 'Molim', 'Doviđenja'],
        answer: 0
    },
    {
        question: 'What does "Hvala" mean?',
        options: ['Hello', 'Thank you', 'Please', 'Goodbye'],
        answer: 1
    },
    {
        question: 'What is the Croatian word for "Goodbye"?',
        options: ['Da', 'Ne', 'Oprosti', 'Doviđenja'],
        answer: 3
    },
    {
        question: 'How do you say "Please" in Croatian?',
        options: ['Bok', 'Molim', 'Voda', 'Kava'],
        answer: 1
    },
    {
        question: 'What is the Croatian word for "Yes"?',
        options: ['Ne', 'Da', 'Oprosti', 'Laku noć'],
        answer: 1
    },
    {
        question: 'How do you say "Good morning" in Croatian?',
        options: ['Jabuka', 'Dobro jutro', 'Naranča', 'Hrana'],
        answer: 1
    },
    {
        question: 'What does "Laku noć" mean?',
        options: ['Good morning', 'Good night', 'Thank you', 'Water'],
        answer: 1
    },
    {
        question: 'How do you say "Sorry" in Croatian?',
        options: ['Vino', 'Pivo', 'Oprosti', 'Čaj'],
        answer: 2
    },
    {
        question: 'What is the Croatian word for "Apple"?',
        options: ['Jabuka', 'Naranča', 'Hrana', 'Kava'],
        answer: 0
    },
    {
        question: 'What does "Voda" mean?',
        options: ['Food', 'Coffee', 'Water', 'Tea'],
        answer: 2
    },
    {
        question: 'What is the Croatian word for "Coffee"?',
        options: ['Kava', 'Voda', 'Čaj', 'Mlijeko'],
        answer: 0
    },
    {
        question: 'How do you say "Tea" in Croatian?',
        options: ['Vino', 'Pivo', 'Čaj', 'Kava'],
        answer: 2
    },
    {
        question: 'What is the Croatian word for "Food"?',
        options: ['Hrana', 'Jabuka', 'Voda', 'Mlijeko'],
        answer: 0
    },
    {
        question: 'What does "Mlijeko" mean?',
        options: ['Wine', 'Milk', 'Bread', 'Water'],
        answer: 1
    },
    {
        question: 'How do you say "Wine" in Croatian?',
        options: ['Pivo', 'Mlijeko', 'Vino', 'Kava'],
        answer: 2
    },
    {
        question: 'What is the Croatian word for "Beer"?',
        options: ['Pivo', 'Voda', 'Vino', 'Čaj'],
        answer: 0
    },
    {
        question: 'How do you say "Orange" in Croatian?',
        options: ['Jabuka', 'Naranča', 'Kava', 'Hrana'],
        answer: 1
    },
    {
        question: 'What does "Oprosti" mean?',
        options: ['Hello', 'Please', 'Sorry', 'Goodbye'],
        answer: 2
    }
];
