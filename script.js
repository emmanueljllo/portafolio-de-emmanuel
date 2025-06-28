// Fade-in efecto con Intersection Observer
const proyectos = document.querySelectorAll('.proyecto');

const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('visible');
}
});
}, { threshold: 0.2 });

proyectos.forEach(proy => {
observer.observe(proy);
});

// Botón volver arriba
const btnTop = document.getElementById('btnTop');

window.onscroll = function() {
if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
btnTop.style.display = "block";
} 
else {
btnTop.style.display = "none";
}
};

btnTop.addEventListener('click', () => {
window.scrollTo({ top: 0, behavior: 'smooth' });
});