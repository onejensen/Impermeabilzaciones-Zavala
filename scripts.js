// Impermeabilizaciones Zavala - Scripts
// Architectural/Premium redesign — SOZ-25

// ---- IntersectionObserver: fade-in on scroll ----
(function() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach(el => observer.observe(el));
})();

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navMobile = document.getElementById('navMobile');
if (navToggle && navMobile) {
  navToggle.addEventListener('click', () => {
    navMobile.classList.toggle('open');
  });
  // Close on link click
  navMobile.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navMobile.classList.remove('open'));
  });
}

// Sticky header shadow
const header = document.getElementById('header');
if (header) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      header.style.boxShadow = '0 2px 16px rgba(0,0,0,0.08)';
    } else {
      header.style.boxShadow = 'none';
    }
  });
}

// Contact form — WhatsApp redirect
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const servicio = document.getElementById('servicio').value;
    const mensaje = document.getElementById('mensaje').value;
    const text = encodeURIComponent(
      `Hola, me llamo ${nombre} y quiero un presupuesto gratuito.\n` +
      `Teléfono: ${telefono}\n` +
      `Servicio: ${servicio || 'No especificado'}\n` +
      `Detalle: ${mensaje || 'Sin detalle'}`
    );
    window.open(`https://wa.me/34650589899?text=${text}`, '_blank');
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Gallery lightbox
(function() {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');
  if (!lightbox || !lightboxImg) return;

  const galleryImgs = document.querySelectorAll('#galeria-grid img');
  galleryImgs.forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    });
  });

  const closeLightbox = () => {
    lightbox.style.display = 'none';
    document.body.style.overflow = '';
  };

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });
})();
