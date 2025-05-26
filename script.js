// script.js - Navegación suave entre secciones y cambio de tema

// --- Multi-idioma (ES/EN) ---
const translations = {
  es: {
    nav: {
      inicio: "Inicio",
      sobreMi: "Sobre mí",
      proyectos: "Proyectos",
      tecnologias: "Tecnologías y Frameworks"
    },
    title: "¡Hola! Soy Junier",
    bienvenida: "Bienvenido a mi portafolio, aqui podras ver mis proyectos, tecnologias y experiencia laboral.",
    sobreMiTitulo: "Sobre mí",
    sobreMiTexto: "Desarrollador de software, con experiencia en desarrollo de software a la medida, pruebas unitarias, manejo y seguimiento de pipelines azure dev ops, refactorización de código según estándares sonarqube, y bases de datos relacionales. Tengo un sólido conocimiento de herramientas como: C#, .Net core, Golang, Node.js, React, Typescript, Sql Server, Mysql, Graphql, Reportin Services. Actualmente estoy en búsqueda de oportunidades laborales que permitan mi desarrollo profesional, así mismo brindar mis conocimientos y experiencia en el área desarrollo de software en posiciones como: Fullstack developer, frontend o backend",
    proyectosTitulo: "Proyectos",
    proyectos: [
      {
        titulo: "Generador de Comandos .NET",
        img: "Assets/img/P1.png",
        descripcion: "Generador de comandos .NET para crear proyectos a partir de plantillas. Desarrollado en HTML, CSS y JS puro.",
        boton: "Ver más",
        link: "https://yunierayala2000.github.io/PORTFOLIO-YUN_DEV/Pages/Proyect1/commandGeneratNet.html"
      },
      {
        titulo: "Dashboard Analytics",
        img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
        descripcion: "Panel interactivo para visualización de métricas en tiempo real usando React, Chart.js y Node.js. Incluye autenticación y filtros dinámicos.",
        boton: "Ver más"
      },
      {
        titulo: "E-commerce API",
        img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
        descripcion: "API RESTful para tienda online, desarrollada en Node.js y Express, con integración de pagos y panel de administración.",
        boton: "Ver más"
      },
      {
        titulo: "Gestor de Tareas",
        img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
        descripcion: "Aplicación web para gestión de tareas con drag & drop, notificaciones y sincronización en la nube. Stack: React, Firebase.",
        boton: "Ver más"
      }
    ],
    tecnologiasTitulo: "Tecnologías y Frameworks"
  },
  en: {
    nav: {
      inicio: "Home",
      sobreMi: "About Me",
      proyectos: "Projects",
      tecnologias: "Technologies & Frameworks"
    },
    title: "Hi! I'm Junier",
    bienvenida: "Welcome to my portfolio, here you can see my projects, technologies, and work experience.",
    sobreMiTitulo: "About Me",
    sobreMiTexto: "Software developer with experience in custom software development, unit testing, Azure DevOps pipelines management, code refactoring according to SonarQube standards, and relational databases. Strong knowledge of tools such as: C#, .Net core, Golang, Node.js, React, Typescript, Sql Server, Mysql, Graphql, Reporting Services. Currently seeking job opportunities to foster my professional growth and contribute my knowledge and experience in software development as a Fullstack, frontend, or backend developer.",
    proyectosTitulo: "Projects",
    proyectos: [
      {
        titulo: ".NET Command Generator",
        img: "Assets/img/P1.png",
        descripcion: "Generador de comandos .NET para crear proyectos a partir de plantillas. Desarrollado en HTML, CSS y JS puro.",
        boton: "See more",
        link: "https://yunierayala2000.github.io/PORTFOLIO-YUN_DEV/Pages/Proyect1/commandGeneratNet.html"
      },
      {
        titulo: "Analytics Dashboard",
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
        descripcion: "Panel interactivo para visualización de métricas en tiempo real usando React, Chart.js, y Node.js. Incluye autenticación y filtros dinámicos.",
        boton: "See more"
      },
      {
        titulo: "E-commerce API",
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
        descripcion: "RESTful API for online store, built with Node.js and Express, with payment integration and admin panel.",
        boton: "See more"
      },
      {
        titulo: "Task Manager",
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
        descripcion: "Web app for task management with drag & drop, notifications, and cloud sync. Stack: React, Firebase.",
        boton: "See more"
      }
    ],
    tecnologiasTitulo: "Technologies & Frameworks"
  }
};

function setLanguage(lang) {
  const t = translations[lang];
  // Navegación
  document.querySelector('a[href="#inicio"] span:last-child').textContent = t.nav.inicio;
  document.querySelector('a[href="#sobre-mi"] span:last-child').textContent = t.nav.sobreMi;
  document.querySelector('a[href="#proyectos"] span:last-child').textContent = t.nav.proyectos;
  document.querySelector('a[href="#tecnologias"] span:last-child').textContent = t.nav.tecnologias;
  // Título y bienvenida (resetea efecto)
  window.typewriterTitleText = t.title;
  window.typewriterBodyText = t.bienvenida;
  // Sobre mí
  document.querySelector('#sobre-mi h2').textContent = t.sobreMiTitulo;
  document.querySelector('#sobre-mi p').textContent = t.sobreMiTexto;
  // Proyectos
  document.querySelector('#proyectos h2').textContent = t.proyectosTitulo;
  const proyectosCont = document.querySelector('.proyectos-lista');
  if (proyectosCont) {
    proyectosCont.innerHTML = t.proyectos.map(proj => `
      <div class="proyecto">
        <img class="proyecto-img" src="${proj.img}" alt="${proj.titulo}">
        <h3>${proj.titulo}</h3>
        <p>${proj.descripcion}</p>
        <a href="${proj.link}" target="_blank" rel="noopener">${proj.boton}</a>
      </div>
    `).join('');
  }
  // Tecnologías
  document.querySelector('#tecnologias h2').textContent = t.tecnologiasTitulo;
  // Sincroniza select y botones
  document.getElementById('lang-select').value = lang;
  document.getElementById('lang-es').classList.toggle('selected', lang === 'es');
  document.getElementById('lang-en').classList.toggle('selected', lang === 'en');
  // Reinicia el efecto máquina de escribir
  startTypewriter();
}

// Manejo de eventos de idioma
function setupLanguageSwitcher() {
  document.getElementById('lang-es').addEventListener('click', () => {
    setLanguage('es');
    localStorage.setItem('lang', 'es');
  });
  document.getElementById('lang-en').addEventListener('click', () => {
    setLanguage('en');
    localStorage.setItem('lang', 'en');
  });
  document.getElementById('lang-select').addEventListener('change', (e) => {
    setLanguage(e.target.value);
    localStorage.setItem('lang', e.target.value);
  });
}

// Efecto máquina de escribir para el título y el texto de bienvenida
function startTypewriter() {
  const typewriterTitle = document.getElementById('typewriter-title');
  const typewriter = document.getElementById('typewriter');
  const titleText = window.typewriterTitleText || translations.es.title;
  const bodyText = window.typewriterBodyText || translations.es.bienvenida;
  let i = 0, j = 0;
  typewriterTitle.textContent = '';
  typewriter.textContent = '';
  function typeTitle() {
    if (i < titleText.length) {
      typewriterTitle.textContent += titleText.charAt(i);
      i++;
      setTimeout(typeTitle, 65);
    } else {
      setTimeout(typeBody, 400);
    }
  }
  function typeBody() {
    if (j < bodyText.length) {
      typewriter.textContent += bodyText.charAt(j);
      j++;
      setTimeout(typeBody, 38);
    }
  }
  if(typewriterTitle && typewriter) typeTitle();
}

window.addEventListener('DOMContentLoaded', () => {
  
  setupLanguageSwitcher();
  // Idioma por defecto o guardado
  const lang = localStorage.getItem('lang') || 'es';
  setLanguage(lang);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// --- Mantener activa la opción seleccionada en el nav ---
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-list a');

  function setActiveLink(link) {
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  }

  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      setActiveLink(this);
    });
  });

  // Opcional: activar según scroll
  const sectionIds = Array.from(navLinks).map(link => link.getAttribute('href'));
  function onScroll() {
    let scrollPos = window.scrollY || window.pageYOffset;
    for (let i = sectionIds.length - 1; i >= 0; i--) {
      const section = document.querySelector(sectionIds[i]);
      if (section && section.offsetTop <= scrollPos + 80) {
        setActiveLink(navLinks[i]);
        break;
      }
    }
  }
  window.addEventListener('scroll', onScroll);
});
// --- Fin nav activo ---

// Cambio de tema claro/oscuro
document.addEventListener('DOMContentLoaded', function() {
    const themeBtn = document.getElementById('toggle-theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    const root = document.body;

    function setTheme(isDark) {
        if (isDark) {
            root.classList.add('dark-mode');
            themeBtn.textContent = '☀️';
        } else {
            root.classList.remove('dark-mode');
            themeBtn.textContent = '🌙';
        }
    }

    // Inicializa el tema
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        setTheme(true);
    } else {
        setTheme(false);
    }

    themeBtn.addEventListener('click', function() {
        const isDark = !root.classList.contains('dark-mode');
        setTheme(isDark);
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });

    // Carrusel de tecnologías
    // Función para auto-scroll en múltiples carruseles
    function autoScrollCarrusel(carruselId) {
        const carrusel = document.getElementById(carruselId);
        if (!carrusel) return;

        // Duplica los elementos para efecto infinito
        if (!carrusel.dataset.infinite) {
            carrusel.innerHTML += carrusel.innerHTML;
            carrusel.dataset.infinite = 'true';
        }

        setInterval(() => {
            // Si llegó a la mitad (original items + clones), vuelve al inicio de forma fluida
            if (carrusel.scrollLeft >= carrusel.scrollWidth / 2) {
                carrusel.scrollLeft = 0;
            } else {
                carrusel.scrollLeft += 1;
            }
        }, 16); // 60fps
    }

    // Llama la función para el primer carrusel (derecha)
    autoScrollCarrusel('carrusel-tecnologias-1');
    autoScrollCarrusel('carrusel-tecnologias-2');

});
