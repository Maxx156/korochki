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

// Animate map section on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const mapObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
            entry.target.style.opacity = '1';
        }
    });
}, observerOptions);

const mapSection = document.querySelector('.map-section');
if (mapSection) {
    mapObserver.observe(mapSection);
}

// Animate contact info section on scroll
const contactObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
            entry.target.style.opacity = '1';
            
            // Animate contact items
            const items = entry.target.querySelectorAll('.contact-intro, .contact-item');
            items.forEach((item, index) => {
                setTimeout(() => {
                    item.style.animationPlayState = 'running';
                    item.style.opacity = '1';
                }, index * 100);
            });
        }
    });
}, observerOptions);

const contactSection = document.querySelector('.contact-info-section');
if (contactSection) {
    contactObserver.observe(contactSection);
}

// Add hover effect to contact box
const contactBox = document.querySelector('.contact-box');
if (contactBox) {
    contactBox.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.01)';
    });
    
    contactBox.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
}

// Animate markers on map
document.querySelectorAll('.marker').forEach((marker, index) => {
    marker.style.opacity = '0';
    marker.style.transform = 'scale(0)';
    setTimeout(() => {
        marker.style.transition = 'all 0.5s ease';
        marker.style.opacity = '1';
        marker.style.transform = 'scale(1)';
    }, 500 + index * 200);
});

// Add click effect to markers
document.querySelectorAll('.marker').forEach(marker => {
    marker.addEventListener('click', function() {
        this.style.transform = 'scale(1.2)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
    });
});

// Animate buildings on map
document.querySelectorAll('.building').forEach((building, index) => {
    building.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.zIndex = '20';
        this.style.transition = 'all 0.3s ease';
    });
    
    building.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.zIndex = '1';
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

// Parallax effect for map on scroll
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const map = document.querySelector('.map-section');
    
    if (map) {
        const mapTop = map.getBoundingClientRect().top + window.scrollY;
        const speed = 0.1;
        const offset = (scrolled - mapTop + window.innerHeight) * speed;
        
        if (Math.abs(offset) < 50) {
            map.style.transform = `translateY(${offset}px)`;
        }
    }
    
    lastScroll = scrolled;
});

// Add interactive map zoom on hover
const mapWrapper = document.querySelector('.map-wrapper');
if (mapWrapper) {
    mapWrapper.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.02)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    mapWrapper.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
}

// Make contact items clickable (copy to clipboard)
document.querySelectorAll('.contact-item').forEach(item => {
    item.style.cursor = 'pointer';
    item.addEventListener('click', function() {
        const text = this.textContent;
        const strongText = this.querySelector('strong');
        if (strongText) {
            const textToCopy = strongText.textContent;
            navigator.clipboard.writeText(textToCopy).then(() => {
                // Visual feedback
                const originalBg = this.style.backgroundColor;
                this.style.backgroundColor = '#4169E1';
                this.style.color = '#fff';
                setTimeout(() => {
                    this.style.backgroundColor = originalBg;
                    this.style.color = '#000';
                }, 500);
            });
        }
    });
});

// Console welcome message
console.log('%cКонтакты - Корочки.есть', 'font-size: 24px; font-weight: bold; color: #4169E1;');
console.log('%cСвяжитесь с нами!', 'font-size: 14px; color: #87CEEB;');

