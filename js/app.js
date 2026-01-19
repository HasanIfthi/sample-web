// script.js
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Parallax watermark effect
    window.addEventListener('scroll', () => {
        document.querySelectorAll('.watermark').forEach(wm => {
            const section = wm.closest('.section');
            const rect = section.getBoundingClientRect();
            
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const progress = window.scrollY - section.offsetTop;
                wm.style.transform = `translate(-50%, calc(-50% + ${progress * 0.18}px))`;
            }
        });
    });
});