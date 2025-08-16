// ===== APP INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    initializeTheme();
    initializeParallax();
    initializeCopyHandle();
    initializeGlitch();
    initializeGallery();
}

// ===== THEME MANAGEMENT =====
function initializeTheme() {
    const themes = ['noir', 'dusk', 'vapor'];
    const accents = ['cyan', 'magenta', 'lima', 'amber'];
    
    // Load saved preferences or use defaults
    const savedTheme = localStorage.getItem('natoshi-theme') || 'dusk';
    const savedAccent = localStorage.getItem('natoshi-accent') || 'cyan';
    
    // Apply saved theme
    applyTheme(savedTheme);
    applyAccent(savedAccent);
    
    // Theme toggle functionality
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', cycleTheme);
    }
    
    // Accent selector functionality
    const accentButtons = document.querySelectorAll('.accent-btn');
    accentButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const accent = btn.dataset.accent;
            applyAccent(accent);
            localStorage.setItem('natoshi-accent', accent);
            
            // Update active state
            accentButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
    
    // Set initial active accent
    const activeAccentBtn = document.querySelector(`[data-accent="${savedAccent}"]`);
    if (activeAccentBtn) {
        activeAccentBtn.classList.add('active');
    }
}

function cycleTheme() {
    const themes = ['noir', 'dusk', 'vapor'];
    const currentTheme = document.documentElement.dataset.theme || 'dusk';
    const currentIndex = themes.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % themes.length;
    const nextTheme = themes[nextIndex];
    
    applyTheme(nextTheme);
    localStorage.setItem('natoshi-theme', nextTheme);
}

function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
}

function applyAccent(accent) {
    document.documentElement.dataset.accent = accent;
}

// ===== PARALLAX EFFECTS =====
function initializeParallax() {
    const radialGlow = document.getElementById('radialGlow');
    if (!radialGlow) return;
    
    let ticking = false;
    
    function updateParallax(e) {
        if (!ticking) {
            requestAnimationFrame(() => {
                const x = e.clientX / window.innerWidth;
                const y = e.clientY / window.innerHeight;
                
                const moveX = (x - 0.5) * 20;
                const moveY = (y - 0.5) * 20;
                
                radialGlow.style.transform = `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px))`;
                ticking = false;
            });
            ticking = true;
        }
    }
    
    // Throttled mouse move
    let throttleTimer;
    document.addEventListener('mousemove', (e) => {
        if (throttleTimer) return;
        throttleTimer = setTimeout(() => {
            updateParallax(e);
            throttleTimer = null;
        }, 16); // ~60fps
    });
}

// ===== COPY HANDLE FUNCTIONALITY =====
function initializeCopyHandle() {
    const copyHandle = document.getElementById('copyHandle');
    if (!copyHandle) return;
    
    copyHandle.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText('@natoshi.exe');
            
            // Show success state
            copyHandle.classList.add('copied');
            
            // Reset after 2 seconds
            setTimeout(() => {
                copyHandle.classList.remove('copied');
            }, 2000);
            
        } catch (err) {
            console.error('Failed to copy: ', err);
            // Fallback for older browsers
            fallbackCopyTextToClipboard('@natoshi.exe');
        }
    });
}

function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.position = 'fixed';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        const copyHandle = document.getElementById('copyHandle');
        if (copyHandle) {
            copyHandle.classList.add('copied');
            setTimeout(() => {
                copyHandle.classList.remove('copied');
            }, 2000);
        }
    } catch (err) {
        console.error('Fallback copy failed: ', err);
    }
    
    document.body.removeChild(textArea);
}

// ===== GLITCH ANIMATION =====
function initializeGlitch() {
    const title = document.getElementById('title');
    if (!title) return;
    
    // Check if this is the first visit
    const hasVisited = localStorage.getItem('natoshi-has-visited');
    
    if (!hasVisited) {
        // Apply glitch effect on first visit
        setTimeout(() => {
            title.classList.add('glitch');
            
            // Remove glitch class after animation
            setTimeout(() => {
                title.classList.remove('glitch');
            }, 1200);
        }, 500);
        
        // Mark as visited
        localStorage.setItem('natoshi-has-visited', 'true');
    }
}

// ===== GALLERY LAZY LOADING =====
function initializeGallery() {
    const placeholderImages = document.querySelectorAll('.placeholder-image');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const placeholder = entry.target;
                    const src = placeholder.dataset.src;
                    
                    if (src) {
                        loadImage(placeholder, src);
                        observer.unobserve(placeholder);
                    }
                }
            });
        }, {
            rootMargin: '50px 0px',
            threshold: 0.1
        });
        
        placeholderImages.forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        // Fallback for older browsers
        placeholderImages.forEach(placeholder => {
            const src = placeholder.dataset.src;
            if (src) {
                loadImage(placeholder, src);
            }
        });
    }
}

function loadImage(placeholder, src) {
    const img = new Image();
    
    img.onload = function() {
        // Replace placeholder with actual image
        placeholder.style.backgroundImage = `url(${src})`;
        placeholder.style.backgroundSize = 'cover';
        placeholder.style.backgroundPosition = 'center';
        
        // Remove placeholder content
        const placeholderContent = placeholder.querySelector('.placeholder-content');
        if (placeholderContent) {
            placeholderContent.style.opacity = '0';
            setTimeout(() => {
                placeholderContent.remove();
            }, 300);
        }
        
        // Add fade-in effect
        placeholder.style.opacity = '0';
        setTimeout(() => {
            placeholder.style.transition = 'opacity 0.5s ease';
            placeholder.style.opacity = '1';
        }, 100);
    };
    
    img.onerror = function() {
        // Keep placeholder if image fails to load
        console.warn(`Failed to load image: ${src}`);
    };
    
    img.src = src;
}

// ===== UTILITY FUNCTIONS =====
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ===== ACCESSIBILITY ENHANCEMENTS =====
function enhanceAccessibility() {
    // Add keyboard navigation for theme controls
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                cycleTheme();
            }
        });
    }
    
    // Add keyboard navigation for accent buttons
    const accentButtons = document.querySelectorAll('.accent-btn');
    accentButtons.forEach(btn => {
        btn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                btn.click();
            }
        });
    });
}

// ===== PERFORMANCE OPTIMIZATIONS =====
function optimizePerformance() {
    // Preload critical resources
    const criticalImages = [
        '/assets/logo.png',
        '/assets/og-image.png'
    ];
    
    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
    
    // Optimize scroll performance
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(() => {
            // Handle scroll-based effects here if needed
        }, 16);
    });
}

// ===== ERROR HANDLING =====
window.addEventListener('error', (e) => {
    console.error('App error:', e.error);
    // Could send to analytics service here
});

// ===== SERVICE WORKER REGISTRATION (OPTIONAL) =====
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Initialize additional features
document.addEventListener('DOMContentLoaded', () => {
    enhanceAccessibility();
    optimizePerformance();
});
