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

// Animate team cards on scroll
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

document.querySelectorAll('.team-card').forEach(card => {
    cardObserver.observe(card);
});

// Add hover effects to team cards
document.querySelectorAll('.team-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) scale(1.02)';
        const profilePic = this.querySelector('.profile-picture');
        if (profilePic) {
            profilePic.style.transform = 'scale(1.05)';
            profilePic.style.transition = 'transform 0.3s ease';
        }
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        const profilePic = this.querySelector('.profile-picture');
        if (profilePic) {
            profilePic.style.transform = 'scale(1)';
        }
    });
});

// Animate profile pictures on load
document.querySelectorAll('.profile-picture').forEach((pic, index) => {
    pic.style.opacity = '0';
    pic.style.transform = 'scale(0.8)';
    setTimeout(() => {
        pic.style.transition = 'all 0.5s ease';
        pic.style.opacity = '1';
        pic.style.transform = 'scale(1)';
    }, 300 + index * 200);
});

// Add subtle animation to avatars
document.querySelectorAll('.avatar').forEach(avatar => {
    setInterval(() => {
        const eyes = avatar.querySelectorAll('.eye');
        eyes.forEach(eye => {
            eye.style.height = '2px';
            setTimeout(() => {
                eye.style.height = '';
            }, 200);
        });
    }, 3000 + Math.random() * 2000);
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

// Parallax effect for team cards on scroll
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const cards = document.querySelectorAll('.team-card');
    
    cards.forEach((card, index) => {
        const cardTop = card.getBoundingClientRect().top + window.scrollY;
        const speed = 0.1 + (index % 3) * 0.05;
        const offset = (scrolled - cardTop + window.innerHeight) * speed;
        
        if (offset > -100 && offset < 100) {
            card.style.transform = `translateY(${offset}px)`;
        }
    });
    
    lastScroll = scrolled;
});

// Add click animation to team cards
document.querySelectorAll('.team-card').forEach(card => {
    card.addEventListener('click', function() {
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });
});

// Console welcome message
console.log('%cКоманда - Корочки.есть', 'font-size: 24px; font-weight: bold; color: #4169E1;');
console.log('%cЗнакомьтесь с нашей командой!', 'font-size: 14px; color: #87CEEB;');

