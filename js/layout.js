/**
 * Layout Components for Static HTML
 * This version works even when opening files locally (file://)
 */

const isMobile = window.innerWidth < 992;

const layouts = {
    header: `
        <nav class="navbar navbar-expand-lg navbar-light bg-white py-3 sticky-top shadow-sm">
            <div class="container px-5">
                <a class="navbar-brand" href="#home">
                    <span class="fw-bolder text-primary">Muhammad Afaq Tahir</span>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
                        <li class="nav-item"><a class="nav-link" href="#home">Home</a></li>
                        <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
                        <li class="nav-item"><a class="nav-link" href="#experience">Experience</a></li>
                        <li class="nav-item"><a class="nav-link" href="#education">Education</a></li>
                        <li class="nav-item"><a class="nav-link" href="#projects">Projects</a></li>
                        <li class="nav-item"><a class="nav-link" href="#integrations">Integrations</a></li>
                        <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    `,
    footer: `
        <footer class="bg-white py-4 mt-auto">
            <div class="container px-5">
                <div class="row align-items-center justify-content-center">
                    <div class="col-auto">
                        <div class="small m-0 text-center">Copyright &copy; Afaq Tahir 2026</div>
                    </div>
                </div>
            </div>
        </footer>
    `
};

function renderLayouts() {
    const elements = document.querySelectorAll('[data-layout]');
    elements.forEach(el => {
        const type = el.getAttribute('data-layout');
        if (layouts[type]) {
            el.innerHTML = layouts[type];
            if (type === 'header') {
                setActiveLink(el);
            }
        }
    });
}

function setActiveLink(container) {
    const navLinks = container.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('header[id], section[id], .scroll-mt[id]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                });
            }
        });
    }, { threshold: 0.3 }); // Lower threshold for better response on large sections

    sections.forEach(s => observer.observe(s));

    // Handle clicks to close mobile menu
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const navbarCollapse = document.getElementById('navbarSupportedContent');
            if (navbarCollapse.classList.contains('show')) {
                const bscollapse = new bootstrap.Collapse(navbarCollapse);
                bscollapse.hide();
            }
        });
    });
}

renderLayouts();
document.addEventListener('DOMContentLoaded', renderLayouts);
