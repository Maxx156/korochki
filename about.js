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

// Animate content block on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const contentObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
            entry.target.style.opacity = '1';
            
            // Animate paragraphs
            const paragraphs = entry.target.querySelectorAll('.paragraph, .direction-item');
            paragraphs.forEach((para, index) => {
                setTimeout(() => {
                    para.style.animationPlayState = 'running';
                    para.style.opacity = '1';
                }, index * 100);
            });
        }
    });
}, observerOptions);

const contentBlock = document.querySelector('.content-block');
if (contentBlock) {
    contentObserver.observe(contentBlock);
}

// Add hover effect to content block
if (contentBlock) {
    contentBlock.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.01)';
        this.style.transition = 'all 0.3s ease';
    });
    
    contentBlock.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
}

// Animate bullet points
document.querySelectorAll('.direction-item').forEach((item, index) => {
    item.addEventListener('mouseenter', function() {
        const bullet = this;
        bullet.style.transform = 'translateX(5px)';
        bullet.style.transition = 'transform 0.3s ease';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0)';
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

// Add typing effect to paragraphs (optional enhancement)
document.querySelectorAll('.paragraph').forEach((para, index) => {
    const originalText = para.textContent;
    para.textContent = '';
    para.style.opacity = '0';
    
    setTimeout(() => {
        let i = 0;
        const typeInterval = setInterval(() => {
            if (i < originalText.length) {
                para.textContent += originalText.charAt(i);
                i++;
            } else {
                clearInterval(typeInterval);
                para.style.opacity = '1';
                para.style.transition = 'opacity 0.3s ease';
            }
        }, 10 + index * 2);
    }, 400 + index * 200);
});

// Parallax effect for content block on scroll
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const block = document.querySelector('.content-block');
    
    if (block) {
        const blockTop = block.getBoundingClientRect().top + window.scrollY;
        const speed = 0.1;
        const offset = (scrolled - blockTop + window.innerHeight) * speed;
        
        if (Math.abs(offset) < 50) {
            block.style.transform = `translateY(${offset}px)`;
        }
    }
    
    lastScroll = scrolled;
});

// Console welcome message
console.log('%cО нас - Корочки.есть', 'font-size: 24px; font-weight: bold; color: #4169E1;');
console.log('%cУзнайте больше о нашей платформе!', 'font-size: 14px; color: #87CEEB;');

