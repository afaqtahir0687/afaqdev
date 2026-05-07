/**
 * Layout Components for Static HTML
 * This version works even when opening files locally (file://)
 */

const layouts = {
    header: `
        <nav class="navbar navbar-expand-lg navbar-light bg-white py-3 sticky-top shadow-sm">
            <div class="container px-5">
                <a class="navbar-brand" href="index.html">
                    <span class="fw-bolder text-primary">Muhammad Afaq Tahir</span>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
                        <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
                        <li class="nav-item"><a class="nav-link" href="resume.html">Resume</a></li>
                        <li class="nav-item"><a class="nav-link" href="projects.html">Projects</a></li>
                        <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
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
    // Get current filename (e.g., index.html)
    const path = window.location.pathname;
    let page = path.split("/").pop();
    if (page === "" || !page) page = "index.html";

    const links = container.querySelectorAll('.nav-link');
    links.forEach(link => {
        const href = link.getAttribute('href');
        if (href === page) {
            link.classList.add('active', 'text-primary', 'border-bottom', 'border-primary');
        } else {
            link.classList.remove('active', 'text-primary', 'border-bottom', 'border-primary');
        }
    });
}

// Run immediately and also on DOMContentLoaded to be safe
renderLayouts();
document.addEventListener('DOMContentLoaded', renderLayouts);
