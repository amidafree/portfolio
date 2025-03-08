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
    top: 0, // 500px の高さまで移動
    behavior: "smooth" // スムーズなスクロール
  });
});

document.querySelector(".skills").addEventListener("click", () => {
  const targetElement = document.querySelector(".progress-skills-container"); // スクロール先の要素
  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop - 140, // 要素の位置までスクロール
      behavior: "smooth"
    });
  }
});

document.querySelector(".projects").addEventListener("click", () => {
  const targetElement = document.querySelector(".projects-container"); // スクロール先の要素
  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop - 140, // 要素の位置までスクロール
      behavior: "smooth"
    });
  }
});