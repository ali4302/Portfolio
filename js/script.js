// ===== Navigation Functionality =====
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const navLinkElements = document.querySelectorAll('.nav-link');
const navbar = document.querySelector('.navbar');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : 'auto';
});

// Close mobile menu when clicking a link
navLinkElements.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// ===== Navbar Background on Scroll =====
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== Smooth Scroll for Navigation Links =====
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

// ===== Skill Progress Animation =====
const skillProgressBars = document.querySelectorAll('.skill-progress');

const animateSkills = () => {
    skillProgressBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        const barPosition = bar.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;

        if (barPosition < screenPosition) {
            bar.style.width = `${progress}%`;
        }
    });
};

window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills);

// ===== Projects Data =====
const projects = [
    {
        id: 1,
        title: "CamTrack Security System",
        description: "Advanced AI-powered security surveillance system with real-time monitoring, motion detection, facial recognition, and automated alert notifications.",
        image: "https://via.placeholder.com/400x200/1e40af/ffffff?text=CamTrack+Security",
        tags: ["Python", "OpenCV", "TensorFlow", "IoT"],
        github: "https://github.com/ali4302",
        live: "#",
       
    },
    {
        id: 2,
        title: "E-Commerce Platform",
        description: "Full-stack e-commerce solution with advanced features including payment gateway integration, inventory management, and user analytics.",
        image: "https://via.placeholder.com/400x200/2563eb/ffffff?text=E-Commerce",
        tags: ["React", "Node.js", "MongoDB", "Stripe"],
        github: "https://github.com/ali4302",
        live: "#",
        
    },
    {
        id: 3,
        title: "Task Management System",
        description: "Enterprise-grade productivity application with team collaboration, project tracking, deadline management, and real-time synchronization.",
        image: "https://via.placeholder.com/400x200/3b82f6/ffffff?text=Task+Manager",
        tags: ["React", "Firebase", "Material-UI"],
        github: "https://github.com/ali4302",
        live: "#",
      
    },
    {
        id: 4,
        title: "Smart Weather Dashboard",
        description: "Intelligent weather forecasting platform with location-based predictions, interactive maps, climate data visualization, and severe weather alerts.",
        image: "https://via.placeholder.com/400x200/1e40af/ffffff?text=Weather+Analytics",
        tags: ["React", "API Integration", "Chart.js", "Geolocation"],
        github: "https://github.com/ali4302",
        live: "#",
        
    },
    {
        id: 5,
        title: "Professional Portfolio",
        description: "Modern, responsive portfolio website with animated transitions, dynamic content loading, and optimized performance for showcasing projects.",
        image: "https://via.placeholder.com/400x200/2563eb/ffffff?text=Portfolio",
        tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
        github: "https://github.com/ali4302",
        live: "https://ali4302.github.io",
        
    },
    {
        id: 6,
        title: "Content Management Platform",
        description: "Robust CMS for creating, managing, and publishing digital content with role-based access control and SEO optimization.",
        image: "https://via.placeholder.com/400x200/3b82f6/ffffff?text=CMS+Platform",
        tags: ["Node.js", "Express", "MySQL", "REST API"],
        github: "https://github.com/ali4302",
        live: "#",
        
    }
];

// ===== Render Projects =====
const projectsContainer = document.getElementById('projectsContainer');

function renderProjects() {
    projectsContainer.innerHTML = projects.map((project, index) => `
        <div class="project-card" style="animation: fadeInUp 0.6s ease ${index * 0.1}s backwards;">
            <div class="project-image-wrapper">
                <img src="${project.image}" alt="${project.title}" class="project-image">
                ${project.showIcon ? `
                <div class="project-overlay">
                    <a href="${project.github}" target="_blank" class="project-link" title="View on GitHub">
                        <i class="fab fa-github"></i>
                    </a>
                    ${project.live !== '#' ? `
                        <a href="${project.live}" target="_blank" class="project-link" title="Live Demo">
                            <i class="fas fa-external-link-alt"></i>
                        </a>
                    ` : ''}
                </div>
                ` : ''}
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

// Load projects on page load
document.addEventListener('DOMContentLoaded', renderProjects);

// ===== Contact Form Handling =====
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    // Here you would typically send the data to a server
    console.log('Form submitted:', formData);
    
    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
    
    // Reset form
    contactForm.reset();
});

// ===== Smooth Scroll =====
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

// ===== Scroll to Top Button =====
const createScrollTopButton = () => {
    const button = document.createElement('button');
    button.innerHTML = '<i class="fas fa-arrow-up"></i>';
    button.className = 'scroll-to-top';
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease;
        z-index: 999;
    `;
    
    document.body.appendChild(button);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            button.style.display = 'flex';
        } else {
            button.style.display = 'none';
        }
    });
    
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.1)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
};

createScrollTopButton();

// ===== Intersection Observer for Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections and cards
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.skill-card, .project-card, .about-content, .contact-content');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
});

// ===== Typing Effect for Hero Subtitle =====
const heroSubtitle = document.querySelector('.hero-subtitle');
if (heroSubtitle) {
    const text = heroSubtitle.textContent;
    const roles = text.split('|').map(role => role.trim());
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function typeEffect() {
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            heroSubtitle.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            heroSubtitle.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            typingSpeed = 2000; // Pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typingSpeed = 500; // Pause before next role
        }

        setTimeout(typeEffect, typingSpeed);
    }

    // Start typing effect after a short delay
    setTimeout(typeEffect, 1000);
}

// ===== Dark Mode Toggle (Optional) =====
const createDarkModeToggle = () => {
    const toggle = document.createElement('button');
    toggle.innerHTML = '<i class="fas fa-moon"></i>';
    toggle.className = 'dark-mode-toggle';
    toggle.style.cssText = `
        position: fixed;
        top: 100px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease;
        z-index: 999;
    `;
    
    document.body.appendChild(toggle);
    
    // Check for saved theme preference
    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        toggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    toggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            toggle.innerHTML = '<i class="fas fa-sun"></i>';
            localStorage.setItem('theme', 'dark');
        } else {
            toggle.innerHTML = '<i class="fas fa-moon"></i>';
            localStorage.setItem('theme', 'light');
        }
    });
    
    toggle.addEventListener('mouseenter', () => {
        toggle.style.transform = 'scale(1.1) rotate(15deg)';
    });
    
    toggle.addEventListener('mouseleave', () => {
        toggle.style.transform = 'scale(1) rotate(0deg)';
    });
};

createDarkModeToggle();
