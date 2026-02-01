// Quiz Application Logic
class QuizApp {
    constructor() {
        this.currentScreen = 'welcome';
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.userAnswers = [];
        this.startTime = null;
        this.timerInterval = null;
        this.elapsedTime = 0;

        // Sample quiz questions organized by category and difficulty
        this.questions = {
            general: {
                easy: [
                    {
                        question: "What is the capital of France?",
                        options: ["London", "Berlin", "Paris", "Madrid"],
                        correctAnswer: 2
                    },
                    {
                        question: "How many continents are there?",
                        options: ["5", "6", "7", "8"],
                        correctAnswer: 2
                    },
                    {
                        question: "What is the largest mammal?",
                        options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
                        correctAnswer: 1
                    }
                ],
                medium: [
                    {
                        question: "Who painted the Mona Lisa?",
                        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
                        correctAnswer: 2
                    },
                    {
                        question: "What is the chemical symbol for gold?",
                        options: ["Go", "Gd", "Au", "Ag"],
                        correctAnswer: 2
                    },
                    {
                        question: "Which planet is known as the Red Planet?",
                        options: ["Venus", "Mars", "Jupiter", "Saturn"],
                        correctAnswer: 1
                    }
                ],
                hard: [
                    {
                        question: "What is the rarest blood type?",
                        options: ["O+", "AB-", "B-", "A+"],
                        correctAnswer: 1
                    },
                    {
                        question: "Who wrote 'To Kill a Mockingbird'?",
                        options: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "F. Scott Fitzgerald"],
                        correctAnswer: 0
                    },
                    {
                        question: "What is the smallest country in the world?",
                        options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
                        correctAnswer: 1
                    }
                ]
            },
            science: {
                easy: [
                    {
                        question: "What gas do plants absorb from the atmosphere?",
                        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
                        correctAnswer: 1
                    },
                    {
                        question: "How many bones are in the human body?",
                        options: ["206", "300", "150", "187"],
                        correctAnswer: 0
                    }
                ],
                medium: [
                    {
                        question: "What is the chemical formula for water?",
                        options: ["H2O", "CO2", "NaCl", "O2"],
                        correctAnswer: 0
                    },
                    {
                        question: "What is the speed of light?",
                        options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "600,000 km/s"],
                        correctAnswer: 0
                    }
                ],
                hard: [
                    {
                        question: "What is the hardest natural substance on Earth?",
                        options: ["Gold", "Iron", "Diamond", "Platinum"],
                        correctAnswer: 2
                    },
                    {
                        question: "What is the atomic number of carbon?",
                        options: ["4", "6", "8", "12"],
                        correctAnswer: 1
                    }
                ]
            },
            history: {
                easy: [
                    {
                        question: "In which year did World War II end?",
                        options: ["1945", "1939", "1950", "1941"],
                        correctAnswer: 0
                    },
                    {
                        question: "Who was the first President of the United States?",
                        options: ["Thomas Jefferson", "Abraham Lincoln", "George Washington", "John Adams"],
                        correctAnswer: 2
                    }
                ],
                medium: [
                    {
                        question: "Which ancient wonder of the world was located in Alexandria?",
                        options: ["Hanging Gardens", "Lighthouse of Alexandria", "Statue of Zeus", "Temple of Artemis"],
                        correctAnswer: 1
                    },
                    {
                        question: "Who discovered America?",
                        options: ["Leif Erikson", "Christopher Columbus", "Amerigo Vespucci", "Marco Polo"],
                        correctAnswer: 1
                    }
                ],
                hard: [
                    {
                        question: "In which year was the Magna Carta signed?",
                        options: ["1215", "1315", "1115", "1415"],
                        correctAnswer: 0
                    },
                    {
                        question: "Who was the Egyptian queen who ruled alongside Julius Caesar and Mark Antony?",
                        options: ["Nefertiti", "Cleopatra", "Hatshepsut", "Isis"],
                        correctAnswer: 1
                    }
                ]
            },
            geography: {
                easy: [
                    {
                        question: "What is the largest ocean on Earth?",
                        options: ["Atlantic", "Indian", "Arctic", "Pacific"],
                        correctAnswer: 3
                    },
                    {
                        question: "Which river is the longest in the world?",
                        options: ["Amazon", "Nile", "Mississippi", "Yangtze"],
                        correctAnswer: 1
                    }
                ],
                medium: [
                    {
                        question: "Which country has the most natural lakes?",
                        options: ["Canada", "Russia", "United States", "Finland"],
                        correctAnswer: 0
                    },
                    {
                        question: "What is the smallest country in the world?",
                        options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
                        correctAnswer: 1
                    }
                ],
                hard: [
                    {
                        question: "Which mountain range separates Europe and Asia?",
                        options: ["Alps", "Carpathians", "Urals", "Caucasus"],
                        correctAnswer: 2
                    },
                    {
                        question: "What is the driest place on Earth?",
                        options: ["Sahara Desert", "Atacama Desert", "Antarctica", "Mojave Desert"],
                        correctAnswer: 1
                    }
                ]
            },
            math: {
                easy: [
                    {
                        question: "What is 15 + 27?",
                        options: ["42", "40", "45", "38"],
                        correctAnswer: 0
                    },
                    {
                        question: "How many sides does a hexagon have?",
                        options: ["5", "6", "7", "8"],
                        correctAnswer: 1
                    }
                ],
                medium: [
                    {
                        question: "What is the square root of 144?",
                        options: ["10", "12", "14", "16"],
                        correctAnswer: 1
                    },
                    {
                        question: "What is 25% of 200?",
                        options: ["45", "50", "55", "60"],
                        correctAnswer: 1
                    }
                ],
                hard: [
                    {
                        question: "What is the value of π (pi) to two decimal places?",
                        options: ["3.12", "3.14", "3.16", "3.18"],
                        correctAnswer: 1
                    },
                    {
                        question: "What is the derivative of x²?",
                        options: ["x", "2x", "x²", "2"],
                        correctAnswer: 1
                    }
                ]
            }
        };

        this.initializeElements();
        this.bindEvents();
    }

    initializeElements() {
        // Screen elements
        this.welcomeScreen = document.getElementById('welcome-screen');
        this.quizScreen = document.getElementById('quiz-screen');
        this.resultsScreen = document.getElementById('results-screen');

        // Welcome screen elements
        this.categorySelect = document.getElementById('category-select');
        this.difficultySelect = document.getElementById('difficulty-select');
        this.numQuestionsInput = document.getElementById('num-questions');
        this.startBtn = document.getElementById('start-btn');

        // Quiz screen elements
        this.questionText = document.getElementById('question-text');
        this.answerOptions = document.getElementById('answer-options');
        this.nextBtn = document.getElementById('next-btn');
        this.progressFill = document.getElementById('progress-fill');
        this.progressText = document.getElementById('progress-text');
        this.timer = document.getElementById('timer');

        // Results screen elements
        this.percentageScore = document.getElementById('percentage-score');
        this.performanceRating = document.getElementById('performance-rating');
        this.scoreValue = document.getElementById('score-value');
        this.totalQuestions = document.getElementById('total-questions');
        this.correctCount = document.getElementById('correct-count');
        this.incorrectCount = document.getElementById('incorrect-count');
        this.timeTaken = document.getElementById('time-taken');
        this.reviewQuestions = document.getElementById('review-questions');
        this.retakeBtn = document.getElementById('retake-btn');
        this.homeBtn = document.getElementById('home-btn');
    }

    bindEvents() {
        this.startBtn.addEventListener('click', () => this.startQuiz());
        this.nextBtn.addEventListener('click', () => this.nextQuestion());
        this.retakeBtn.addEventListener('click', () => this.resetQuiz());
        this.homeBtn.addEventListener('click', () => this.showWelcomeScreen());

        // Add event delegation for answer options
        this.answerOptions.addEventListener('click', (e) => {
            const optionElement = e.target.closest('.option');
            if (optionElement && !this.isAnswerSubmitted) {
                this.selectAnswer(parseInt(optionElement.dataset.index));
            }
        });
    }

    startQuiz() {
        const category = this.categorySelect.value;
        const difficulty = this.difficultySelect.value;
        const numQuestions = parseInt(this.numQuestionsInput.value);

        // Get questions based on selected category and difficulty
        this.selectedQuestions = this.getQuestions(category, difficulty, numQuestions);

        if (this.selectedQuestions.length === 0) {
            alert('No questions available for the selected category and difficulty.');
            return;
        }

        this.currentQuestionIndex = 0;
        this.score = 0;
        this.userAnswers = [];
        this.elapsedTime = 0;
        this.isAnswerSubmitted = false;

        this.showQuizScreen();
        this.displayQuestion();
        this.startTimer();
    }

    getQuestions(category, difficulty, numQuestions) {
        const availableQuestions = this.questions[category][difficulty];
        const shuffled = [...availableQuestions].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, numQuestions);
    }

    showQuizScreen() {
        this.hideAllScreens();
        this.quizScreen.classList.add('active');
        this.currentScreen = 'quiz';
    }

    hideAllScreens() {
        this.welcomeScreen.classList.remove('active');
        this.quizScreen.classList.remove('active');
        this.resultsScreen.classList.remove('active');
    }

    displayQuestion() {
        const question = this.selectedQuestions[this.currentQuestionIndex];
        this.questionText.textContent = question.question;

        // Clear previous options
        this.answerOptions.innerHTML = '';

        // Add new options
        question.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            optionElement.dataset.index = index;
            optionElement.textContent = option;
            this.answerOptions.appendChild(optionElement);
        });

        // Update progress
        const progress = ((this.currentQuestionIndex + 1) / this.selectedQuestions.length) * 100;
        this.progressFill.style.width = `${progress}%`;
        this.progressText.textContent = `Question ${this.currentQuestionIndex + 1} of ${this.selectedQuestions.length}`;

        // Reset answer selection state
        this.isAnswerSubmitted = false;
        this.nextBtn.disabled = true;

        // Remove any previously selected classes
        document.querySelectorAll('.option').forEach(option => {
            option.classList.remove('selected', 'correct', 'incorrect');
        });
    }

    selectAnswer(selectedIndex) {
        // Remove previous selections
        document.querySelectorAll('.option').forEach(option => {
            option.classList.remove('selected');
        });

        // Highlight selected option
        const selectedOption = document.querySelector(`.option[data-index="${selectedIndex}"]`);
        selectedOption.classList.add('selected');

        // Store the answer
        this.userAnswers.push({
            questionIndex: this.currentQuestionIndex,
            selectedAnswer: selectedIndex,
            correctAnswer: this.selectedQuestions[this.currentQuestionIndex].correctAnswer
        });

        this.nextBtn.disabled = false;
    }

    nextQuestion() {
        if (!this.isAnswerSubmitted) {
            // Check if answer is correct and highlight options
            const currentQuestion = this.selectedQuestions[this.currentQuestionIndex];
            const userAnswer = this.userAnswers[this.userAnswers.length - 1];

            if (userAnswer.selectedAnswer === currentQuestion.correctAnswer) {
                this.score++;

                // Highlight correct answer
                const correctOption = document.querySelector(`.option[data-index="${currentQuestion.correctAnswer}"]`);
                correctOption.classList.add('correct');
            } else {
                // Highlight correct and incorrect answers
                const selectedOption = document.querySelector(`.option[data-index="${userAnswer.selectedAnswer}"]`);
                const correctOption = document.querySelector(`.option[data-index="${currentQuestion.correctAnswer}"]`);

                selectedOption.classList.add('incorrect');
                correctOption.classList.add('correct');
            }

            this.isAnswerSubmitted = true;
        }

        setTimeout(() => {
            this.currentQuestionIndex++;

            if (this.currentQuestionIndex < this.selectedQuestions.length) {
                this.displayQuestion();
            } else {
                this.endQuiz();
            }
        }, 1000);
    }

    startTimer() {
        this.startTime = Date.now();
        this.updateTimerDisplay();

        this.timerInterval = setInterval(() => {
            this.updateTimerDisplay();
        }, 1000);
    }

    updateTimerDisplay() {
        const currentTime = Date.now();
        this.elapsedTime = Math.floor((currentTime - this.startTime) / 1000);
        const minutes = Math.floor(this.elapsedTime / 60);
        const seconds = this.elapsedTime % 60;
        this.timer.textContent = `Time: ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    endQuiz() {
        clearInterval(this.timerInterval);
        this.calculateResults();
        this.showResultsScreen();
    }

    calculateResults() {
        const totalQuestions = this.selectedQuestions.length;
        const percentage = Math.round((this.score / totalQuestions) * 100);
        const correctCount = this.score;
        const incorrectCount = totalQuestions - this.score;

        // Set results values
        this.percentageScore.textContent = `${percentage}%`;
        this.scoreValue.textContent = this.score;
        this.totalQuestions.textContent = totalQuestions;
        this.correctCount.textContent = correctCount;
        this.incorrectCount.textContent = incorrectCount;
        this.timeTaken.textContent = `${this.elapsedTime}s`;

        // Determine performance rating
        let rating = '';
        if (percentage >= 90) rating = 'Outstanding!';
        else if (percentage >= 80) rating = 'Excellent!';
        else if (percentage >= 70) rating = 'Great Job!';
        else if (percentage >= 60) rating = 'Good Work!';
        else if (percentage >= 50) rating = 'Fair - Keep Practicing!';
        else rating = 'Needs Improvement';

        this.performanceRating.textContent = rating;
        this.performanceRating.className = 'performance-rating';

        // Add color based on performance
        if (percentage >= 70) {
            this.performanceRating.style.color = '#2ecc71';
        } else if (percentage >= 50) {
            this.performanceRating.style.color = '#f39c12';
        } else {
            this.performanceRating.style.color = '#e74c3c';
        }
    }

    showResultsScreen() {
        this.hideAllScreens();
        this.resultsScreen.classList.add('active');
        this.currentScreen = 'results';
        this.displayReview();
    }

    displayReview() {
        this.reviewQuestions.innerHTML = '';

        this.selectedQuestions.forEach((question, index) => {
            const userAnswerObj = this.userAnswers.find(ans => ans.questionIndex === index);
            const userAnswer = userAnswerObj ? userAnswerObj.selectedAnswer : -1;
            const isCorrect = userAnswer === question.correctAnswer;

            const reviewDiv = document.createElement('div');
            reviewDiv.className = `review-question ${isCorrect ? 'correct' : 'incorrect'}`;

            reviewDiv.innerHTML = `
                <div class="original-question">${question.question}</div>
                <div class="user-answer">Your answer: ${userAnswer !== -1 ? question.options[userAnswer] : 'Not answered'}</div>
                <div class="correct-answer">Correct answer: ${question.options[question.correctAnswer]}</div>
            `;

            this.reviewQuestions.appendChild(reviewDiv);
        });
    }

    resetQuiz() {
        this.hideAllScreens();
        this.welcomeScreen.classList.add('active');
        this.currentScreen = 'welcome';
    }

    showWelcomeScreen() {
        this.hideAllScreens();
        this.welcomeScreen.classList.add('active');
        this.currentScreen = 'welcome';
    }
}

// Initialize the quiz app when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new QuizApp();
});

// Add some utility functions for enhanced UX
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && document.activeElement.tagName === 'SELECT') {
        // Trigger start button when Enter is pressed on select
        const startBtn = document.getElementById('start-btn');
        if (startBtn.offsetParent !== null) { // Check if element is visible
            startBtn.click();
        }
    }
});