
/*more details button*/
const toggles = document.querySelectorAll(".toggle");
toggles.forEach((toggle) => {
    const container = toggle.closest(".info-box"); //find closest parent div
    if (container){
      toggle.addEventListener("click", () => {
        container.classList.toggle("active");
      });
    }
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


// In your assets/js/script.js file (or in a <script> tag in your HTML if you prefer)

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.message-form');
  if (form) {
    form.addEventListener('submit', function(event) {
      // Web3Forms is handling the submission, so no need for event.preventDefault()

      const textarea = document.getElementById('message');
      if (textarea) {
        // Delay clearing the textarea using setTimeout
        setTimeout(() => {
          textarea.value = ''; // Clear the textarea after a short delay
        }, 1000); // Adjust the delay (in milliseconds) as needed. 500ms (0.5 seconds) is usually sufficient.
      }
    });
  }
});
