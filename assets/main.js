document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const sections = document.querySelectorAll('.view-section');

    function showSection(id) {
        // Handle invalid IDs by defaulting to home
        if (!document.getElementById(id)) {
            id = 'home';
        }

        sections.forEach(sec => {
            if (sec.id === id) {
                sec.classList.remove('d-none');
            } else {
                sec.classList.add('d-none');
            }
        });

        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${id}` || (href === '#' && id === 'home')) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
        
        window.scrollTo(0, 0);
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = link.getAttribute('href');
            let targetId = href.startsWith('#') ? href.substring(1) : 'home';
            if (!targetId) targetId = 'home'; // for href="#"
            
            showSection(targetId);
            history.pushState(null, '', `#${targetId}`);
        });
    });

    // Also handle the brand link
    const brandLink = document.querySelector('.navbar-brand');
    if (brandLink) {
        brandLink.addEventListener('click', (e) => {
            e.preventDefault();
            showSection('home');
            history.pushState(null, '', '#home');
        });
    }

    // Handle initial load based on hash
    if (window.location.hash) {
        showSection(window.location.hash.substring(1));
    } else {
        showSection('home');
    }
});