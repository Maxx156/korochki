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

// Parallax effect for decorative elements
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const decorativeElements = document.querySelectorAll('.decorative-elements > *');
    
    decorativeElements.forEach((element, index) => {
        const speed = 0.3 + (index % 3) * 0.15;
        const rotation = scrolled * 0.05;
        element.style.transform = `translateY(${scrolled * speed}px) rotate(${rotation}deg)`;
    });
    
    lastScroll = scrolled;
});

// Animate characters on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
            entry.target.style.opacity = '1';
        }
    });
}, observerOptions);

document.querySelectorAll('.character').forEach(char => {
    observer.observe(char);
});

// Add hover effects to characters
document.querySelectorAll('.character').forEach(char => {
    char.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.15) translateY(-8px)';
        this.style.transition = 'all 0.3s ease';
        this.style.zIndex = '10';
    });
    
    char.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) translateY(0)';
        this.style.zIndex = '1';
    });
});

// Animate text on load
const textElements = document.querySelectorAll('.main-text');
textElements.forEach((element, index) => {
    element.style.opacity = '0';
    setTimeout(() => {
        element.style.transition = 'opacity 1s ease';
        element.style.opacity = '1';
    }, 500 + index * 200);
});

// Add pulse animation to logo
const logo = document.querySelector('.logo');
logo.addEventListener('mouseenter', function() {
    this.style.animation = 'float 0.5s ease-in-out infinite';
});

logo.addEventListener('mouseleave', function() {
    this.style.animation = 'float 3s ease-in-out infinite';
});

// Add click animation to social icons
document.querySelectorAll('.social-icon').forEach(icon => {
    icon.addEventListener('click', function(e) {
        e.preventDefault();
        this.style.transform = 'scale(0.9)';
        setTimeout(() => {
            this.style.transform = 'scale(1.2) rotate(5deg)';
        }, 100);
    });
});

// Animate footer links on hover
document.querySelectorAll('.footer-link').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.paddingLeft = '20px';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.paddingLeft = '15px';
    });
});

// Add bounce animation to books
const books = document.querySelectorAll('.book');
books.forEach((book, index) => {
    setInterval(() => {
        book.style.transform = 'translateY(-3px)';
        setTimeout(() => {
            book.style.transform = 'translateY(0)';
        }, 200);
    }, 3000 + index * 500);
});

// Animate skateboard movement
const skateboard = document.querySelector('.skateboard');
if (skateboard) {
    let direction = 1;
    setInterval(() => {
        const currentTransform = skateboard.style.transform || 'translateX(0)';
        const currentX = parseInt(currentTransform.match(/-?\d+/) || [0]) || 0;
        const newX = currentX + (direction * 5);
        
        if (Math.abs(newX) > 15) {
            direction *= -1;
        }
        
        skateboard.style.transform = `translateX(${newX}px)`;
    }, 100);
}

// Add sparkle effect to stars
const stars = document.querySelectorAll('.decor-star, .star-burst');
stars.forEach(star => {
    setInterval(() => {
        star.style.opacity = '0.3';
        setTimeout(() => {
            star.style.opacity = '0.15';
        }, 300);
    }, 2000 + Math.random() * 2000);
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

// Add typing effect to main title (optional enhancement)
const mainTitle = document.querySelector('.main-title');
if (mainTitle) {
    const text = mainTitle.textContent;
    mainTitle.textContent = '';
    let i = 0;
    const typeInterval = setInterval(() => {
        if (i < text.length) {
            mainTitle.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(typeInterval);
        }
    }, 100);
}
// Ripple + переход по ссылке
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');

        // Если это якорь (#) — не трогаем (smooth scroll работает)
        if (href && href.startsWith('#')) return;

        // Если ссылка на другую страницу
        if (href && href !== window.location.pathname.split('/').pop()) {
            // Ripple
            const ripple = document.createElement('span');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.6)';
            ripple.style.width = ripple.style.height = '0';
            ripple.style.left = '50%';
            ripple.style.top = '50%';
            ripple.style.transform = 'translate(-50%, -50%)';
            ripple.style.animation = 'ripple 0.6s ease-out';
            ripple.style.pointerEvents = 'none';

            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);

            // Переход после анимации
            setTimeout(() => {
                window.location.href = href;
            }, 300);

            // Удаляем ripple
            setTimeout(() => ripple.remove(), 600);
        }
    });
});
// Console welcome message
console.log('%cКорочки.есть', 'font-size: 24px; font-weight: bold; color: #4169E1;');
console.log('%cДобро пожаловать на платформу обучения!', 'font-size: 14px; color: #87CEEB;');

