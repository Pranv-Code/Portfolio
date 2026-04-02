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

//Typing text

const titles = document.querySelectorAll(".type-title");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.classList.contains("done")) {

      entry.target.classList.add("done");

      const text = entry.target.getAttribute("data-text");
      const target = entry.target.querySelector(".typing");
      const line = entry.target.querySelector(".line");

      let i = 0;

      function type() {
        if (i < text.length) {
          target.textContent += text[i];
          i++;
          setTimeout(type, 100);
        } else {
          line.classList.add("active");
        }
      }

      type();
    }
  });
}, { threshold: 0.4 });

titles.forEach(title => observer.observe(title));

// HERO 
const lines = document.querySelectorAll(".hero-line");

lines.forEach((line, index) => {
  setTimeout(() => {
    line.classList.add("show");
  }, index * 300); // delay between each line
});
