// Mobile menu toggle
const menuIcon = document.getElementById("menu-icon");
const navBar = document.querySelector(".nav-bar");

menuIcon.addEventListener("click", () => {
  navBar.classList.toggle("active");
});

document.querySelectorAll(".nav-bar a").forEach((link) => {
  link.addEventListener("click", () => {
    navBar.classList.remove("active");
  });
});

// Highlight active nav link on scroll
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-bar a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Typed.js role rotator
if (window.Typed) {
  new Typed(".typed-text", {
    strings: [
      "NestJS &amp; Node.js".replace("&amp;", "&"),
      "PHP (Mezzio / Swoole)",
      "Microservices &amp; DDD".replace("&amp;", "&"),
      "REST API Architect",
    ],
    typeSpeed: 70,
    backSpeed: 40,
    backDelay: 1500,
    loop: true,
  });
}

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
