/* ========================================
   ANNIVERSARY WEBSITE - JAVASCRIPT
   ======================================== */

// ========================================
// Configuration - EDIT YOUR CONTENT HERE
// ========================================

const ANNIVERSARY_CONFIG = {
    // YOUR STORY DATA
    anniversaryDate: new Date('2025-06-08'), // When you met
    
    // Timeline milestones - ADD YOUR OWN HERE
    milestones: [
        {
            date: 'June 8, 2025',
            title: 'The Wine Opener Moment',
            description: 'At my sister\'s bachelorette party, I reached for a wine opener and found you instead. A simple moment that changed everything.'
        },
        {
            date: 'June 15, 2025',
            title: 'Our First Kiss',
            description: 'Under the stars, with the mountains lights as our backdrop. stargazing'
        },
        {
            date: 'July 2025',
            title: 'Our First Virtual Date',
            description: 'Love, laughter, and your smile through the screen. Distance didn\'t matter anymore.'
        },
        {
            date: 'May 2026',
            title: 'Paris Trip',
            description: 'Walking through the streets of Paris together. Every sunset was ours, every moment was magic.'
        },
        {
            date: 'May 2026',
            title: 'Bavaria',
            description: 'Under the stars in Bavaria, camping in the Wrangler. Simple moments, infinite love.'
        },
        {
            date: 'June 8, 2026',
            title: 'One Year of Love',
            description: 'Happy first anniversary. Thank you for every mile, every call, every memory.'
        }
    ],

    // Memory photos - ADD YOUR PHOTOS HERE (use URLs or local paths)
    photos: [
        { src: './img/1.jpeg', caption: 'Our first photo together' },
        { src: './img/2.jpeg', caption: 'Sunset in Paris' },
        { src: './img/3.jpeg', caption: 'Your smile always' },
        { src: './img/4.jpeg', caption: 'Adventure awaits' },
        { src: './img/5.jpeg', caption: 'Wrangler adventures' },
        { src: './img/6.jpeg', caption: 'Camping under stars' },
        { src: './img/7.jpeg', caption: 'Your laugh' },
        { src: './img/8.jpeg', caption: 'Wine o\'clock' },
        { src: './img/9.jpeg', caption: 'Golden hour' },
        { src: './img/10.jpeg', caption: 'Just us' },
        { src: './img/11.jpeg', caption: 'Our memories' },
        { src: './img/12.jpeg', caption: 'Travel dreams' },
        { src: './img/13.jpeg', caption: 'Travel dreams' },
    ],

    // Reasons I love you - ADD YOUR OWN HERE
    reasons: [
        { emoji: '😊', title: 'Your Smile', description: 'That smile melts my heart every single time. Even through a screen, it\'s the brightest part of my day.' },
        { emoji: '💚', title: 'Your Kindness', description: 'The way you care so deeply about everything and everyone. Your heart is pure gold.' },
        { emoji: '🦸', title: 'Your Support', description: 'You believe in me when I don\'t believe in myself. You\'ve got my back, always.' },
        { emoji: '😄', title: 'Your Laugh', description: 'That laugh is contagious. It makes even bad days feel like the best days.' },
        { emoji: '⏰', title: 'Your Patience', description: 'Despite the distance, you never complain. You wait, you understand, you love me anyway.' },
        { emoji: '🌟', title: 'Your Dreams', description: 'I love how you dream big and work hard. Your ambition inspires me.' },
    ],

    // Dreams for our future - ADD YOUR OWN HERE
    dreams: [
        { emoji: '✈️', title: 'Travel Together', description: 'Exploring the world, one sunset at a time, with you by my side.' },
        { emoji: '🏠', title: 'Our First Home', description: 'A place that\'s truly ours, where we build our story together.' },
        { emoji: '🚙', title: 'Wrangler Road Trips', description: 'More adventures in the Wrangler, windows down, music up, us.' },
        { emoji: '👨‍👩‍👧‍👦', title: 'Growing Old Together', description: 'Still holding hands at 80, still laughing at inside jokes, still in love.' },
        { emoji: '🌅', title: 'Every Sunset', description: 'Watching sunsets together, no more screens, no more distance.' },
    ],

    // Secret password - CHANGE THIS TO YOUR SECRET
    secretPassword: 'wineopener',
    secretMessage: '💕 You know what my favorite memory is? The moment I first saw you at the party. I didn\'t know it then, but my entire life just changed. Every moment since has been a gift. Every call, every laugh, every sunset we\'ve shared – they\'re all engraved on my heart. I can\'t wait to close the distance and hold you forever. I love you more than words could ever say. Happy anniversary, my love. You are my home. 💕',
};

// ========================================
// DOM ELEMENTS & STATE
// ========================================

let darkMode = true;
let musicPlaying = false;
let scrollProgress = 0;

const DOM = {
    loadingScreen: document.getElementById('loadingScreen'),
    scrollProgress: document.getElementById('scrollProgress'),
    navbar: document.getElementById('navbar'),
    musicToggle: document.getElementById('musicToggle'),
    themeToggle: document.getElementById('themeToggle'),
    bgMusic: document.getElementById('bgMusic'),
    openStoryBtn: document.getElementById('openStoryBtn'),
    letterText: document.getElementById('letterText'),
    timelineItems: document.getElementById('timelineItems'),
    galleryGrid: document.getElementById('galleryGrid'),
    reasonsGrid: document.getElementById('reasonsGrid'),
    dreamsGrid: document.getElementById('dreamsGrid'),
    counterCards: document.querySelectorAll('.counter-card'),
    lightbox: document.getElementById('lightbox'),
    lightboxImage: document.getElementById('lightboxImage'),
    lightboxCaption: document.getElementById('lightboxCaption'),
    lightboxClose: document.querySelector('.lightbox-close'),
    secretInput: document.getElementById('secretInput'),
    unlockBtn: document.getElementById('unlockBtn'),
    secretLocked: document.getElementById('secretLocked'),
    secretUnlocked: document.getElementById('secretUnlocked'),
    secretMessage: document.getElementById('secretMessage'),
    customCursor: document.getElementById('customCursor'),
    confettiContainer: document.getElementById('confettiContainer'),
    rsvpBtn: document.getElementById('rsvpBtn'),
    invitationTime: document.getElementById('invitationTime'),
    particleContainer: document.getElementById('particleContainer'),
    floatingHearts: document.querySelector('.floating-hearts'),
};

// ========================================
// INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    initializeStars();
    populateTimeline();
    populateGallery();
    populateReasons();
    populateDreams();
    setupEventListeners();
    hideLoadingScreen();
    createParticles();
    loadThemePreference();
    loadMusicPreference();
    animateCounters();
});

// ========================================
// STARS CANVAS ANIMATION
// ========================================

function initializeStars() {
    const canvas = document.getElementById('starsCanvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = [];
    const starCount = Math.min(200, Math.floor(window.innerWidth / 10));

    for (let i = 0; i < starCount; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 1.5,
            opacity: Math.random() * 0.5 + 0.5,
            twinkleSpeed: Math.random() * 0.02 + 0.01,
        });
    }

    let animationId;

    function drawStars() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'white';

        stars.forEach(star => {
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
        animationId = requestAnimationFrame(drawStars);
    }

    drawStars();

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// ========================================
// PARTICLE CREATION
// ========================================

function createParticles() {
    const particleCount = Math.min(30, Math.floor(window.innerWidth / 50));

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        const size = Math.random() * 100 + 20;
        const duration = Math.random() * 20 + 20;
        const delay = Math.random() * 5;
        const left = Math.random() * 100;
        const top = Math.random() * 100;

        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = left + '%';
        particle.style.top = top + '%';
        particle.style.animationDuration = duration + 's';
        particle.style.animationDelay = delay + 's';

        DOM.particleContainer.appendChild(particle);
    }
}

// ========================================
// HIDE LOADING SCREEN
// ========================================

function hideLoadingScreen() {
    setTimeout(() => {
        DOM.loadingScreen.style.opacity = '0';
        DOM.loadingScreen.style.visibility = 'hidden';
    }, 2000);
}

// ========================================
// TIMELINE POPULATION
// ========================================

function populateTimeline() {
    DOM.timelineItems.innerHTML = '';

    ANNIVERSARY_CONFIG.milestones.forEach((milestone, index) => {
        const item = document.createElement('div');
        item.className = 'timeline-item';
        item.style.animationDelay = `${index * 0.15}s`;

        item.innerHTML = `
            <div class="timeline-marker"></div>
            <div class="timeline-content">
                <div class="timeline-date">${milestone.date}</div>
                <div class="timeline-title">${milestone.title}</div>
                <div class="timeline-description">${milestone.description}</div>
            </div>
        `;

        DOM.timelineItems.appendChild(item);
    });
}

// ========================================
// GALLERY POPULATION
// ========================================

function populateGallery() {
    DOM.galleryGrid.innerHTML = '';

    ANNIVERSARY_CONFIG.photos.forEach((photo, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.style.animationDelay = `${index * 0.05}s`;

        item.innerHTML = `
            <img src="${photo.src}" alt="${photo.caption}" loading="lazy">
            <div class="gallery-overlay">
                <span class="gallery-overlay-icon">🔍</span>
            </div>
        `;

        item.addEventListener('click', () => openLightbox(photo.src, photo.caption));
        DOM.galleryGrid.appendChild(item);
    });
}

// ========================================
// LIGHTBOX FUNCTIONS
// ========================================

function openLightbox(src, caption) {
    playSound('clickSound');
    DOM.lightboxImage.src = src;
    DOM.lightboxCaption.textContent = caption;
    DOM.lightbox.classList.add('active');
    document.body.classList.add('no-scroll');
}

function closeLightbox() {
    DOM.lightbox.classList.remove('active');
    document.body.classList.remove('no-scroll');
}

// ========================================
// REASONS POPULATION
// ========================================

function populateReasons() {
    DOM.reasonsGrid.innerHTML = '';

    ANNIVERSARY_CONFIG.reasons.forEach((reason, index) => {
        const card = document.createElement('div');
        card.className = 'reason-card';
        card.style.animationDelay = `${index * 0.1}s`;

        card.innerHTML = `
            <div class="reason-card-inner">
                <div class="reason-card-front">
                    <div>
                        <span class="reason-emoji">${reason.emoji}</span>
                        <div class="reason-title">${reason.title}</div>
                    </div>
                </div>
                <div class="reason-card-back">
                    <div class="reason-description">${reason.description}</div>
                </div>
            </div>
        `;

        card.addEventListener('click', () => {
            playSound('clickSound');
            card.classList.toggle('flipped');
        });

        DOM.reasonsGrid.appendChild(card);
    });
}

// ========================================
// DREAMS POPULATION
// ========================================

function populateDreams() {
    DOM.dreamsGrid.innerHTML = '';

    ANNIVERSARY_CONFIG.dreams.forEach((dream, index) => {
        const card = document.createElement('div');
        card.className = 'dream-card';
        card.style.animationDelay = `${index * 0.15}s`;

        card.innerHTML = `
            <div class="dream-emoji">${dream.emoji}</div>
            <div class="dream-title">${dream.title}</div>
            <div class="dream-description">${dream.description}</div>
        `;

        DOM.dreamsGrid.appendChild(card);
    });
}

// ========================================
// COUNTER ANIMATION
// ========================================

function animateCounters() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && !entry.target.hasAttribute('data-counted')) {
                const counters = entry.target.querySelectorAll('.counter-value');
                counters.forEach((counter) => {
                    const target = parseInt(counter.getAttribute('data-target'));
                    animateCounter(counter, target);
                });
                entry.target.setAttribute('data-counted', 'true');
            }
        });
    });

    const counterSection = document.getElementById('counterSection');
    observer.observe(counterSection);
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const interval = 30;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
            playSound('successSound');
        } else {
            element.textContent = Math.floor(current);
        }
    }, interval);
}

// ========================================
// EVENT LISTENERS
// ========================================

function setupEventListeners() {
    // Theme toggle
    DOM.themeToggle.addEventListener('click', toggleTheme);

    // Music toggle
    DOM.musicToggle.addEventListener('click', toggleMusic);

    // Open story button
    DOM.openStoryBtn.addEventListener('click', () => {
        playSound('clickSound');
        triggerConfetti();
        setTimeout(() => {
            document.getElementById('loveLetterSection').scrollIntoView({ behavior: 'smooth' });
        }, 300);
    });

    // Lightbox close
    DOM.lightboxClose.addEventListener('click', closeLightbox);
    DOM.lightbox.addEventListener('click', (e) => {
        if (e.target === DOM.lightbox) closeLightbox();
    });

    // Secret unlock
    DOM.unlockBtn.addEventListener('click', checkSecret);
    DOM.secretInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') checkSecret();
    });

    // RSVP button
    DOM.rsvpBtn.addEventListener('click', () => {
        playSound('successSound');
        const time = DOM.invitationTime.value || '19:00';
        alert(`Thank you for RSVPing! I'll see you on June 8 at ${time} on Zoom. I love you! 💕`);
    });

    // Scroll tracking
    window.addEventListener('scroll', updateScrollProgress);

    // Custom cursor
    document.addEventListener('mousemove', updateCustomCursor);

    // Sound effects on button hover
    document.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('mouseenter', () => playSound('hoverSound'));
    });

    // Floating hearts on ending section
    document.addEventListener('scroll', createFloatingHearts);

    // Keyboard shortcuts
    document.addEventListener('keydown', handleKeyShortcuts);
}

// ========================================
// THEME TOGGLE
// ========================================

function toggleTheme() {
    darkMode = !darkMode;
    document.body.classList.toggle('light-theme');
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');

    const themeIcon = DOM.themeToggle.querySelector('.theme-icon');
    themeIcon.textContent = darkMode ? '🌙' : '☀️';

    playSound('clickSound');
}

function loadThemePreference() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    darkMode = savedTheme === 'dark';

    if (!darkMode) {
        document.body.classList.add('light-theme');
        DOM.themeToggle.querySelector('.theme-icon').textContent = '☀️';
    }
}

// ========================================
// MUSIC TOGGLE
// ========================================

function toggleMusic() {
    musicPlaying = !musicPlaying;

    if (musicPlaying) {
        DOM.bgMusic.volume = 0.3;
        DOM.bgMusic.play().catch(e => console.log('Audio autoplay prevented'));
        DOM.musicToggle.querySelector('.music-icon').textContent = '🔊';
    } else {
        DOM.bgMusic.pause();
        DOM.musicToggle.querySelector('.music-icon').textContent = '🔇';
    }

    localStorage.setItem('musicEnabled', musicPlaying);
}

function loadMusicPreference() {
    musicPlaying = localStorage.getItem('musicEnabled') === 'true';
    if (musicPlaying) {
        DOM.bgMusic.volume = 0.3;
        DOM.bgMusic.play().catch(e => console.log('Audio autoplay prevented'));
    }
}

// ========================================
// SOUND EFFECTS
// ========================================

function playSound(soundId) {
    const audio = document.getElementById(soundId);
    if (audio) {
        audio.currentTime = 0;
        audio.play().catch(e => console.log('Sound play prevented'));
    }
}

// ========================================
// SCROLL PROGRESS
// ========================================

function updateScrollProgress() {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / scrollHeight) * 100;
    DOM.scrollProgress.style.width = scrolled + '%';

    // Update navbar visibility
    if (window.scrollY > 100) {
        DOM.navbar.style.background = 'rgba(15, 15, 30, 0.95)';
    } else {
        DOM.navbar.style.background = 'rgba(15, 15, 30, 0.7)';
    }
}

// ========================================
// CUSTOM CURSOR
// ========================================

function updateCustomCursor(e) {
    DOM.customCursor.style.left = e.clientX - 20 + 'px';
    DOM.customCursor.style.top = e.clientY - 20 + 'px';
}

// ========================================
// CONFETTI ANIMATION
// ========================================

function triggerConfetti() {
    const colors = ['#ec4899', '#8b5cf6', '#3b82f6', '#fbbf24'];

    for (let i = 0; i < 50; i++) {
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

// ========================================
// FLOATING HEARTS
// ========================================

function createFloatingHearts() {
    const endingSection = document.getElementById('endingSection');
    const rect = endingSection.getBoundingClientRect();

    if (rect.top < window.innerHeight && rect.bottom > 0) {
        if (!endingSection.hasAttribute('data-hearts-created')) {
            for (let i = 0; i < 20; i++) {
                const heart = document.createElement('div');
                heart.className = 'heart';
                heart.textContent = '❤️';

                const left = Math.random() * 100;
                const delay = Math.random() * 2;
                const duration = Math.random() * 3 + 4;

                heart.style.left = left + '%';
                heart.style.bottom = '0';
                heart.style.animationDelay = delay + 's';
                heart.style.animationDuration = duration + 's';
                heart.style.fontSize = Math.random() * 20 + 20 + 'px';

                DOM.floatingHearts.appendChild(heart);

                setTimeout(() => heart.remove(), (delay + duration) * 1000);
            }

            endingSection.setAttribute('data-hearts-created', 'true');
        }
    }
}

// ========================================
// SECRET MESSAGE
// ========================================

function checkSecret() {
    const input = DOM.secretInput.value.toLowerCase().trim();
    const correct = ANNIVERSARY_CONFIG.secretPassword.toLowerCase().trim();

    if (input === correct) {
        playSound('successSound');
        triggerConfetti();

        DOM.secretLocked.classList.add('hidden');
        DOM.secretUnlocked.classList.remove('hidden');
        DOM.secretMessage.textContent = ANNIVERSARY_CONFIG.secretMessage;
    } else {
        playSound('clickSound');
        DOM.secretInput.style.animation = 'shake 0.5s ease';
        setTimeout(() => {
            DOM.secretInput.style.animation = '';
        }, 500);
    }
}

// ========================================
// KEYBOARD SHORTCUTS
// ========================================

function handleKeyShortcuts(e) {
    // M for music toggle
    if (e.key === 'm' || e.key === 'M') {
        toggleMusic();
    }

    // T for theme toggle
    if (e.key === 't' || e.key === 'T') {
        toggleTheme();
    }

    // ESC to close lightbox
    if (e.key === 'Escape') {
        closeLightbox();
    }
}

// ========================================
// SCROLL ANIMATION OBSERVER
// ========================================

const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0.7';
    observer.observe(section);
});

// ========================================
// PERFORMANCE OPTIMIZATION
// ========================================

// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img').forEach(img => imageObserver.observe(img));
}

// Handle window resize
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        const canvas = document.getElementById('starsCanvas');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }, 250);
});
