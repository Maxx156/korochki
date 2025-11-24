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

// Animate info blocks on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const blockObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
            entry.target.style.opacity = '1';
        }
    });
}, observerOptions);

document.querySelectorAll('.info-block, .illustration-block, .tariff-card').forEach(block => {
    blockObserver.observe(block);
});

// Add hover effects to info blocks
document.querySelectorAll('.info-block').forEach(block => {
    block.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.01)';
    });
    
    block.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Animate program items
document.querySelectorAll('.program-item').forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-20px)';
    setTimeout(() => {
        item.style.transition = 'all 0.5s ease';
        item.style.opacity = '1';
        item.style.transform = 'translateX(0)';
    }, 600 + index * 100);
});

// Animate illustration elements
const illustration = document.querySelector('.illustration');
if (illustration) {
    const person = illustration.querySelector('.person');
    const phone = illustration.querySelector('.phone');
    const icons = illustration.querySelectorAll('.icon');
    const charts = illustration.querySelectorAll('.chart-left > *');
    const target = illustration.querySelector('.target');
    
    setTimeout(() => {
        if (person) {
            person.style.animation = 'fadeInLeft 0.8s ease forwards';
        }
        if (phone) {
            phone.style.animation = 'fadeInUp 0.8s ease forwards';
            phone.style.animationDelay = '0.2s';
        }
        icons.forEach((icon, index) => {
            icon.style.animation = 'iconFloat 2s ease-in-out infinite';
            icon.style.animationDelay = `${index * 0.3}s`;
        });
        if (target) {
            target.style.animation = 'fadeInRight 0.8s ease forwards';
            target.style.animationDelay = '0.4s';
        }
    }, 800);
}

// Animate phone screen content
const phoneScreen = document.querySelector('.phone-screen');
if (phoneScreen) {
    const graphBars = phoneScreen.querySelectorAll('.bar');
    const chatBubbles = phoneScreen.querySelectorAll('.chat-bubble');
    
    setTimeout(() => {
        graphBars.forEach((bar, index) => {
            bar.style.height = '0';
            setTimeout(() => {
                bar.style.transition = 'height 0.5s ease';
                bar.style.height = '';
            }, index * 100);
        });
        
        chatBubbles.forEach((bubble, index) => {
            bubble.style.opacity = '0';
            bubble.style.transform = 'scale(0)';
            setTimeout(() => {
                bubble.style.transition = 'all 0.3s ease';
                bubble.style.opacity = '1';
                bubble.style.transform = 'scale(1)';
            }, 1000 + index * 200);
        });
    }, 1000);
}

// Animate tariff cards
document.querySelectorAll('.tariff-card').forEach((card, index) => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.02)';
        this.style.zIndex = '10';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.zIndex = '1';
    });
});

// Add click effect to tariff cards
document.querySelectorAll('.tariff-card').forEach(card => {
    card.addEventListener('click', function() {
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });
});

// Animate target arrow
const arrow = document.querySelector('.arrow');
if (arrow) {
    setInterval(() => {
        arrow.style.transform = 'translateY(-50%) translateX(5px)';
        setTimeout(() => {
            arrow.style.transform = 'translateY(-50%) translateX(0)';
        }, 300);
    }, 2000);
}

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

// Parallax effect on scroll
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const illustration = document.querySelector('.illustration-block');
    
    if (illustration) {
        const illustrationTop = illustration.getBoundingClientRect().top + window.scrollY;
        const speed = 0.1;
        const offset = (scrolled - illustrationTop + window.innerHeight) * speed;
        
        if (Math.abs(offset) < 50) {
            illustration.style.transform = `translateY(${offset}px)`;
        }
    }
    
    lastScroll = scrolled;
});

// Animate person looking at phone
const person = document.querySelector('.person');
const phone = document.querySelector('.phone');
if (person && phone) {
    setInterval(() => {
        const eyes = person.querySelectorAll('.eye');
        eyes.forEach(eye => {
            eye.style.height = '2px';
            setTimeout(() => {
                eye.style.height = '8px';
            }, 200);
        });
    }, 3000);
}

// Console welcome message
console.log('%cПродажа и маркетинг - Корочки.есть', 'font-size: 24px; font-weight: bold; color: #4169E1;');
console.log('%cНачните свой путь к успеху в маркетинге!', 'font-size: 14px; color: #87CEEB;');

