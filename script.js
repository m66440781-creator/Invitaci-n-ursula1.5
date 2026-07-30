// script.js — comportamiento básico para la invitación Úrsula 1.5

const openBtn = document.getElementById('open-btn');
const musicBtn = document.getElementById('music-btn');
const message = document.getElementById('message');

const audioMusica = document.getElementById('musica');
const audioAbrir = document.getElementById('abrir');
const audioMagia = document.getElementById('magia');
const audioConfetti = document.getElementById('confetti');

let musicPlaying = false;

musicBtn.addEventListener('click', () => {
  if (!audioMusica) return;
  if (!musicPlaying) {
    audioMusica.play().catch(()=>{});
    musicBtn.textContent = 'Pausar música';
    musicPlaying = true;
  } else {
    audioMusica.pause();
    musicBtn.textContent = 'Reproducir música';
    musicPlaying = false;
  }
});

openBtn.addEventListener('click', async () => {
  // reproducir sonido de apertura
  audioAbrir.play().catch(()=>{});

  // mostrar mensaje
  message.classList.remove('hidden');

  // reproducir efecto mágico
  setTimeout(()=>{
    audioMagia.play().catch(()=>{});
  }, 400);

  // disparar confetti sonoro y visual
  setTimeout(()=>{
    audioConfetti.play().catch(()=>{});
    // simple efecto visual: destellos
    burst();
  }, 1200);
});

function burst(){
  const body = document.body;
  const frag = document.createDocumentFragment();
  for(let i=0;i<18;i++){
    const el = document.createElement('span');
    el.className = 'burst';
    el.style.position = 'fixed';
    el.style.left = (50 + (Math.random()*40-20)) + '%';
    el.style.top = (45 + (Math.random()*30-15)) + '%';
    el.style.width = el.style.height = (6 + Math.random()*10) + 'px';
    el.style.background = `hsl(${Math.floor(Math.random()*360)} 80% 60%)`;
    el.style.borderRadius = '50%';
    el.style.opacity = '0.95';
    el.style.transform = `translate(-50%,-50%) scale(0.3)`;
    el.style.transition = 'transform 900ms cubic-bezier(.2,.8,.2,1), opacity 900ms linear';
    frag.appendChild(el);
    requestAnimationFrame(()=>{
      el.style.transform = `translate(-50%,-50%) translate(${(Math.random()*300-150)}px,${(Math.random()*300-150)}px) scale(1)`;
      el.style.opacity = '0';
    });
    setTimeout(()=>el.remove(),1000);
  }
  body.appendChild(frag);
}
