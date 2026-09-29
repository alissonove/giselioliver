// ACELERAR O VIDEO DE FUNDO
document.addEventListener("DOMContentLoaded", () => {
  const bgVideo = document.getElementById('bgVideo');
  if (bgVideo) {
    bgVideo.playbackRate = 1.8; // 1.0 = normal | 1.8 = rápido e elegante | 2.0 = super rápido
    bgVideo.play().catch(() => {
      console.log("Autoplay bloqueado, vai tocar no primeiro clique");
    });
  }
});

// EFEITO NO HEADER AO ROLAR
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// FORMULÁRIO -> WHATSAPP
const form = document.getElementById("formContato");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = form.querySelector('input[type="text"]').value;
    const whatsapp = form.querySelectorAll('input[type="text"]')[1].value;
    const mensagem = form.querySelector('textarea').value;

    const texto = `Olá Gisele! ✨%0A%0A*Nome:* ${nome}%0A*WhatsApp:* ${whatsapp}%0A*Evento:* ${mensagem}%0A%0AVi seu site oficial e quero contratar!`;

    // TROCA AQUI PELO NÚMERO DELA
    const numero = "5511999999999";

    window.open(`https://wa.me/${numero}?text=${texto}`, '_blank');

    form.reset();
  });
}

// SCROLL SUAVE
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
// VIDEO RAPIDO
const bgVideo = document.getElementById('bgVideo');
if(bgVideo){
  bgVideo.playbackRate = 1.8;
  bgVideo.play().catch(()=>{});
}

// HEADER
window.addEventListener("scroll",()=>{
  document.querySelector(".header").classList.toggle("scrolled",window.scrollY>50);
});

// FORM -> WHATSAPP 11 946147717
const form = document.getElementById("formContato");
form.addEventListener("submit",(e)=>{
  e.preventDefault();
  const nome = document.getElementById('nome').value.trim();
  const whats = document.getElementById('whats').value.trim();
  const evento = document.getElementById('evento').value.trim();

  // mensagem formatada que vai chegar no seu zap
  const mensagem = 
`✨ *NOVO CADASTRO - SITE GISELE OLIVER* ✨

*Nome:* ${nome}
*WhatsApp Cliente:* ${whats}
*Detalhes do Evento:* ${evento}

_Enviado pelo site oficial_`;

  const numeroDestino = "5511946147717"; // SEU NUMERO
  const link = `https://wa.me/${numeroDestino}?text=${encodeURIComponent(mensagem)}`;
  
  window.open(link, '_blank');
  form.reset();
  alert("Cadastro enviado! Você será redirecionado para o WhatsApp.");
});