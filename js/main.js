// Toggle hamburger menu
function toggleMenu() {
  const nav = document.getElementById("nav-links");
  nav.classList.toggle("show");
}


document.addEventListener("DOMContentLoaded", function () {
gsap.registerPlugin(ScrollTrigger);

// Fade & scroll up video
gsap.to(".hero-video", {
opacity: 0,
scrollTrigger: {
trigger: ".hero",
start: "top top",
end: "bottom top",
scrub: true
}
});
// Animate image from left/right
gsap.utils.toArray(".game-entry").forEach(entry => {
const isReversed = entry.classList.contains("reverse");

const image = entry.querySelector(".game-image");
const info = entry.querySelector(".game-info");

gsap.from(image, {
  x: isReversed ? 100 : -100,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: entry,
    start: "top 80%",
    toggleActions: "play none none reverse"
  }
});

gsap.from(info, {
  x: isReversed ? -100 : 100,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: entry,
    start: "top 80%",
    toggleActions: "play none none reverse"
  }
});

});

// Darken background after scroll
gsap.to("#games-section", {
backgroundColor: "#060606",
scrollTrigger: {
trigger: "#games-section",
start: "top 80%",
end: "top 20%",
scrub: true
}
});
});


// FOOTER


// ...existing code...

// FOOTER ANIMATION ON SCROLL
gsap.from(".profile-img", {
  opacity: 0,
  scale: 0.5,
  y: 25,
  duration: 0.5,
  ease: "back.out(1.7)",
  scrollTrigger: {
    trigger: ".footer",
    start: "top 85%", // Adjust as needed
    toggleActions: "play none none reverse"
  }
});

gsap.from(".social", {
  opacity: 0,
  y: 40,
  scale: 0.7,
  duration: 0.5,
  ease: "back.out(1.7)",
  stagger: 0.15,
  delay: 0.2,
  scrollTrigger: {
    trigger: ".footer",
    start: "top 85%", // Adjust as needed
    toggleActions: "play none none reverse"
  }
});
// ...existing code...