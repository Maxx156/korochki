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

// Generate QR code pattern
function generateQRPattern(qrElement, isTelegram = false) {
    const gridSize = 21;
    const pattern = qrElement.querySelector('.qr-pattern') || qrElement.querySelector('.standard-pattern');
    
    if (!pattern) return;
    
    // Create deterministic pattern that looks like a real QR code
    const seed = isTelegram ? 12345 : 67890;
    const random = (x, y) => {
        const value = Math.sin(x * 12.9898 + y * 78.233 + seed) * 43758.5453;
        return value - Math.floor(value);
    };
    
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            // Skip finder pattern areas (corners)
            if ((i < 6 && j < 6) || (i < 6 && j >= gridSize - 6) || (i >= gridSize - 6 && j < 6)) {
                continue;
            }
            // Skip center logo area for Telegram
            if (isTelegram && i >= 8 && i < 13 && j >= 8 && j < 13) {
                continue;
            }
            
            // Create more realistic QR pattern
            const shouldFill = random(i, j) > 0.45;
            if (shouldFill) {
                const module = document.createElement('div');
                module.className = 'qr-module';
                module.style.gridColumn = j + 1;
                module.style.gridRow = i + 1;
                pattern.appendChild(module);
            }
        }
    }
}

// Initialize QR codes
document.addEventListener('DOMContentLoaded', () => {
    const telegramQR = document.querySelector('.telegram-qr .qr-code');
    const vkQR = document.querySelector('.vk-qr .qr-code.standard');
    
    if (telegramQR) {
        generateQRPattern(telegramQR, true);
    }
    
    if (vkQR) {
        generateQRPattern(vkQR, false);
    }
});

// Animate QR cards on scroll
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

document.querySelectorAll('.qr-card, .contact-info-section').forEach(card => {
    cardObserver.observe(card);
});

// Add hover effects to QR cards
document.querySelectorAll('.qr-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Animate profile avatar
const profileAvatar = document.querySelector('.profile-avatar');
if (profileAvatar) {
    profileAvatar.style.opacity = '0';
    profileAvatar.style.transform = 'scale(0.8)';
    setTimeout(() => {
        profileAvatar.style.transition = 'all 0.5s ease';
        profileAvatar.style.opacity = '1';
        profileAvatar.style.transform = 'scale(1)';
    }, 300);
}

// Animate QR center logo
const centerLogo = document.querySelector('.qr-center-logo');
if (centerLogo) {
    setInterval(() => {
        centerLogo.style.transform = 'translate(-50%, -50%) rotate(5deg)';
        setTimeout(() => {
            centerLogo.style.transform = 'translate(-50%, -50%) rotate(0deg)';
        }, 200);
    }, 3000);
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

// Add click animation to contact items
document.querySelectorAll('.contact-item').forEach(item => {
    item.addEventListener('click', function() {
        const value = this.querySelector('.contact-value').textContent;
        navigator.clipboard.writeText(value).then(() => {
            const originalBg = this.style.backgroundColor;
            this.style.backgroundColor = '#4169E1';
            this.style.color = '#fff';
            setTimeout(() => {
                this.style.backgroundColor = originalBg;
                this.style.color = '';
            }, 500);
        });
    });
    
    item.style.cursor = 'pointer';
});

// Console welcome message
console.log('%cСоцсети и контакты - Корочки.есть', 'font-size: 24px; font-weight: bold; color: #4169E1;');
console.log('%cСканируйте QR-коды для связи!', 'font-size: 14px; color: #87CEEB;');

