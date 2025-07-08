document.addEventListener('DOMContentLoaded', () => {
  // ===== Fade-in con Intersection Observer =====
  const proyectos = document.querySelectorAll('.proyecto');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Deja de observar tras animar
        }
      });
    }, { threshold: 0.2 });

    proyectos.forEach(proy => observer.observe(proy));
  } else {
    // Fallback si no hay soporte para IntersectionObserver
    proyectos.forEach(proy => proy.classList.add('visible'));
  }

  // ===== Botón Volver Arriba =====
  const btnTop = document.getElementById('btnTop');

  const toggleBtnTop = () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    btnTop.style.display = scrollY > 300 ? 'block' : 'none';
  };

  window.addEventListener('scroll', toggleBtnTop);

  if (btnTop) {
    btnTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
