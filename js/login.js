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


// שליטה על השמע
const audioBtn = document.querySelector('button.audio');
const audioIcon = audioBtn.querySelector('button.audio i');
const bgAudio = document.getElementById('background-audio');

let audioEnabled = false;

// פונקציה לעדכון האייקון
function updateAudioIcon() {
    if (audioEnabled) {
        audioIcon.classList.remove('fa-volume-xmark');
        audioIcon.classList.add('fa-volume-high');
    } else {
        audioIcon.classList.remove('fa-volume-high');
        audioIcon.classList.add('fa-volume-xmark');
    }
}

// הפעלת/השתקת השמע בלחיצה
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
