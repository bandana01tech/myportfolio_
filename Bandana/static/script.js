// ==============================
// CERTIFICATE SLIDER
// ==============================

const track = document.getElementById('track');
const slides = Array.from(track.children);
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const container = document.getElementById('certContainer');

let currentIndex = 0;

function updateSlidePosition() {
  const slideWidth = slides[0].getBoundingClientRect().width;
  track.style.transform = 'translateX(-' + (slideWidth * currentIndex) + 'px)';
}

// Next Button
nextBtn.addEventListener('click', () => {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    updateSlidePosition();
  } else {
    currentIndex = 0;
    updateSlidePosition();
  }
});

// Previous Button
prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlidePosition();
  } else {
    currentIndex = slides.length - 1;
    updateSlidePosition();
  }
});

// Touch Swipe Support
let touchStartX = 0;
let touchEndX = 0;

container.addEventListener('touchstart', e => {
  touchStartX = e.changedTouches[0].screenX;
}, false);

container.addEventListener('touchend', e => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
}, false);

function handleSwipe() {
  if (touchEndX < touchStartX - 50) {
    if (currentIndex < slides.length - 1) {
      currentIndex++;
      updateSlidePosition();
    }
  }
  
  if (touchEndX > touchStartX + 50) {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlidePosition();
    }
  }
}

// ==============================
// TYPING ANIMATION
// ==============================

const textElement = document.getElementById("typing-text");

const texts = [
  "Full Stack Developer",
  "Cybersecurity Learner",
  "Secure Web Builder"
];

let count = 0, index = 0;
let isDeleting = false;

function type() {
  const currentText = texts[count];
  
  if (isDeleting) {
    textElement.textContent = currentText.slice(0, --index);
  } else {
    textElement.textContent = currentText.slice(0, ++index);
  }

  let typeSpeed = isDeleting ? 50 : 100;

  if (!isDeleting && index === currentText.length) {
    isDeleting = true;
    typeSpeed = 1800;
  } else if (isDeleting && index === 0) {
    isDeleting = false;
    count = (count + 1) % texts.length;
    typeSpeed = 500;
  }

  setTimeout(type, typeSpeed);
}

document.addEventListener('DOMContentLoaded', type);
// ==============================
// ACHIEVEMENTS SLIDER (5 SLIDES)
// ==============================

const achievementsTrack = document.getElementById('achievementsTrack');
const achievementSlides = Array.from(achievementsTrack.children);
const nextAchievementBtn = document.getElementById('nextAchievementBtn');
const prevAchievementBtn = document.getElementById('prevAchievementBtn');
const achievementsContainer = document.getElementById('achievementsContainer');

let currentAchievementIndex = 0;

// Update slide position
function updateAchievementPosition() {
  const slideWidth = achievementSlides[0].getBoundingClientRect().width;
  achievementsTrack.style.transform = 'translateX(-' + (slideWidth * currentAchievementIndex) + 'px)';
}

// Next Button
nextAchievementBtn.addEventListener('click', () => {
  if (currentAchievementIndex < achievementSlides.length - 1) {
    currentAchievementIndex++;
    updateAchievementPosition();
  } else {
    currentAchievementIndex = 0;
    updateAchievementPosition();
  }
});

// Previous Button
prevAchievementBtn.addEventListener('click', () => {
  if (currentAchievementIndex > 0) {
    currentAchievementIndex--;
    updateAchievementPosition();
  } else {
    currentAchievementIndex = achievementSlides.length - 1;
    updateAchievementPosition();
  }
});

// Touch Swipe Support
let touchStartXAchievements = 0;
let touchEndXAchievements = 0;

achievementsContainer.addEventListener('touchstart', e => {
  touchStartXAchievements = e.changedTouches[0].screenX;
}, false);

achievementsContainer.addEventListener('touchend', e => {
  touchEndXAchievements = e.changedTouches[0].screenX;
  handleAchievementsSwipe();
}, false);

function handleAchievementsSwipe() {
  if (touchEndXAchievements < touchStartXAchievements - 50) {
    if (currentAchievementIndex < achievementSlides.length - 1) {
      currentAchievementIndex++;
      updateAchievementPosition();
    }
  }
  
  if (touchEndXAchievements > touchStartXAchievements + 50) {
    if (currentAchievementIndex > 0) {
      currentAchievementIndex--;
      updateAchievementPosition();
    }
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  updateAchievementPosition();
});