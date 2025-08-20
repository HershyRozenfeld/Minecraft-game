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