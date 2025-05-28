const menuIcon = document.getElementById("menu-icon");
const navLinks = document.querySelector(".header-ul");

// Toggle menu on click
menuIcon.addEventListener("click", (e) => {
  e.stopPropagation();
  navLinks.classList.toggle("active");
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (
    navLinks.classList.contains("active") &&
    !e.target.closest(".header-ul") &&
    !e.target.closest("#menu-icon")
  ) {
    navLinks.classList.remove("active");
  }
});

window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");

  gsap.to(preloader, {
    opacity: 0,
    duration: 0.6,
    onComplete: () => (preloader.style.display = "none"),
  });
});

var tl = gsap.timeline();

tl.from(".header-logo", {
  y: -100,
  duration: 1,
  ease: "bounce.out",
  opacity: 0,
});
tl.from(".header-li", {
  // duration: 0.5,
  y: -100,
  stagger: 0.1,
  opacity: 0,
});

//Banner Section
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.pagination .item');
const prevArrow = document.querySelector('.arrow.prev');
const nextArrow = document.querySelector('.arrow.next');

let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('is-active', i === index);
    dots[i].classList.toggle('is-active', i === index);
  });
  currentIndex = index;
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => showSlide(index));
});

prevArrow.addEventListener('click', () => {
  const newIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(newIndex);
});

nextArrow.addEventListener('click', () => {
  const newIndex = (currentIndex + 1) % slides.length;
  showSlide(newIndex);
});

// Optional: auto-slide every 5 seconds
setInterval(() => {
  const newIndex = (currentIndex + 1) % slides.length;
  showSlide(newIndex);
}, 4000);
