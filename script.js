// ============================================
// Portfolio Website Interaction Script
// ============================================

document.addEventListener('DOMContentLoaded', function () {

    // ---------- Scroll Reveal Animation ----------
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // only once
            }
        });
    }, {
        threshold: 0.15
    });

    revealElements.forEach(el => observer.observe(el));

    // Apply .reveal to all sections and cards initially via JS
    document.querySelectorAll('section, .card-expertise, .card-info, .ph, .workflow-step, .timeline-step, .badge-tag, .badge-tech')
        .forEach(el => {
            if (!el.classList.contains('reveal')) {
                el.classList.add('reveal');
                observer.observe(el);
            }
        });

    // ---------- Placeholder Lightbox (simple) ----------
    const placeholders = document.querySelectorAll('.ph');
    placeholders.forEach(ph => {
        ph.style.cursor = 'pointer';
        ph.addEventListener('click', function () {
            const label = this.getAttribute('data-label') || 'PLACEHOLDER';
            // Simple modal using Bootstrap? We'll use a custom alert for demo
            // Or you can integrate Bootstrap Modal, but keep simple:
            alert(`${label}\n\nReplace with actual image/map.`);
        });
    });

    // ---------- Active Nav Link Highlight (Scrollspy already handled by Bootstrap) ----------
    // Bootstrap Scrollspy is active via body attributes, no extra code needed.
    // Just ensure nav-link active class updates automatically.

    // ---------- Smooth scrolling for anchor links (optional, native CSS handles) ----------
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

});