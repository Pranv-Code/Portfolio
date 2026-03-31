const glow = document.querySelector(".cursor-glow");
const core = document.querySelector(".cursor-core");

let mouseX = 0, mouseY = 0;
let posX = 0, posY = 0;
let speed = 0;

// track mouse
document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// animation loop
function animate() {
  const dx = mouseX - posX;
  const dy = mouseY - posY;

  posX += dx * 0.12;
  posY += dy * 0.12;

  speed = Math.sqrt(dx * dx + dy * dy);

  // move elements
  glow.style.left = posX + "px";
  glow.style.top = posY + "px";

  core.style.left = mouseX + "px";
  core.style.top = mouseY + "px";

  // 🔥 dynamic scale based on speed
  const scale = Math.min(1 + speed / 200, 1.6);
  glow.style.transform = `translate(-50%, -50%) scale(${scale})`;

  requestAnimationFrame(animate);
}

animate();

document.querySelectorAll("a, button").forEach(el => {
  el.addEventListener("mouseenter", () => {
    glow.style.background = `
      radial-gradient(circle,
        rgba(255,212,59,0.35),
        transparent 70%)
    `;
    glow.style.transform += " scale(1.4)";
  });

  el.addEventListener("mouseleave", () => {
    glow.style.background = `
      radial-gradient(circle,
        rgba(108,142,255,0.22),
        transparent 70%)
    `;
  });
});

const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });
  function closeMobile() {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
  }

  
