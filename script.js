const quizData = [
    {
      question: "What is the capital of France?",
      options: ["London", "Berlin", "Madrid", "Paris"],
      correctIndex: 3, // Index of the correct answer in the options array
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      correctIndex: 1,
    },
    {
      question: "How many continents are there on Earth?",
      options: ["4", "6", "7", "5"],
      correctIndex: 2,
    },
    // Add more questions here
  ];

  // Variables to keep track of the current question and user score
let currentQuestionIndex = 0;
let score = 0;

// Elements
const questionElement = document.getElementById("question");
const optionsElements = document.querySelectorAll("label");
const feedbackElement = document.getElementById("feedback");
const scoreElement = document.getElementById("score");
const nextButton = document.getElementById("next-button");
const submitButton = document.getElementById("submit-button");

// Function to load a question
function loadQuestion(questionIndex) {
  const currentQuestion = quizData[questionIndex];

  questionElement.textContent = currentQuestion.question;

  currentQuestion.options.forEach((option, index) => {
    optionsElements[index].children[1].textContent = option;
  });

  // Clear any previous feedback
  feedbackElement.textContent = "";

  // Disable "Next" button until an option is selected
  nextButton.disabled = true;

  // Enable "Submit" button
  submitButton.disabled = false;
}

// Function to check the selected answer
function checkAnswer() {
  const selectedOption = document.querySelector('input[name="answer"]:checked');

  if (selectedOption) {
    const userAnswer = parseInt(selectedOption.value);

    const currentQuestion = quizData[currentQuestionIndex];
    const correctAnswerIndex = currentQuestion.correctIndex;

    if (userAnswer === correctAnswerIndex) {
      // The answer is correct
      feedbackElement.textContent = "Waow Correct!";
      score++;
    } else {
      // The answer is incorrect
      feedbackElement.textContent = "sorry Incorrect!";
    }

    // Update the score
    scoreElement.textContent = score;

    // Enable the "Next" button
    nextButton.disabled = false;

    // Disable the "Submit" button
    submitButton.disabled = true;
  }
}

// Event listeners
optionsElements.forEach((option, index) => {
  option.addEventListener("click", () => {
    // Enable "Submit" button when an option is selected
    submitButton.disabled = false;
  });
});

submitButton.addEventListener("click", checkAnswer);

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    loadQuestion(currentQuestionIndex);
  } else {
    // Quiz has ended
    questionElement.textContent = "Quiz completed!";
    optionsElements.forEach((option) => {
      option.style.display = "none";
    });
    nextButton.style.display = "none";
    submitButton.style.display = "none";
  }
});

// Load the first question
loadQuestion(currentQuestionIndex);
