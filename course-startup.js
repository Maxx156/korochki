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
    const people = illustration.querySelectorAll('.person');
    const icons = illustration.querySelectorAll('.icon');
    
    setTimeout(() => {
        people.forEach((person, index) => {
            person.style.animation = 'personAppear 0.8s ease forwards';
            person.style.animationDelay = `${index * 0.1}s`;
            person.style.opacity = '1';
        });
        
        icons.forEach((icon, index) => {
            icon.style.animation = 'iconFloat 2s ease-in-out infinite';
            icon.style.animationDelay = `${index * 0.2}s`;
        });
    }, 800);
}

// Animate chart bars
const chartBars = document.querySelectorAll('.chart-bar');
chartBars.forEach((bar, index) => {
    bar.style.height = '0';
    setTimeout(() => {
        bar.style.transition = 'height 0.5s ease';
        bar.style.height = '';
    }, 1500 + index * 100);
});

// Animate IP sign
const ipSign = document.querySelector('.ip-sign');
if (ipSign) {
    ipSign.style.animation = 'signBounce 2s ease-in-out infinite';
}

// Add hover effect to people
document.querySelectorAll('.person').forEach(person => {
    person.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1) translateY(-5px)';
        this.style.transition = 'all 0.3s ease';
    });
    
    person.addEventListener('mouseleave', function() {
        if (!this.classList.contains('person-center')) {
            this.style.transform = 'scale(1) translateY(0)';
        } else {
            this.style.transform = 'scale(1.1)';
        }
    });
});

// Animate icons on hover
document.querySelectorAll('.icon').forEach(icon => {
    icon.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.2) rotate(5deg)';
        this.style.transition = 'all 0.3s ease';
    });
    
    icon.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
});

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

// Animate connection lines
const connectionLines = document.querySelector('.connection-lines');
if (connectionLines) {
    const lines = connectionLines.querySelectorAll('line');
    lines.forEach((line, index) => {
        const length = line.getTotalLength();
        line.style.strokeDasharray = length;
        line.style.strokeDashoffset = length;
        
        setTimeout(() => {
            line.style.transition = 'stroke-dashoffset 1s ease';
            line.style.strokeDashoffset = 0;
        }, 1000 + index * 200);
    });
}

// Console welcome message
console.log('%cПредпринимательство и стартапы - Корочки.есть', 'font-size: 24px; font-weight: bold; color: #4169E1;');
console.log('%cЗапустите свой успешный стартап!', 'font-size: 14px; color: #87CEEB;');

