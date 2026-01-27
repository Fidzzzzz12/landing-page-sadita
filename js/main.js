// Sadita Indonesia Landing Page JavaScript
// Simplified version without navbar

class SaditaLandingPage {
    constructor() {
        this.init();
    }

    init() {
        this.initializeLucideIcons();
        this.setCurrentYear();
        this.setupScrollAnimations();
        this.setupSmoothScrolling();
    }

    initializeLucideIcons() {
        // Initialize Lucide icons
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }

    setCurrentYear() {
        const yearElement = document.getElementById('current-year');
        if (yearElement) {
            yearElement.textContent = new Date().getFullYear();
        }
    }

    setupSmoothScrolling() {
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    setupScrollAnimations() {
        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '-50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    
                    // Add staggered animation for multiple elements
                    const siblings = entry.target.parentElement?.querySelectorAll('.fade-in, .scale-in');
                    if (siblings && siblings.length > 1) {
                        siblings.forEach((sibling, index) => {
                            setTimeout(() => {
                                sibling.classList.add('visible');
                            }, index * 100);
                        });
                    }
                }
            });
        }, observerOptions);

        // Observe all elements with animation classes
        document.querySelectorAll('.fade-in, .scale-in').forEach(el => {
            observer.observe(el);
        });

        // Setup bounce animation for arrows
        this.setupBounceAnimations();
    }

    setupBounceAnimations() {
        const bounceArrow = document.querySelector('.bounce-arrow');
        if (bounceArrow) {
            setInterval(() => {
                bounceArrow.style.transform = 'translateY(5px)';
                setTimeout(() => {
                    bounceArrow.style.transform = 'translateY(0)';
                }, 750);
            }, 1500);
        }
    }

    // Utility methods
    static scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    static openWhatsApp(message = 'Halo Sadita Indonesia, saya ingin konsultasi produk') {
        const phoneNumber = '6281234567890';
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }

    // Analytics tracking (placeholder)
    static trackEvent(eventName, eventData = {}) {
        // Placeholder for analytics tracking
        console.log('Event tracked:', eventName, eventData);
        
        // Example: Google Analytics 4
        // if (typeof gtag !== 'undefined') {
        //     gtag('event', eventName, eventData);
        // }
    }
}

// Performance optimization: Lazy loading for images
class LazyImageLoader {
    constructor() {
        this.imageObserver = null;
        this.init();
    }

    init() {
        if ('IntersectionObserver' in window) {
            this.imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src || img.src;
                        img.classList.remove('lazy');
                        this.imageObserver.unobserve(img);
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                this.imageObserver.observe(img);
            });
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize main landing page functionality
    window.saditaLandingPage = new SaditaLandingPage();
    
    // Initialize lazy loading
    new LazyImageLoader();
    
    // Track page load
    SaditaLandingPage.trackEvent('page_view', {
        page_title: document.title,
        page_location: window.location.href
    });
});

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { SaditaLandingPage, LazyImageLoader };
}