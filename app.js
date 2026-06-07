// ===== Header shadow on scroll =====
const header = document.getElementById('siteHeader');
const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 8);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// ===== Mobile nav =====
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');
if (navToggle) {
  navToggle.addEventListener('click', () => nav.classList.toggle('open'));
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
}

// ===== Scroll reveal =====
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// ===== Lightbox =====
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
document.querySelectorAll('.gallery img').forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.currentSrc || img.src;
    lightbox.classList.add('open');
  });
});
function closeLightbox() { lightbox.classList.remove('open'); }
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

// ===== Quote form (demo) =====
function handleQuote(e) {
  e.preventDefault();
  const form = e.target;
  const name = (form.querySelector('[name=name]').value || 'there').split(' ')[0];
  form.innerHTML = `<div class="form-success">
      <div class="tick">✓</div>
      <h3>Thanks, ${name}!</h3>
      <p>Your request has been received. We'll be in touch very soon to arrange your free quote.</p>
    </div>`;
  return false;
}
