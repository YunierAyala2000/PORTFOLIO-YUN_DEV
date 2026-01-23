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

// Language Toggle
const translations = {
  es: {
    "nav.about": "Sobre Mí",
    "nav.experience": "Experiencia",
    "nav.projects": "Proyectos",
    "nav.skills": "Habilidades",
    "hero.title": "Desarrollador de Software Full-Stack",
    "hero.subtitle":
      "Creando soluciones web robustas y escalables con un enfoque en la experiencia del usuario.",
    "hero.downloadCV": "Descargar CV",
    "hero.contact": "Contáctame",
    "about.title": "Sobre Mí",
    "about.description":
      " Soy un apasionado desarrollador de software con experiencia en la creación de aplicaciones web completas. Me especializo en tecnologías modernas y disfruto resolviendo problemas complejos para ofrecer productos de alta calidad. Mi objetivo es seguir aprendiendo y contribuyendo a proyectos innovadores que tengan un impacto positivo. Tengo experiencia en desarrollo de software a la medida, pruebas unitarias, manejo y seguimiento de pipelines azure dev ops, refactorización de código según estándares de sonarqube, y bases de datos relacionales y no relacionales. Tengo un sólido conocimiento de herramientas como C#, .Net core, Node.js, Vuejs , React, Java Scritp, Typescript, Sql Server, Mysql, Reportin Services, DevExpress.",
    "experience.title": "Experiencia Laboral",
    "projects.title": "Proyectos Destacados",
    "projects.project1.title": "Generador de Comandos .NET",
    "projects.project1.description":
      "Generador de comandos .NET para crear proyectos a partir de plantillas.",
    "projects.project2.title": "Generador de texto a voz",
    "projects.project2.description":
      "Generador de texto a voz en tiempo real con ajustes de voz.",
    "projects.project3.title": "YouGym",
    "projects.project3.description":
      "Plataforma multiplataforma para la gestion de mensualidades, fechas de vencimiento, regristro de ingresos y alumnos de gimnasios Pequeños. Esta app la puedes usar en tu pc, mobil y navegar, puedes descargarla en cualquier dispositivo",
    "projects.demo": "Demo",
    "skills.title": "Tecnologías y Habilidades",
    "footer.rights":
      "© 2023 Junier Ayala Perez. Todos los derechos reservados.",
  },
  en: {
    "nav.about": "About Me",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "hero.title": "Full-Stack Software Developer",
    "hero.subtitle":
      "Creating robust and scalable web solutions with a focus on user experience.",
    "hero.downloadCV": "Download CV",
    "hero.contact": "Contact Me",
    "about.title": "About Me",
    "about.description":
      "I am a passionate software developer with experience in building complete web applications. I specialize in modern technologies and enjoy solving complex problems to deliver high-quality products. My goal is to keep learning and contributing to innovative projects that have a positive impact.",
    "experience.title": "Work Experience",
    "projects.title": "Featured Projects",
    "projects.project1.title": ".NET Command Generator",
    "projects.project1.description":
      ".NET command generator to create projects from templates.",
    "projects.project2.title": "Text to Speech Generator",
    "projects.project2.description":
      "Real-time text-to-speech generator with voice adjustments.",
    "projects.project3.title": "YouGym",
    "projects.project3.description":
      "Multi-platform platform for managing memberships, due dates, income registration, and student records for small gyms. You can use this app on your PC, mobile device, and web browser; you can download it on any device.",
    "projects.demo": "Demo",
    "skills.title": "Technologies and Skills",
    "footer.rights": "© 2023 Junier Ayala Perez. All rights reserved.",
  },
};

let currentLang = localStorage.getItem("language") || "es";
const langToggle = document.getElementById("langToggle");

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("language", lang);

  // Actualizar todos los elementos con data-i18n
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  // Actualizar el texto del botón de idioma
  langToggle.querySelector(".lang-text").textContent =
    lang === "es" ? "EN" : "ES";

  // Actualizar el atributo lang del HTML
  document.documentElement.lang = lang;
}

// Inicializar idioma
setLanguage(currentLang);

langToggle.addEventListener("click", () => {
  const newLang = currentLang === "es" ? "en" : "es";
  setLanguage(newLang);
});

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
