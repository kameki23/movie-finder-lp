// Simple Scroll Reveal Animation
document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-zoom');

    const scrollReveal = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 150;

        reveals.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', scrollReveal);
    // Trigger once on load
    scrollReveal();
});
