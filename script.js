// HEADER COM SCROLL - SEU CÓDIGO ORIGINAL
window.addEventListener('scroll', () => {
  document.getElementById('header').classList.toggle('scrolled', window.scrollY > 50);
});

// FORMULÁRIO WHATSAPP - SEU CÓDIGO ORIGINAL
document.getElementById('formContato').addEventListener('submit', function(e){
  e.preventDefault();
  const nome = document.getElementById('nome').value;
  const zap = document.getElementById('zap').value;
  const evento = document.getElementById('evento').value;
  const msg = `Olá Gisele! Sou ${nome} (${zap}). Evento: ${evento}`;
  window.open(`https://wa.me/5511946147717?text=${encodeURIComponent(msg)}`, '_blank');
});

// ===== GALERIA COM LIGHTBOX - NOVO =====
const fotoCards = document.querySelectorAll('.foto-card');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');

fotoCards.forEach(card => {
  card.addEventListener('click', () => {
    const img = card.querySelector('img');
    lightboxImg.src = img.src;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden'; // trava scroll
  });
});

// Fechar lightbox
function fecharLightbox(){
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}

closeBtn.addEventListener('click', fecharLightbox);

lightbox.addEventListener('click', (e) => {
  if(e.target === lightbox) fecharLightbox();
});

document.addEventListener('keydown', (e) => {
  if(e.key === 'Escape') fecharLightbox();
});

// ===== ANIMAÇÃO SUAVE NOS CARDS AO ROLAR =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.data-card, .yt-card, .foto-card').forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  card.style.transition = 'opacity .6s ease, transform .6s ease';
  observer.observe(card);
});
