// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animate review cards on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
            entry.target.style.opacity = '1';
        }
    });
}, observerOptions);

document.querySelectorAll('.review-card').forEach(card => {
    cardObserver.observe(card);
});

// Add hover effects to review cards
document.querySelectorAll('.review-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.01)';
        const avatar = this.querySelector('.review-avatar svg');
        if (avatar) {
            avatar.style.animation = 'avatarPulse 0.5s ease-in-out infinite';
        }
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        const avatar = this.querySelector('.review-avatar svg');
        if (avatar) {
            avatar.style.animation = 'avatarPulse 1s ease-in-out infinite';
        }
    });
});

// Animate avatars on load
document.querySelectorAll('.review-avatar').forEach((avatar, index) => {
    avatar.style.opacity = '0';
    avatar.style.transform = 'scale(0.8)';
    setTimeout(() => {
        avatar.style.transition = 'all 0.3s ease';
        avatar.style.opacity = '1';
        avatar.style.transform = 'scale(1)';
    }, 100 + index * 100);
});

// Smooth header background on scroll
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(135, 206, 235, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.backgroundColor = '#87CEEB';
        header.style.backdropFilter = 'none';
    }
});

// Logo animation on hover
const logo = document.querySelector('.logo');
logo.addEventListener('mouseenter', function() {
    this.style.animation = 'float 0.5s ease-in-out infinite';
});

logo.addEventListener('mouseleave', function() {
    this.style.animation = 'float 3s ease-in-out infinite';
});

// Social icons animation
document.querySelectorAll('.social-icon').forEach(icon => {
    icon.addEventListener('click', function(e) {
        e.preventDefault();
        this.style.transform = 'scale(0.9)';
        setTimeout(() => {
            this.style.transform = 'scale(1.2) rotate(5deg)';
        }, 100);
    });
});

// Footer links animation
document.querySelectorAll('.footer-link').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.paddingLeft = '20px';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.paddingLeft = '15px';
    });
});

// Parallax effect for review cards on scroll
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const cards = document.querySelectorAll('.review-card');
    
    cards.forEach((card, index) => {
        const cardTop = card.getBoundingClientRect().top + window.scrollY;
        const speed = 0.05 + (index % 3) * 0.02;
        const offset = (scrolled - cardTop + window.innerHeight) * speed;
        
        if (Math.abs(offset) < 50) {
            card.style.transform = `translateY(${offset}px)`;
        }
    });
    
    lastScroll = scrolled;
});

// Add typing effect to review text (optional enhancement)
document.querySelectorAll('.review-text').forEach((text, index) => {
    const originalText = text.textContent;
    text.textContent = '';
    text.style.opacity = '0';
    
    setTimeout(() => {
        let i = 0;
        const typeInterval = setInterval(() => {
            if (i < originalText.length) {
                text.textContent += originalText.charAt(i);
                i++;
            } else {
                clearInterval(typeInterval);
                text.style.opacity = '1';
                text.style.transition = 'opacity 0.3s ease';
            }
        }, 5 + index * 2);
    }, 200 + index * 100);
});

// Add click animation to review cards
document.querySelectorAll('.review-card').forEach(card => {
    card.addEventListener('click', function() {
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });
});

// Console welcome message
console.log('%cОтзывы - Корочки.есть', 'font-size: 24px; font-weight: bold; color: #4169E1;');
console.log('%cЧитайте отзывы наших студентов!', 'font-size: 14px; color: #87CEEB;');

