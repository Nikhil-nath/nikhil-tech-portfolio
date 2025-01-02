/*more details button*/
const container = document.querySelector(".info-box");

const toggle = document.querySelector(".toggle");
toggle.addEventListener("click", () => {
  container.classList.toggle("active");
});

/*vibration*/
function vibrate() {
  navigator.vibrate(6);
}

// Zoom in up effect add in every social media button one by one
const socialMediaLinks = document.querySelectorAll(".social-media div");

// ON SCROLL REVEAL SMALL CARDS
ScrollReveal().reveal(socialMediaLinks, {
  duration: 1000,
  opacity: 0,
  distance: "30%",
  origin: "bottom",
  scale: 0.9,
});

// on load name effect 
setTimeout(() => document.querySelector('.name').classList.add('loaded'), 500);


// svg animation
gsap.fromTo(
  ".loading-page",
  { opacity: 1 },
  {
    opacity: 0,
    display: "none",
    duration: 1.5,
    delay: 3.5,
  }
);

gsap.fromTo(
  ".logo-name",
  {
    y: 50,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 2,
    delay: 0.5,
  }
);