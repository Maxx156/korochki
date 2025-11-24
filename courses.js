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

// Animate course cards on scroll
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

document.querySelectorAll('.course-card').forEach(card => {
    cardObserver.observe(card);
});

// Add hover effects to course cards
document.querySelectorAll('.course-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Animate icons on hover
document.querySelectorAll('.icon').forEach(icon => {
    icon.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.3) rotate(10deg)';
        this.style.transition = 'all 0.3s ease';
    });
    
    icon.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Animate megaphone waves continuously
const waves = document.querySelectorAll('.wave');
waves.forEach((wave, index) => {
    setInterval(() => {
        wave.style.animation = 'none';
        setTimeout(() => {
            wave.style.animation = 'waveExpand 2s ease-out infinite';
        }, 10);
    }, 2000 + index * 300);
});

// Animate coins rotation
const coins = document.querySelectorAll('.coin, .gold-coin');
coins.forEach(coin => {
    setInterval(() => {
        coin.style.transform += ' rotate(360deg)';
    }, 3000);
});

// Button click animation + REDIRECT
document.querySelectorAll('.course-button').forEach(button => {
    button.addEventListener('click', function(e) {
        // НЕ блокируем переход полностью
        // e.preventDefault();  // УДАЛЯЕМ ЭТУ СТРОКУ

        const href = this.getAttribute('href');
        if (!href || href === '#' || href === '') return;

        // Ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.5)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s ease-out';
        ripple.style.pointerEvents = 'none';

        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);

        // Button press effect
        this.style.transform = 'scale(0.95)';
        
        // После анимации — переходим
        setTimeout(() => {
            window.location.href = href;
        }, 300); // Даем анимации завершиться

        // Убираем ripple
        setTimeout(() => {
            ripple.remove();
            this.style.transform = 'scale(1)';
        }, 600);
    });
});

// Add ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Animate charts on card hover
document.querySelectorAll('.course-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        const bars = this.querySelectorAll('.bar');
        bars.forEach((bar, index) => {
            setTimeout(() => {
                bar.style.transform = 'scaleY(1.1)';
                setTimeout(() => {
                    bar.style.transform = 'scaleY(1)';
                }, 200);
            }, index * 100);
        });
    });
});

// Parallax effect for course cards on scroll
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const cards = document.querySelectorAll('.course-card');
    
    cards.forEach((card, index) => {
        const speed = 0.1 + (index % 3) * 0.05;
        const offset = (scrolled - card.offsetTop) * speed;
        if (Math.abs(offset) < 50) {
            card.style.transform = `translateY(${offset}px)`;
        }
    });
    
    lastScroll = scrolled;
});

// Animate laptop screen on hover
document.querySelectorAll('.laptop').forEach(laptop => {
    laptop.addEventListener('mouseenter', function() {
        const screen = this.querySelector('.laptop-screen');
        screen.style.boxShadow = '0 0 20px rgba(65, 105, 225, 0.5)';
        screen.style.transition = 'box-shadow 0.3s ease';
    });
    
    laptop.addEventListener('mouseleave', function() {
        const screen = this.querySelector('.laptop-screen');
        screen.style.boxShadow = 'none';
    });
});

// Animate briefcase on hover
document.querySelectorAll('.briefcase').forEach(briefcase => {
    briefcase.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) rotate(-5deg)';
        this.style.transition = 'all 0.3s ease';
    });
    
    briefcase.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) rotate(0deg)';
    });
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

// Console welcome message
console.log('%cКурсы - Корочки.есть', 'font-size: 24px; font-weight: bold; color: #4169E1;');
console.log('%cВыберите курс и начните обучение!', 'font-size: 14px; color: #87CEEB;');

