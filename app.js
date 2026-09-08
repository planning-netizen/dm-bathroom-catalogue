// DM HOME IMPROVEMENT — MASTER BATHROOM CATALOGUE INTERACTIVE LOGIC

document.addEventListener('DOMContentLoaded', () => {
    // 1. Tier Tab Switcher
    const tierTabs = document.querySelectorAll('.tier-tab');
    const tierContents = document.querySelectorAll('.tier-content');

    tierTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetTier = tab.getAttribute('data-tier');

            tierTabs.forEach(t => t.classList.remove('active'));
            tierContents.forEach(c => c.classList.remove('active'));

            tab.classList.add('active');
            const targetEl = document.getElementById(`tier-${targetTier}`);
            if (targetEl) {
                targetEl.classList.add('active');
            }
        });
    });

    // 2. Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileBtn.classList.toggle('open');
        });
    }

    // 3. Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId.length > 1) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    if (navLinks && navLinks.classList.contains('active')) {
                        navLinks.classList.remove('active');
                    }
                }
            }
        });
    });
});
