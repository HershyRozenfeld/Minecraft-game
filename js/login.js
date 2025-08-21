const fsBtn = document.getElementById('fullscreen-btn');

fsBtn.addEventListener('click', () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            alert(`שגיאה במסך מלא: ${err.message}`);
        });
    } else {
        document.exitFullscreen();
    }
});

// Audio control
const audioBtn = document.querySelector('button.audio');
const audioIcon = audioBtn.querySelector('button.audio i');
const bgAudio = document.getElementById('background-audio');

let audioEnabled = false;

// Update audio icon function
function updateAudioIcon() {
    if (audioEnabled) {
        audioIcon.classList.remove('fa-volume-xmark');
        audioIcon.classList.add('fa-volume-high');
    } else {
        audioIcon.classList.remove('fa-volume-high');
        audioIcon.classList.add('fa-volume-xmark');
    }
}

// Toggle audio on click
audioBtn.addEventListener('click', () => {
    audioEnabled = !audioEnabled;
    if (audioEnabled) {
        bgAudio.volume = 1;
        bgAudio.play();
    } else {
        bgAudio.pause();
    }
    updateAudioIcon();
});

updateAudioIcon();

// Help modal functionality
const helpBtn = document.getElementById('help-btn');
const helpModal = document.getElementById('helpModal');
const closeModalBtn = document.getElementById('closeModal');

// Open help modal
function openHelpModal() {
    helpModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close help modal
function closeHelpModal() {
    helpModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Event listeners for modal
helpBtn.addEventListener('click', openHelpModal);
closeModalBtn.addEventListener('click', closeHelpModal);

// Close modal when clicking outside the content
helpModal.addEventListener('click', (e) => {
    if (e.target === helpModal) {
        closeHelpModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && helpModal.classList.contains('active')) {
        closeHelpModal();
    }
});