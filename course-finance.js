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

document.querySelectorAll('.info-block, .illustration-section, .tariff-card').forEach(block => {
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
    const symbols = illustration.querySelectorAll('.symbol');
    const icons = illustration.querySelectorAll('.icon');
    const graph = illustration.querySelector('.graph-up');
    
    setTimeout(() => {
        if (person) {
            person.style.animation = 'fadeInUp 0.8s ease forwards';
        }
        symbols.forEach((symbol, index) => {
            symbol.style.animation = 'symbolFloat 3s ease-in-out infinite';
            symbol.style.animationDelay = `${index * 0.5}s`;
        });
        icons.forEach((icon, index) => {
            icon.style.animation = 'iconFloat 2s ease-in-out infinite';
            icon.style.animationDelay = `${index * 0.3}s`;
        });
        if (graph) {
            graph.style.animation = 'graphGrow 1s ease forwards';
            graph.style.opacity = '1';
        }
    }, 800);
}

// Animate graph line
const graphLine = document.querySelector('.growth-graph polyline');
if (graphLine) {
    const pathLength = graphLine.getTotalLength();
    graphLine.style.strokeDasharray = pathLength;
    graphLine.style.strokeDashoffset = pathLength;
    
    setTimeout(() => {
        graphLine.style.transition = 'stroke-dashoffset 2s ease';
        graphLine.style.strokeDashoffset = 0;
    }, 1000);
}

// Animate symbols rotation
document.querySelectorAll('.symbol').forEach(symbol => {
    setInterval(() => {
        symbol.style.transform += ' rotate(360deg)';
    }, 5000);
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
        const speed = 0.05;
        const offset = (scrolled - illustrationTop + window.innerHeight) * speed;
        
        if (Math.abs(offset) < 30) {
            illustration.style.transform = `translateY(${offset}px)`;
        }
    }
    
    lastScroll = scrolled;
});

// Animate person blinking
const person = document.querySelector('.person');
if (person) {
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
console.log('%cФинансовая грамотность - Корочки.есть', 'font-size: 24px; font-weight: bold; color: #4169E1;');
console.log('%cДостигните финансовой свободы!', 'font-size: 14px; color: #87CEEB;');

