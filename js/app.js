// js/app.js

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. MOBILE MENU LOGIC ---
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const navbar = document.querySelector('.navbar');

    if(hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            mobileMenu.classList.toggle('open');
            
            const spans = hamburger.querySelectorAll('span');
            if(mobileMenu.classList.contains('open')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }

    const mobileLinks = mobileMenu ? mobileMenu.querySelectorAll('a') : [];
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
            if(hamburger) {
                const spans = hamburger.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    });


    // --- 2. NAVBAR SCROLL SHADOW ---
    window.addEventListener('scroll', () => {
        if(navbar) {
            if (window.scrollY > 50) {
                navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
                navbar.style.borderBottom = 'none';
            } else {
                navbar.style.boxShadow = 'none';
                navbar.style.borderBottom = '1px solid rgba(0,0,0,0.05)';
            }
        }
    });


    // --- 3. PRODUCTS FILTER LOGIC ---
    const filterBtns = document.querySelectorAll('.tab-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if(filterBtns.length > 0 && projectCards.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                
                // Add active class to the clicked button
                btn.classList.add('active');

                // Get the filter value (e.g., 'all', 'construction', 'it')
                const filterValue = btn.getAttribute('data-filter');

                // Show/Hide cards based on category
                projectCards.forEach(card => {
                    const category = card.getAttribute('data-category');
                    
                    if(filterValue === 'all' || filterValue === category) {
                        card.style.display = 'flex'; // Use flex to maintain styling
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }


    // --- 4. WHATSAPP FORM SUBMISSION LOGIC ---
    const whatsappForm = document.getElementById('whatsappForm');
    
    if(whatsappForm) {
        whatsappForm.addEventListener('submit', function(e) {
            e.preventDefault(); 

            const name = document.getElementById('waName').value;
            const email = document.getElementById('waEmail').value;
            const subject = document.getElementById('waSubject').value;
            const sector = document.getElementById('waSector').value;
            const message = document.getElementById('waMessage').value;

            // Oyage WhatsApp Number Eka
            const phoneNumber = "94741926797";

            const textMessage = `Hello BrikX, I have an inquiry.\n\n` +
                                `*Name:* ${name}\n` +
                                `*Email:* ${email}\n` +
                                `*Sector:* ${sector}\n` +
                                `*Subject:* ${subject || 'No Subject'}\n\n` +
                                `*Message:*\n${message}`;

            const encodedText = encodeURIComponent(textMessage);
            const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedText}`;

            window.open(whatsappURL, '_blank');
        });
    }

});