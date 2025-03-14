document.addEventListener('DOMContentLoaded', function() {
  const fadeElements = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });

  fadeElements.forEach(element => {
    observer.observe(element);
  });
}); 

document.querySelector(".about ").addEventListener("click", () => {
  window.scrollTo({
    top: 0, 
    behavior: "smooth" 
  });
});

document.querySelector(".skills").addEventListener("click", () => {
  const targetElement = document.querySelector(".progress-skills-container"); 
  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop - 140, 
      behavior: "smooth"
    });
  }
});

document.querySelector(".projects").addEventListener("click", () => {
  const targetElement = document.querySelector(".projects-container"); 
  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop - 140, 
      behavior: "smooth"
    });
  }
});

const body = document.querySelector('body');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      body.style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)),  url(images/stars.jpg)';
      observer.unobserve(body);
    }
  });
});

observer.observe(body);
