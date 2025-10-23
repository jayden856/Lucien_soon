// Header Scroll Effect with Auto Hide/Show
let lastScrollTop = 0;
let scrollTimer = null;
let isScrolling = false;

window.addEventListener('scroll', () => {
    const header = document.querySelector('.cr-header');
    const currentScroll = window.scrollY;
    
    // Add scrolled class when scrolled past 50px
    if (currentScroll > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    // Hide header while scrolling (except at top of page)
    if (currentScroll > 100) {
        header.classList.add('header-hidden');
        isScrolling = true;
    }
    
    // Clear the previous timer
    clearTimeout(scrollTimer);
    
    // Set a new timer to detect when scrolling stops
    scrollTimer = setTimeout(() => {
        // Show header when scrolling stops
        header.classList.remove('header-hidden');
        isScrolling = false;
    }, 400); // Show header 400ms after scrolling stops
    
    lastScrollTop = currentScroll;
});

// Scroll Animation Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all animate-on-scroll elements
document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
});

// Enhanced Neon Text Effect with Random Flicker
function addNeonFlicker() {
    const neonText = document.querySelector('.neon-text');
    if (!neonText) return;
    
    setInterval(() => {
        if (Math.random() > 0.95) { // 5% chance to flicker
            neonText.style.opacity = '0.8';
            setTimeout(() => {
                neonText.style.opacity = '1';
            }, 50);
        }
    }, 100);
}

addNeonFlicker();

// Smooth Scroll for Anchor Links
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

// Particle Animation
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        // Random animation delay and duration
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 15) + 's';
        
        // Random size
        const size = Math.random() * 3 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        particlesContainer.appendChild(particle);
    }
}

createParticles();

// Hero Background Animation
let currentSlide = 0;
const heroSlides = document.querySelectorAll('.hero-slide');

function changeHeroBackground() {
    if (heroSlides.length > 1) {
        heroSlides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % heroSlides.length;
        heroSlides[currentSlide].classList.add('active');
    }
}

// Change background every 8 seconds
setInterval(changeHeroBackground, 8000);

// Enhanced Particle System for Coming Soon Section
function createEnhancedParticles() {
    const comingSoonSection = document.querySelector('.cr-coming-soon-section');
    if (!comingSoonSection) return;
    
    const particleContainer = document.createElement('div');
    particleContainer.className = 'enhanced-particles';
    particleContainer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 2;
    `;
    
    comingSoonSection.appendChild(particleContainer);
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'enhanced-particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 1}px;
            height: ${Math.random() * 4 + 1}px;
            background: ${Math.random() > 0.5 ? '#FF5E00' : '#FFB800'};
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            opacity: ${Math.random() * 0.3 + 0.1};
            animation: enhanced-float ${Math.random() * 10 + 10}s infinite ease-in-out;
            animation-delay: ${Math.random() * 5}s;
        `;
        particleContainer.appendChild(particle);
    }
}

// Add enhanced particle animation
const enhancedParticleStyle = document.createElement('style');
enhancedParticleStyle.textContent = `
    @keyframes enhanced-float {
        0%, 100% {
            transform: translate(0, 0) scale(1);
        }
        25% {
            transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) scale(1.2);
        }
        50% {
            transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) scale(0.8);
        }
        75% {
            transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) scale(1.1);
        }
    }
`;
document.head.appendChild(enhancedParticleStyle);

createEnhancedParticles();

// Parallax Effect on Hero Section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.start-hero-content');
    if (heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroContent.style.opacity = 1 - (scrolled / 600);
    }
});

// Dynamic color shifting for neon text
function addColorShift() {
    const neonText = document.querySelector('.neon-text');
    if (!neonText) return;
    
    let hue = 15; // Start with orange
    setInterval(() => {
        hue = (hue + 0.5) % 60; // Cycle through orange to yellow range
        const color = `hsl(${hue}, 100%, 50%)`;
        neonText.style.color = color;
    }, 50);
}

// Uncomment to enable color shifting (optional)
// addColorShift();

// Add heart burst animation
const heartStyle = document.createElement('style');
heartStyle.textContent = `
    @keyframes heartBurst {
        0% {
            opacity: 1;
            transform: translate(0, 0) scale(0) rotate(0deg);
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0;
            transform: translate(var(--end-x), var(--end-y)) scale(1) rotate(var(--rotation));
        }
    }
`;
document.head.appendChild(heartStyle);

// Coming Soon Click Effect - Enhanced Fireworks and Shake
document.addEventListener('DOMContentLoaded', () => {
    const neonText = document.querySelector('.neon-text');
    const comingSoonSection = document.querySelector('.cr-coming-soon-section');
    
    if (neonText && comingSoonSection) {
        neonText.style.cursor = 'pointer';
        
        // Add haptic feedback (vibration) support
        const triggerVibration = () => {
            if ('vibrate' in navigator) {
                // Vibration pattern: [vibrate, pause, vibrate, pause, ...]
                navigator.vibrate([100, 50, 100, 50, 200]);
            }
        };
        
        neonText.addEventListener('click', (e) => {
            const rect = neonText.getBoundingClientRect();
            
            // Trigger vibration on supported devices
            triggerVibration();
            
            // Create multiple waves of fireworks around the text
            createEnhancedFireworksAround(rect);
            
            // Create explosion effect at center
            createCenterExplosion(rect);
            
            // Add shake effect to text and section
            neonText.classList.add('shake-effect');
            comingSoonSection.classList.add('screen-shake');
            
            // Flash effect
            createFlashEffect();
            
            // Remove shake classes after animation
            setTimeout(() => {
                neonText.classList.remove('shake-effect');
                comingSoonSection.classList.remove('screen-shake');
            }, 600);
        });
        
        // Add hover effect with enhanced vibration and shake
        // Create a precise hover zone that matches the text size closely
        const createHoverZone = () => {
            const hoverZone = document.createElement('div');
            hoverZone.style.cssText = `
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 105%;
                height: 115%;
                z-index: 9;
                pointer-events: all;
                cursor: pointer;
                -webkit-tap-highlight-color: transparent;
            `;
            neonText.parentElement.style.position = 'relative';
            neonText.parentElement.appendChild(hoverZone);
            
            // Add click event to hover zone for maximum sensitivity
            const handleClick = (e) => {
                const rect = neonText.getBoundingClientRect();
                
                // Trigger vibration on supported devices
                triggerVibration();
                
                // Create multiple waves of fireworks around the text
                createEnhancedFireworksAround(rect);
                
                // Create explosion effect at center
                createCenterExplosion(rect);
                
                // Add shake effect to text and section
                neonText.classList.add('shake-effect');
                comingSoonSection.classList.add('screen-shake');
                
                // Flash effect
                createFlashEffect();
                
                // Remove shake classes after animation
                setTimeout(() => {
                    neonText.classList.remove('shake-effect');
                    comingSoonSection.classList.remove('screen-shake');
                }, 600);
            };
            
            // Add both click and touch events for maximum responsiveness
            let lastClickTime = 0;
            const debounceDelay = 300; // Minimum time between clicks in ms
            
            const debouncedClick = (e) => {
                const now = Date.now();
                if (now - lastClickTime < debounceDelay) {
                    return; // Ignore rapid successive clicks
                }
                lastClickTime = now;
                handleClick(e);
            };
            
            // Desktop click
            hoverZone.addEventListener('click', debouncedClick);
            
            // Mobile touch - use touchend for better responsiveness
            let touchStartTime = 0;
            hoverZone.addEventListener('touchstart', (e) => {
                touchStartTime = Date.now();
            }, { passive: true });
            
            hoverZone.addEventListener('touchend', (e) => {
                e.preventDefault(); // Prevent 300ms delay
                const touchDuration = Date.now() - touchStartTime;
                // Only trigger if it's a tap (not a long press or swipe)
                if (touchDuration < 500) {
                    debouncedClick(e);
                }
            }, { passive: false });
            
            hoverZone.addEventListener('mouseenter', () => {
                if ('vibrate' in navigator) {
                    // Gentle vibration pattern
                    navigator.vibrate([30, 20, 30]);
                }
                
                // Add subtle shake animation on hover
                neonText.classList.add('hover-shake');
                setTimeout(() => {
                    neonText.classList.remove('hover-shake');
                }, 800);
            });
        };
        
        createHoverZone();
    }
});

// Fireworks effect around text
function createFireworksAround(rect) {
    const fireworkCount = 16; // Number of firework bursts
    const margin = 150; // Extended area around text
    
    for (let i = 0; i < fireworkCount; i++) {
        setTimeout(() => {
            // Random position around and on the text
            const randomX = rect.left - margin + Math.random() * (rect.width + margin * 2);
            const randomY = rect.top - margin + Math.random() * (rect.height + margin * 2);
            
            const pos = { x: randomX, y: randomY };
            const particleCount = 25; // Particles per burst
            const colors = ['#FF5E00', '#FFB800', '#FF3D00', '#FFD700', '#FFA500'];
            
            for (let j = 0; j < particleCount; j++) {
                const particle = document.createElement('div');
                const angle = (Math.PI * 2 * j) / particleCount;
                const velocity = Math.random() * 120 + 90; // 90-210px
                const size = Math.random() * 5 + 2; // 2-7px
                
                const endX = pos.x + Math.cos(angle) * velocity;
                const endY = pos.y + Math.sin(angle) * velocity;
                
                particle.style.cssText = `
                    position: fixed;
                    left: ${pos.x}px;
                    top: ${pos.y}px;
                    width: ${size}px;
                    height: ${size}px;
                    background: ${colors[Math.floor(Math.random() * colors.length)]};
                    border-radius: 50%;
                    pointer-events: none;
                    z-index: 9999;
                    box-shadow: 0 0 12px ${colors[Math.floor(Math.random() * colors.length)]};
                    animation: fireworkBurst 1.5s ease-out forwards;
                    --end-x: ${endX - pos.x}px;
                    --end-y: ${endY - pos.y}px;
                `;
                
                document.body.appendChild(particle);
                
                setTimeout(() => {
                    if (particle.parentNode) {
                        particle.remove();
                    }
                }, 1500);
            }
        }, i * 80); // 80ms interval
    }
}


// Add fireworks and shake animations
const effectsStyle = document.createElement('style');
effectsStyle.textContent = `
    @keyframes fireworkBurst {
        0% {
            opacity: 1;
            transform: translate(0, 0) scale(1);
        }
        100% {
            opacity: 0;
            transform: translate(var(--end-x), var(--end-y)) scale(0);
        }
    }
    
    @keyframes shakeText {
        0%, 100% { transform: translate(0, 0) rotate(0deg); }
        10% { transform: translate(-8px, -5px) rotate(-2deg); }
        20% { transform: translate(8px, 5px) rotate(2deg); }
        30% { transform: translate(-8px, 5px) rotate(-1deg); }
        40% { transform: translate(8px, -5px) rotate(1deg); }
        50% { transform: translate(-8px, -5px) rotate(-2deg); }
        60% { transform: translate(8px, 5px) rotate(2deg); }
        70% { transform: translate(-8px, 5px) rotate(-1deg); }
        80% { transform: translate(8px, -5px) rotate(1deg); }
        90% { transform: translate(-4px, -2px) rotate(-0.5deg); }
    }
    
    @keyframes screenShake {
        0%, 100% { transform: translate(0, 0); }
        10% { transform: translate(-5px, -3px); }
        20% { transform: translate(5px, 3px); }
        30% { transform: translate(-5px, 3px); }
        40% { transform: translate(5px, -3px); }
        50% { transform: translate(-5px, -3px); }
        60% { transform: translate(5px, 3px); }
        70% { transform: translate(-5px, 3px); }
        80% { transform: translate(5px, -3px); }
        90% { transform: translate(-2px, -1px); }
    }
    
    .shake-effect {
        animation: shakeText 0.6s ease-in-out;
    }
    
    .screen-shake {
        animation: screenShake 0.6s ease-in-out;
    }
`;
document.head.appendChild(effectsStyle);

// Enhanced Fireworks Effect with Multiple Waves
function createEnhancedFireworksAround(rect) {
    const fireworkCount = 20; // Number of firework bursts
    const margin = 200; // Extended area around text
    
    for (let i = 0; i < fireworkCount; i++) {
        setTimeout(() => {
            // Random position around and on the text
            const randomX = rect.left - margin + Math.random() * (rect.width + margin * 2);
            const randomY = rect.top - margin + Math.random() * (rect.height + margin * 2);
            
            const pos = { x: randomX, y: randomY };
            const particleCount = 30; // More particles per burst
            const colors = ['#FF5E00', '#FFB800', '#FF3D00', '#FFD700', '#FFA500', '#FFDE59', '#FF6B00'];
            
            for (let j = 0; j < particleCount; j++) {
                const particle = document.createElement('div');
                const angle = (Math.PI * 2 * j) / particleCount;
                const velocity = Math.random() * 150 + 100; // 100-250px
                const size = Math.random() * 6 + 3; // 3-9px (larger particles)
                
                const endX = pos.x + Math.cos(angle) * velocity;
                const endY = pos.y + Math.sin(angle) * velocity;
                
                particle.style.cssText = `
                    position: fixed;
                    left: ${pos.x}px;
                    top: ${pos.y}px;
                    width: ${size}px;
                    height: ${size}px;
                    background: ${colors[Math.floor(Math.random() * colors.length)]};
                    border-radius: 50%;
                    pointer-events: none;
                    z-index: 9999;
                    box-shadow: 0 0 ${size * 3}px ${colors[Math.floor(Math.random() * colors.length)]},
                                0 0 ${size * 5}px ${colors[Math.floor(Math.random() * colors.length)]};
                    animation: enhanced-firework-burst 1.8s ease-out forwards;
                    --end-x: ${endX - pos.x}px;
                    --end-y: ${endY - pos.y}px;
                `;
                
                document.body.appendChild(particle);
                
                setTimeout(() => {
                    if (particle.parentNode) {
                        particle.remove();
                    }
                }, 1800);
            }
        }, i * 60); // 60ms interval for more rapid succession
    }
}

// Center Explosion Effect
function createCenterExplosion(rect) {
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const particleCount = 50;
    const colors = ['#FF5E00', '#FFB800', '#FF3D00', '#FFD700', '#FFA500', '#FFDE59'];
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        const angle = (Math.PI * 2 * i) / particleCount;
        const velocity = Math.random() * 300 + 150;
        const size = Math.random() * 8 + 4;
        
        const endX = centerX + Math.cos(angle) * velocity;
        const endY = centerY + Math.sin(angle) * velocity;
        
        particle.style.cssText = `
            position: fixed;
            left: ${centerX}px;
            top: ${centerY}px;
            width: ${size}px;
            height: ${size}px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            border-radius: 50%;
            pointer-events: none;
            z-index: 10000;
            box-shadow: 0 0 ${size * 4}px ${colors[Math.floor(Math.random() * colors.length)]};
            animation: center-explosion 2s ease-out forwards;
            --end-x: ${endX - centerX}px;
            --end-y: ${endY - centerY}px;
        `;
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            if (particle.parentNode) {
                particle.remove();
            }
        }, 2000);
    }
}

// Flash Effect
function createFlashEffect() {
    const flash = document.createElement('div');
    flash.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: radial-gradient(circle, rgba(255, 222, 89, 0.5) 0%, transparent 70%);
        pointer-events: none;
        z-index: 9998;
        animation: flash-fade 0.4s ease-out forwards;
    `;
    
    document.body.appendChild(flash);
    
    setTimeout(() => {
        if (flash.parentNode) {
            flash.remove();
        }
    }, 400);
}

// Add enhanced animation styles
const enhancedEffectsStyle = document.createElement('style');
enhancedEffectsStyle.textContent = `
    @keyframes enhanced-firework-burst {
        0% {
            opacity: 1;
            transform: translate(0, 0) scale(1);
        }
        70% {
            opacity: 0.8;
        }
        100% {
            opacity: 0;
            transform: translate(var(--end-x), var(--end-y)) scale(0.3);
        }
    }
    
    @keyframes center-explosion {
        0% {
            opacity: 1;
            transform: translate(0, 0) scale(1) rotate(0deg);
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0;
            transform: translate(var(--end-x), var(--end-y)) scale(0.2) rotate(360deg);
        }
    }
    
    @keyframes flash-fade {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
    
    @keyframes hover-shake {
        0%, 100% { transform: translate(0, 0) rotate(0deg); }
        10% { transform: translate(-2px, -1px) rotate(-0.5deg); }
        20% { transform: translate(2px, 1px) rotate(0.5deg); }
        30% { transform: translate(-2px, 1px) rotate(-0.5deg); }
        40% { transform: translate(2px, -1px) rotate(0.5deg); }
        50% { transform: translate(-2px, -1px) rotate(-0.5deg); }
        60% { transform: translate(2px, 1px) rotate(0.5deg); }
        70% { transform: translate(-2px, 1px) rotate(-0.5deg); }
        80% { transform: translate(2px, -1px) rotate(0.5deg); }
        90% { transform: translate(-1px, -0.5px) rotate(-0.2deg); }
    }
    
    .hover-shake {
        animation: hover-shake 0.8s ease-in-out;
    }
    
    .neon-text {
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        touch-action: manipulation;
    }
    
    @keyframes pulse-glow {
        0%, 100% {
            filter: drop-shadow(0 0 5px rgba(255, 222, 89, 0.3));
        }
        50% {
            filter: drop-shadow(0 0 20px rgba(255, 222, 89, 0.6));
        }
    }
    
    .neon-text:hover {
        animation: pulse-glow 1.5s ease-in-out infinite;
    }
`;
document.head.appendChild(enhancedEffectsStyle);

console.log('Lucien is ready to launch with spectacular effects!');

// Email Waitlist Validation and Submission
const emailInput = document.getElementById('waitlistEmail');
const joinBtn = document.getElementById('joinWaitlistBtn');
const feedback = document.getElementById('emailFeedback');

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show feedback message
function showFeedback(message, isSuccess) {
    feedback.textContent = message;
    feedback.style.opacity = '1';
    
    if (isSuccess) {
        feedback.className = 'text-sm font-normal opacity-100 transition-all duration-300 min-h-[20px] text-green-400';
    } else {
        feedback.className = 'text-sm font-normal opacity-100 transition-all duration-300 min-h-[20px] text-red-400';
    }
    
    // Hide feedback after 5 seconds for success messages
    if (isSuccess) {
        setTimeout(() => {
            feedback.style.opacity = '0';
        }, 5000);
    }
}

// Handle Join Waitlist button click
joinBtn.addEventListener('click', async () => {
    const email = emailInput.value.trim();
    
    // Validate email
    if (!email) {
        showFeedback('Please enter your email address', false);
        emailInput.focus();
        return;
    }
    
    if (!isValidEmail(email)) {
        showFeedback('Please enter a valid email address', false);
        emailInput.focus();
        return;
    }
    
    // Disable button and show loading state
    joinBtn.disabled = true;
    const originalText = joinBtn.querySelector('span').textContent;
    joinBtn.querySelector('span').textContent = 'Joining...';
    
    try {
        // Here you would typically send the email to your backend API
        // For now, we'll simulate an API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Store email in localStorage (optional, for demonstration)
        const waitlist = JSON.parse(localStorage.getItem('waitlist') || '[]');
        
        // Check if email already exists
        if (waitlist.includes(email)) {
            showFeedback('This email is already on the waitlist!', false);
        } else {
            waitlist.push(email);
            localStorage.setItem('waitlist', JSON.stringify(waitlist));
            showFeedback('🎉 Successfully joined the waitlist! We\'ll be in touch soon.', true);
            emailInput.value = '';
        }
        
        // TODO: Replace this with your actual API call
        // Example:
        // const response = await fetch('YOUR_API_ENDPOINT', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ email })
        // });
        // const data = await response.json();
        
    } catch (error) {
        showFeedback('Something went wrong. Please try again.', false);
        console.error('Error joining waitlist:', error);
    } finally {
        // Re-enable button
        joinBtn.disabled = false;
        joinBtn.querySelector('span').textContent = originalText;
    }
});

// Allow Enter key to submit
emailInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        joinBtn.click();
    }
});

// Clear error message when user starts typing
emailInput.addEventListener('input', () => {
    if (feedback.style.opacity === '1' && feedback.classList.contains('text-red-400')) {
        feedback.style.opacity = '0';
    }
});
