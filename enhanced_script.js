
// Smooth scroll for navigation
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// Scroll reveal effect using Intersection Observer
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal-visible');
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.section').forEach(section => {
  section.classList.add('reveal');
  observer.observe(section);
});

// Typing animation for intro
const introText = document.querySelector('.intro p');
if (introText) {
  const text = "A passionate IT specialist & technologist.";
  let index = 0;
  const type = () => {
    if (index < text.length) {
      introText.textContent += text.charAt(index);
      index++;
      setTimeout(type, 50);
    }
  };
  introText.textContent = '';
  type();
}

// Add style for reveal effect
const style = document.createElement('style');
style.textContent = `
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}
.reveal-visible {
  opacity: 1;
  transform: none;
}
`;
document.head.appendChild(style);

// Dynamic project list
const projects = [
  {
    title: "Hardware & Software Support",
    image: "H&S.jpeg",
    description: "Providing comprehensive hardware and software support to ensure smooth IT operations.Involved in windows upgrades, VOIP installations,Internet connection changes, CCTV installs  and system troubleshooting."

  },
  {
    title: "Backup & Disaster Recovery",
    image: "Backup.jpg",
    description: "Implemented robust backup solutions and disaster recovery plans to protect critical data and ensure business continuity."
  
  },
  {
    title: "Sys Admin Experience",
    image: "system.jpg",
    description: "Hands-on experience in system administration, managing servers, and ensuring system reliability."

  },
  {
    title: "Network Monitoring System Installtion, maintenance and Support",
    image: "Observium.png",
    description: "Installation, maintenance, and support of network monitoring systems for efficient IT operations."
  },
  {
    title: "AI usage & acceptance policy creation and implimentation",
    image: "Ai act.png",
    description: "Creation and implementation of AI usage and acceptance policies to ensure ethical AI deployment."

  },
  {
    title: "web development",
    image: "Web.jpg",
    description: "Involved in web development projects, including creating a hostel finder website,government funded technical competency application and QR code based ordering managment system."
    
   
  },



];

const projectGrid = document.getElementById("project-grid");

if (projectGrid) {
  projects.forEach(proj => {
    const div = document.createElement("div");
    div.innerHTML = `
      <img src="${proj.image}" alt="${proj.title}" style="width:100%; border-radius: 8px;">
      <h3 style="margin-top:10px;">${proj.title}</h3>
      <p>${proj.description}</p>
    `;
    projectGrid.appendChild(div);
  });
}

// Text highlight color changer
const colorPicker = document.getElementById("textColorSelect");
if (colorPicker) {
  colorPicker.addEventListener("change", () => {
    document.body.style.setProperty('--primary-color', colorPicker.value);
  });
}

// Toggle navigation sidebar (for mobile)
const navToggler = document.querySelector(".nav-toggler");
const aside = document.querySelector(".aside");

if (navToggler && aside) {
  navToggler.addEventListener("click", () => {
    aside.classList.toggle("open");
  });
}

// Close sidebar when a nav link is clicked (mobile only)
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      aside.classList.remove('open');
    }
  });
});

// Paintbrush button to cycle text colors
const paintBtn = document.querySelector(".color-toggle-btn");
const colorOptions = ['#00ffcc', '#ff4081', '#ffcc00', '#00bfff', '#32cd32'];
let currentColorIndex = 0;

if (paintBtn) {
  paintBtn.addEventListener("click", () => {
    currentColorIndex = (currentColorIndex + 1) % colorOptions.length;
    document.body.style.setProperty('--primary-color', colorOptions[currentColorIndex]);
  });
}

