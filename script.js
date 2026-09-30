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

// Destination dropdown: show why each place is on the list
const destinationNotes = {
  california: "Silicon Valley is home to Google, Apple, Meta, and so many other companies pushing AI and software forward. I'd love to be close to that energy.",
  japan: "Tokyo has huge tech names like Sony, Nintendo, and SoftBank, plus a strong robotics and AI research scene I'd want to learn from.",
  china: "Shenzhen and Beijing are home to giants like Tencent, Alibaba, and ByteDance, and some of the fastest-moving tech development in the world.",
};
const destinationSelect = document.getElementById("destination");
const destinationNote = document.getElementById("destination-note");
if (destinationSelect) {
  destinationSelect.addEventListener("change", () => {
    destinationNote.textContent = destinationNotes[destinationSelect.value] || "";
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
