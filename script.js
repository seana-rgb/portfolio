// Greeting based on the visitor's local time
const hour = new Date().getHours();
let greeting = "Good evening";
if (hour < 12) {
  greeting = "Good morning";
} else if (hour < 18) {
  greeting = "Good afternoon";
}
document.getElementById("greeting").textContent = greeting + ", I'm";

// Scroll parallax: each desert layer moves at its own speed
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (!prefersReducedMotion) {
  const layers = [
    { el: document.querySelector(".sun"), speed: 0.15 },
    { el: document.querySelector(".ridge-far"), speed: 0.3 },
    { el: document.querySelector(".ridge-mid"), speed: 0.45 },
    { el: document.querySelector(".dunes"), speed: 0.6 },
    { el: document.querySelector(".cacti"), speed: 0.7 },
  ];

  let ticking = false;
  function updateParallax() {
    const scrolled = window.scrollY;
    layers.forEach(({ el, speed }) => {
      if (el) el.style.transform = `translateY(${scrolled * speed}px)`;
    });
    ticking = false;
  }
  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  });
}

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Click a screenshot to enlarge it
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
document.querySelectorAll(".shots button").forEach((button) => {
  button.addEventListener("click", () => {
    lightboxImg.src = button.dataset.full;
    lightboxImg.alt = button.querySelector("img").alt;
    lightbox.showModal();
  });
});
