/* ========================================
   ANNIVERSARY GAME - QUIZ
   ======================================== */

const QUIZ_QUESTIONS = [
    {
        category: 'About Us 💑',
        question: 'When did we first meet?',
        options: ['June 8, 2025', 'July 15, 2025', 'May 2026', 'January 2025'],
        correct: 0,
    },
    {
        category: 'About Us 💑',
        question: 'What were we both looking for at my sister\'s bachelorette party?',
        options: ['A dance partner', 'A wine opener', 'Directions', 'A phone charger'],
        correct: 1,
    },
    {
        category: 'About Her 💕',
        question: 'What sweet name do I call you in my love letter?',
        options: ['Yarabella', 'Bella', 'Yara-bear', 'Princess'],
        correct: 0,
    },
    {
        category: 'About Me 💙',
        question: 'Who is the hopeless romantic behind this website?',
        options: ['Jean michou', 'Jean-Michel', 'Michael', 'JM from Paris'],
        correct: 0,
    },
    {
        category: 'About Us 💑',
        question: 'When was our first kiss?',
        options: ['8 jun', '14 jun', '15 jun', '20 jun'],
        correct: 1,
    },
    {
        category: 'About Us 💑',
        question: 'Which city did we walk through together, where every moment was magic?',
        options: ['Rome', 'London', 'Paris', 'Bavaria'],
        correct: 3,
    },
    {
        category: 'About Us 💑',
        question: 'Where did we hike, dance, and drink under the stars?',
        options: ['Bavaria', 'The Alps', 'Tuscany', 'Amsterdam'],
        correct: 0,
    },
    {
        category: 'About Her 💕',
        question: 'What about you makes even bad days feel like the best days?',
        options: ['Your smile', 'Your laugh', 'Your kindness', 'Your patience','All of the above'],
        correct: 4,
    },
    {
        category: 'About Us 💑',
        question: 'What vehicle do we dream of taking on road trips together?',
        options: ['A convertible', 'A Wrangler', 'A camper van', 'A motorcycle'],
        correct: 1,
    },
    {
        category: 'About Us 💑',
        question: 'What you like more about me?',
        options: ['My smile', 'My laugh', 'My kindness', 'My patience', 'My dreams','All of the above'],
        correct: 4,
    },
];

let currentQuestion = 0;
let answers = [];
let selectedOption = null;

const DOM = {
    welcomeScreen: document.getElementById('welcomeScreen'),
    quizScreen: document.getElementById('quizScreen'),
    voucherScreen: document.getElementById('voucherScreen'),
    bedGiftScreen: document.getElementById('bedGiftScreen'),
    retryScreen: document.getElementById('retryScreen'),
    startGameBtn: document.getElementById('startGameBtn'),
    nextQuestionBtn: document.getElementById('nextQuestionBtn'),
    retryGameBtn: document.getElementById('retryGameBtn'),
    hermesLink: document.getElementById('hermesLink'),
    progressBar: document.getElementById('progressBar'),
    questionCategory: document.getElementById('questionCategory'),
    questionText: document.getElementById('questionText'),
    optionsContainer: document.getElementById('optionsContainer'),
    questionFeedback: document.getElementById('questionFeedback'),
    retryMessage: document.getElementById('retryMessage'),
    confettiContainer: document.getElementById('confettiContainer'),
};

document.addEventListener('DOMContentLoaded', () => {
    initializeStars();
    setupEventListeners();
});

function setupEventListeners() {
    DOM.startGameBtn.addEventListener('click', startGame);
    DOM.nextQuestionBtn.addEventListener('click', goToNextQuestion);
    DOM.retryGameBtn.addEventListener('click', startGame);
    DOM.hermesLink.addEventListener('click', revealBedGift);
}

function startGame() {
    playSound('clickSound');
    currentQuestion = 0;
    answers = [];
    selectedOption = null;
    showScreen('quizScreen');
    renderQuestion();
}

function showScreen(screenId) {
    document.querySelectorAll('.game-screen').forEach((screen) => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

function renderQuestion() {
    const q = QUIZ_QUESTIONS[currentQuestion];
    selectedOption = null;

    DOM.progressBar.style.width = `${((currentQuestion + 1) / QUIZ_QUESTIONS.length) * 100}%`;
    DOM.questionCategory.textContent = q.category;
    DOM.questionText.textContent = q.question;
    DOM.questionFeedback.classList.add('hidden');
    DOM.nextQuestionBtn.classList.add('hidden');

    DOM.optionsContainer.innerHTML = '';
    q.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'game-option';
        btn.textContent = option;
        btn.addEventListener('click', () => selectOption(btn, index));
        DOM.optionsContainer.appendChild(btn);
    });
}

function selectOption(btn, index) {
    if (selectedOption !== null) return;

    playSound('clickSound');
    selectedOption = index;
    answers[currentQuestion] = index;

    DOM.optionsContainer.querySelectorAll('.game-option').forEach((opt, i) => {
        opt.disabled = true;
        if (i === QUIZ_QUESTIONS[currentQuestion].correct) {
            opt.classList.add('correct');
        } else if (i === index && index !== QUIZ_QUESTIONS[currentQuestion].correct) {
            opt.classList.add('wrong');
        }
    });

    const isCorrect = index === QUIZ_QUESTIONS[currentQuestion].correct;
    DOM.questionFeedback.classList.remove('hidden');
    DOM.questionFeedback.className = `game-feedback ${isCorrect ? 'feedback-correct' : 'feedback-wrong'}`;
    DOM.questionFeedback.textContent = isCorrect
        ? '✓ That\'s right!'
        : '✗ Not quite — but keep going!';

    if (isCorrect) playSound('successSound');

    DOM.nextQuestionBtn.classList.remove('hidden');
    DOM.nextQuestionBtn.querySelector('span').textContent =
        currentQuestion === QUIZ_QUESTIONS.length - 1 ? 'See Results' : 'Next Question';
}

function goToNextQuestion() {
    playSound('clickSound');
    currentQuestion++;

    if (currentQuestion >= QUIZ_QUESTIONS.length) {
        showResults();
    } else {
        renderQuestion();
    }
}

function showResults() {
    const correctCount = answers.filter(
        (ans, i) => ans === QUIZ_QUESTIONS[i].correct
    ).length;

    if (correctCount === QUIZ_QUESTIONS.length) {
        playSound('successSound');
        triggerConfetti();
        showScreen('voucherScreen');
    } else {
        DOM.retryMessage.textContent = `You got ${correctCount} out of ${QUIZ_QUESTIONS.length} right. Our story is worth knowing by heart — give it another try! 💕`;
        showScreen('retryScreen');
    }
}

function revealBedGift() {
    playSound('successSound');
    setTimeout(() => {
        triggerConfetti();
        showScreen('bedGiftScreen');
    }, 600);
}

function playSound(soundId) {
    const audio = document.getElementById(soundId);
    if (audio) {
        audio.currentTime = 0;
        audio.play().catch(() => {});
    }
}

function triggerConfetti() {
    const colors = ['#ec4899', '#8b5cf6', '#3b82f6', '#fbbf24'];

    for (let i = 0; i < 80; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti-piece';

        const size = Math.random() * 10 + 5;
        confetti.style.width = size + 'px';
        confetti.style.height = size + 'px';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        confetti.style.animationDelay = Math.random() * 0.3 + 's';

        DOM.confettiContainer.appendChild(confetti);
        setTimeout(() => confetti.remove(), 3000);
    }
}

function initializeStars() {
    const canvas = document.getElementById('starsCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = [];
    const starCount = Math.min(150, Math.floor(window.innerWidth / 10));

    for (let i = 0; i < starCount; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 1.5,
            opacity: Math.random() * 0.5 + 0.5,
            twinkleSpeed: Math.random() * 0.02 + 0.01,
        });
    }

    function drawStars() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'white';

        stars.forEach((star) => {
            star.opacity += star.twinkleSpeed;
            if (star.opacity >= 1 || star.opacity <= 0.3) {
                star.twinkleSpeed *= -1;
            }

            ctx.globalAlpha = star.opacity;
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            ctx.fill();
        });

        ctx.globalAlpha = 1;
        requestAnimationFrame(drawStars);
    }

    drawStars();

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}
