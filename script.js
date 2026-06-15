// ================= NAVBAR SCROLL =================
const nav = document.getElementById('nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
    lastScroll = window.scrollY;
});

// ================= MOBILE MENU =================
const mobileToggle = document.getElementById('mobileToggle');
const navLinks = document.getElementById('navLinks');

if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
        mobileToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu on link click
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            mobileToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

// ================= SMOOTH SCROLL =================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (!href || href === '#') return;
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const offset = 100;
            const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    });
});

// ================= INTERSECTION OBSERVER =================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -60px 0px'
};

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            fadeObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card, .showcase-item, .privacy-card, .legal-content, .download-card, .premium-card, .section-header, .legal-card, .legal-section').forEach(el => {
    el.classList.add('fade-in');
    fadeObserver.observe(el);
});

// ================= ACTIVE NAV LINK =================
const navLinksAll = document.querySelectorAll('.nav-link, .nav-cta');
const sections = document.querySelectorAll('section[id]');

if (sections.length > 0 && navLinksAll.length > 0) {
    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinksAll.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, { threshold: 0.4 });

    sections.forEach(section => navObserver.observe(section));
}

// ================= PARALLAX =================
const orbs = document.querySelectorAll('.orb');
let ticking = false;

function updateParallax() {
    const scrolled = window.pageYOffset;
    orbs.forEach((orb, i) => {
        const speed = 0.15 + (i * 0.05);
        const yPos = scrolled * speed;
        orb.style.transform = `translateY(${yPos}px)`;
    });
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
    }
});

// ================= MOUSE PARALLAX ON PHONE =================
const phoneFrame = document.querySelector('.hero-visual .phone-frame');
const heroVisual = document.querySelector('.hero-visual');

if (phoneFrame && heroVisual) {
    heroVisual.addEventListener('mousemove', (e) => {
        const rect = heroVisual.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        phoneFrame.style.transform = `perspective(1000px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(${y * -10}px)`;
    });

    heroVisual.addEventListener('mouseleave', () => {
        phoneFrame.style.transform = '';
    });
}

// ================= COUNTER ANIMATION =================
function animateCounters() {
    const counters = document.querySelectorAll('.meta-num, .stats-num');
    counters.forEach(counter => {
        const text = counter.textContent;
        const match = text.match(/(\d+)/);
        if (!match) return;

        const target = parseInt(match[0]);
        const isFloat = text.includes('.');
        const suffix = text.replace(match[0], '').trim();
        const isDecimal = isFloat;

        let current = 0;
        const increment = target / 30;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            const display = isDecimal ? current.toFixed(1) : Math.floor(current);
            counter.innerHTML = display + suffix;
        }, 30);
    });
}

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const heroSection = document.querySelector('.hero');
if (heroSection) counterObserver.observe(heroSection);

// ================= RIPPLE EFFECT =================
document.querySelectorAll('.btn-primary, .btn-cta, .store-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple-effect 0.6s ease-out;
            pointer-events: none;
        `;

        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple-effect {
        to { transform: scale(2.5); opacity: 0; }
    }
`;
document.head.appendChild(rippleStyle);

// ================= EASTER EGG =================
let clickCount = 0;
const logo = document.querySelector('.logo');
if (logo) {
    logo.addEventListener('click', (e) => {
        const href = logo.getAttribute('href');
        // Only animate if it's a home link (not a cross-page link)
        if (href && !href.startsWith('index.html') && href !== '#' && !href.startsWith('http')) {
            e.preventDefault();
        }
        clickCount++;
        if (clickCount === 5) {
            logo.style.transform = 'rotate(360deg)';
            logo.style.transition = 'transform 1s ease';
            setTimeout(() => {
                logo.style.transform = '';
                clickCount = 0;
            }, 1000);
        }
    });
}

// ================= LANGUAGE TOGGLE =================
const langToggle = document.getElementById('langToggle');

if (langToggle && typeof setLang === 'function') {
    langToggle.addEventListener('click', () => {
        const current = getCurrentLang();
        const next = current === 'en' ? 'tr' : 'en';
        setLang(next);
    });
}

// ================= INITIAL TRANSLATIONS =================
// Apply translations as soon as i18n.js has loaded
if (typeof applyTranslations === 'function') {
    const initialLang = typeof getCurrentLang === 'function' ? getCurrentLang() : 'en';
    document.documentElement.lang = initialLang;
    // Wait a tick so all DOM nodes are available
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => applyTranslations(initialLang));
    } else {
        applyTranslations(initialLang);
    }
}
