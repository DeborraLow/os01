window.addEventListener('touchstart', function touchDetector() {
    document.body.classList.add('touch');
    window.removeEventListener('touchstart', touchDetector);
});
