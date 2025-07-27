// Typing effect
const typingElement = document.getElementById("typing");
const typingText = "Beginner Engineer | Web Developer | UI Enthusiast";
let i = 0;
function typeEffect() {
  if (i < typingText.length) {
    typingElement.innerHTML += typingText.charAt(i);
    i++;
    setTimeout(typeEffect, 100);
  }
}
typeEffect();

// Dynamic Year
document.getElementById("year").textContent = new Date().getFullYear();

// Scroll Animation
const fadeEls = document.querySelectorAll(".fade-in");
function checkFade() {
  const triggerBottom = window.innerHeight - 100;
  fadeEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < triggerBottom) {
      el.classList.add("visible");
    }
  });
}
window.addEventListener("scroll", checkFade);
checkFade();

// Project open simulation
function openProject(project) {
  alert(`Opening ${project} project demo...`);
}
