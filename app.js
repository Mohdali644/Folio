// --- 1. Custom Cursor ---
const cursorDot = document.getElementById('cursor-dot');
const cursorOutline = document.getElementById('cursor-outline');
const hoverLinks = document.querySelectorAll('a, button, input, textarea, .hover-link');

window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    // Dot follows instantly
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // Outline follows with slight delay via Web Animations API
    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});

// Cursor expansion effect on interactive elements
hoverLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursorOutline.classList.add('cursor-hover');
    });
    link.addEventListener('mouseleave', () => {
        cursorOutline.classList.remove('cursor-hover');
    });
});

/* --- DYNAMIC MOUSE TRACKING GLOW FOR ABOUT CARDS --- */
const glowCards = document.querySelectorAll('.glow-card');

glowCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        
        // Calculate mouse position relative to the card
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Update CSS variables for the radial gradient
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});

// --- 2. Magnetic Button Effect ---
const magneticElements = document.querySelectorAll('[data-magnetic]');

magneticElements.forEach((elem) => {
    elem.addEventListener('mousemove', (e) => {
        const position = elem.getBoundingClientRect();
        const x = e.clientX - position.left - position.width / 2;
        const y = e.clientY - position.top - position.height / 2;
        
        // Translate the element based on distance from center
        elem.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });

    elem.addEventListener('mouseleave', () => {
        // Reset transformation
        elem.style.transform = 'translate(0px, 0px)';
        elem.style.transition = 'transform 0.5s ease';
    });
    
    elem.addEventListener('mouseenter', () => {
        elem.style.transition = 'none'; // Remove transition for instant tracking
    });
});


// --- 3. Vanilla JS Typewriter Effect ---
const typeStrings = ["Front-End Developer","Full Stack Developer", "AI Enthusiast", "MERN Stack Engineer",];
const typeElement = document.getElementById('typewriter');
let stringIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
    const currentString = typeStrings[stringIndex];
    
    if (isDeleting) {
        typeElement.textContent = currentString.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typeElement.textContent = currentString.substring(0, charIndex + 1);
        charIndex++;
    }

    let typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentString.length) {
        typingSpeed = 2000; // Pause at end of word
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        stringIndex = (stringIndex + 1) % typeStrings.length;
        typingSpeed = 500; // Pause before new word
    }

    setTimeout(typeWriter, typingSpeed);
}
// Start typing effect
setTimeout(typeWriter, 1000);


// --- 4. 3D Tilt Cards (Vanilla JS Math) ---
const tiltCards = document.querySelectorAll('[data-tilt]');

tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; // Mouse X relative to card
        const y = e.clientY - rect.top;  // Mouse Y relative to card
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // Calculate rotation degrees (max 15 degrees)
        const rotateX = ((y - centerY) / centerY) * -15; 
        const rotateY = ((x - centerX) / centerX) * 15;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        card.style.transition = "transform 0.5s ease";
    });

    card.addEventListener('mouseenter', () => {
        card.style.transition = "none"; // Snap to mouse instantly
    });
});


// --- 5. High-Performance Scroll Reveal (Web Animations API + IntersectionObserver) ---
const revealTargets = document.querySelectorAll('.reveal-target');

// Prepare elements (hide them initially)
revealTargets.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(50px)';
});

const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        
        // Use Web Animations API for complex sequencing
        entry.target.animate([
            { opacity: 0, transform: 'translateY(50px)' },
            { opacity: 1, transform: 'translateY(0)' }
        ], {
            duration: 800,
            easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
            fill: 'forwards'
        });

        observer.unobserve(entry.target); // Run once
    });
}, revealOptions);

revealTargets.forEach(target => revealObserver.observe(target));


// --- 6. HTML5 Canvas Interactive Particle Network ---
const canvas = document.getElementById('hero-canvas');
const ctx = canvas.getContext('2d');
let width, height;
let particles = [];

// Handle Resize
function initCanvas() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
}
window.addEventListener('resize', initCanvas);
initCanvas();

// Mouse tracking for canvas
let mouse = { x: null, y: null, radius: 150 };
window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});
window.addEventListener('mouseout', () => {
    mouse.x = undefined;
    mouse.y = undefined;
});

// Particle Class
class Particle {
    constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2 + 0.5;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 30) + 1;
        this.color = 'rgba(0, 242, 254, 0.5)';
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }

    update() {
        // Mouse interaction logic (Repel effect)
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        let maxDistance = mouse.radius;
        let force = (maxDistance - distance) / maxDistance;
        let directionX = forceDirectionX * force * this.density;
        let directionY = forceDirectionY * force * this.density;

        if (distance < mouse.radius) {
            this.x -= directionX;
            this.y -= directionY;
        } else {
            // Return to base position
            if (this.x !== this.baseX) {
                let dx = this.x - this.baseX;
                this.x -= dx / 20;
            }
            if (this.y !== this.baseY) {
                let dy = this.y - this.baseY;
                this.y -= dy / 20;
            }
        }
    }
}

// Initialize particles based on screen size
function initParticles() {
    particles = [];
    const numberOfParticles = (width * height) / 15000;
    for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle());
    }
}

// Animation Loop
function animateCanvas() {
    ctx.clearRect(0, 0, width, height);
    
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        
        // Draw lines between close particles
        for (let j = i; j < particles.length; j++) {
            let dx = particles[i].x - particles[j].x;
            let dy = particles[i].y - particles[j].y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100) {
                ctx.beginPath();
                ctx.strokeStyle = `rgba(79, 172, 254, ${1 - distance/100})`; // Fade out line based on distance
                ctx.lineWidth = 0.5;
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
                ctx.closePath();
            }
        }
    }
    requestAnimationFrame(animateCanvas);
}

initParticles();
animateCanvas();

// Re-initialize particles on window resize for correct density
window.addEventListener('resize', initParticles);

//-------------------------------------------------------------//
