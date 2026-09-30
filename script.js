window.addEventListener('scroll', () => {
  document.getElementById('header').classList.toggle('scrolled', window.scrollY > 50);
});

document.getElementById('formContato').addEventListener('submit', function(e){
  e.preventDefault();
  const nome = document.getElementById('nome').value;
  const zap = document.getElementById('zap').value;
  const evento = document.getElementById('evento').value;
  const msg = `Olá Gisele! Sou ${nome} (${zap}). Evento: ${evento}`;
  window.open(`https://wa.me/5511946147717?text=${encodeURIComponent(msg)}`, '_blank');
});
