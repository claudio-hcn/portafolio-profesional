        // Navegación suave
        document.addEventListener('DOMContentLoaded', function () {
            // Inicializar mostrando hero (estamos en inicio)
document.body.classList.add('showing-inicio');
            const navLinks = document.querySelectorAll('.nav-link');
            const sections = document.querySelectorAll('.section');

            navLinks.forEach(link => {
                link.addEventListener('click', function (e) {
                    e.preventDefault();

                    // Remover clase active de todos los links
                    navLinks.forEach(l => l.classList.remove('active'));
                    // Añadir clase active al link clickeado
                    this.classList.add('active');

                    // Ocultar todas las secciones
                    sections.forEach(section => section.classList.remove('active'));

                    // Mostrar la sección correspondiente
const targetId = this.getAttribute('href').substring(1);
document.getElementById(targetId).classList.add('active');

// Controlar visibilidad del hero
if (targetId === 'inicio') {
    document.body.classList.add('showing-inicio');
} else {
    document.body.classList.remove('showing-inicio');
}
                });
            });

            // Navegación desde botones CTA
            const ctaButtons = document.querySelectorAll('a[href^="#"]');
            ctaButtons.forEach(button => {
                button.addEventListener('click', function (e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href').substring(1);

                    // Actualizar navegación
                    navLinks.forEach(l => l.classList.remove('active'));
                    document.querySelector(`a[href="#${targetId}"]`).classList.add('active');

                    // Mostrar sección
                    sections.forEach(section => section.classList.remove('active'));
                    document.getElementById(targetId).classList.add('active');
                });
            });

            // Efecto de escritura en el título
            const heroTitle = document.querySelector('.hero-title');
            const originalText = heroTitle.textContent;
            heroTitle.textContent = '';

            let i = 0;
            function typeWriter() {
                if (i < originalText.length) {
                    heroTitle.textContent += originalText.charAt(i);
                    i++;
                    setTimeout(typeWriter, 100);
                }
            }

            setTimeout(typeWriter, 500);

            // Animaciones al hacer hover en las tarjetas de proyecto
            const projectCards = document.querySelectorAll('.project-card');
            projectCards.forEach(card => {
                card.addEventListener('mouseenter', function () {
                    this.style.transform = 'translateY(-10px) scale(1.02)';
                });

                card.addEventListener('mouseleave', function () {
                    this.style.transform = 'translateY(-10px) scale(1)';
                });
            });

            // Header transparente al hacer scroll
            window.addEventListener('scroll', function () {
                const header = document.querySelector('header');
                if (window.scrollY > 100) {
                    header.style.background = 'rgba(255, 255, 255, 0.98)';
                } else {
                    header.style.background = 'rgba(255, 255, 255, 0.95)';
                }
            });

            // Animación de aparición para elementos del CV
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver(function (entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, observerOptions);

            // Observar elementos del CV
            const cvItems = document.querySelectorAll('.cv-item, .skill-item, .project-card');
            cvItems.forEach(item => {
                item.style.opacity = '0';
                item.style.transform = 'translateY(20px)';
                item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(item);
            });

            // Partículas de fondo (efecto sutil)
            function createParticle() {
                const particle = document.createElement('div');
                particle.style.position = 'fixed';
                particle.style.width = '4px';
                particle.style.height = '4px';
                particle.style.background = 'rgba(102, 126, 234, 0.1)';
                particle.style.borderRadius = '50%';
                particle.style.pointerEvents = 'none';
                particle.style.zIndex = '1';
                particle.style.left = Math.random() * window.innerWidth + 'px';
                particle.style.top = window.innerHeight + 'px';

                document.body.appendChild(particle);

                const animation = particle.animate([
                    { transform: 'translateY(0px)', opacity: 1 },
                    { transform: `translateY(-${window.innerHeight + 100}px)`, opacity: 0 }
                ], {
                    duration: 15000 + Math.random() * 10000,
                    easing: 'linear'
                });

                animation.addEventListener('finish', () => {
                    particle.remove();
                });
            }

            // Crear partículas ocasionalmente
            setInterval(createParticle, 3000);

            // Efecto parallax suave en la sección de inicio
            window.addEventListener('scroll', () => {
                const scrolled = window.pageYOffset;
                const heroContent = document.querySelector('.hero-content');
                const heroImage = document.querySelector('.hero-image');

                if (heroContent && heroImage) {
                    heroContent.style.transform = `translateY(${scrolled * 0.1}px)`;
                    heroImage.style.transform = `translateY(${scrolled * -0.1}px)`;
                }
            });

            // Formulario de contacto
            const contactForm = document.querySelector('.contact-form form');
            if (contactForm) {
                contactForm.addEventListener('submit', function (e) {
                    e.preventDefault();

                    // Aquí puedes agregar la lógica para enviar el formulario
                    // Por ejemplo, usando EmailJS o un servicio similar

                    alert('¡Gracias por tu mensaje! Te responderé pronto.');
                    this.reset();
                });
            }

            // Modo oscuro (opcional)
            const darkModeToggle = document.createElement('button');
            darkModeToggle.innerHTML = '🌙';
            darkModeToggle.style.cssText = `
                position: fixed;
                top: 50%;
                right: 20px;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                border: none;
                background: var(--gradient);
                color: white;
                font-size: 1.5rem;
                cursor: pointer;
                z-index: 1001;
                box-shadow: var(--shadow);
                transition: all 0.3s ease;
                transform: translateY(-50%);
            `;

            darkModeToggle.addEventListener('click', function () {
                document.body.classList.toggle('dark-mode');
                this.innerHTML = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
            });

            document.body.appendChild(darkModeToggle);

            // Estilos para modo oscuro
            const darkModeStyles = `
                .dark-mode {
                    --text-primary: #e2e8f0;
                    --text-secondary: #cbd5e0;
                    --text-light: #a0aec0;
                    --bg-primary: #1a202c;
                    --bg-secondary: #2d3748;
                }
                
                .dark-mode header {
                    background: rgba(26, 32, 44, 0.95);
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                }
                
                .dark-mode .cv-item,
                .dark-mode .project-card,
                .dark-mode .contact-form,
                .dark-mode .skill-item,
                .dark-mode .contact-item {
                    background: var(--bg-secondary);
                    color: var(--text-primary);
                }
                
                .dark-mode .form-group input,
                .dark-mode .form-group textarea {
                    background: var(--bg-primary);
                    color: var(--text-primary);
                    border-color: #4a5568;
                }
            `;

            const styleSheet = document.createElement('style');
            styleSheet.textContent = darkModeStyles;
            document.head.appendChild(styleSheet);
        });