// Theme Toggle
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// Cargar tema guardado (por defecto: dark)
const savedTheme = localStorage.getItem("theme") || "dark";
body.classList.add("dark"); // Asegurar que dark esté activo
if (savedTheme === "light") {
  body.classList.remove("dark");
}
updateThemeIcon();

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  const currentTheme = body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", currentTheme);
  updateThemeIcon();
});

function updateThemeIcon() {
  const icon = themeToggle.querySelector(".material-symbols-outlined");
  if (body.classList.contains("dark")) {
    icon.textContent = "light_mode";
  } else {
    icon.textContent = "dark_mode";
  }
}

// Smooth Scroll para navegación
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Form Submission
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Aquí puedes agregar la lógica para enviar el formulario
    // Por ahora solo mostramos un mensaje
    alert("¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.");
    contactForm.reset();
  });
}

// Animación al hacer scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Aplicar animación a las tarjetas de proyectos
document.querySelectorAll(".project-card").forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(20px)";
  card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(card);
});

// Aplicar animación a las secciones
document.querySelectorAll(".section").forEach((section) => {
  section.style.opacity = "0";
  section.style.transform = "translateY(20px)";
  section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(section);
});

// Efecto parallax suave en el hero
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector(".hero");
  if (hero) {
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    hero.style.opacity = 1 - scrolled / 800;
  }
});

// Highlight del nav en scroll
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.style.color = "";
    if (link.getAttribute("href") === `#${current}`) {
      link.style.color = "var(--primary)";
    }
  });
});
