const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  });

const hidden = document.querySelectorAll('.hidden');
hidden.forEach((el) => observer.observe(el));

var c=0;

hidden.forEach((hide) => {
    hide.style.transitionDelay = `0s, ${c}ms`;
    c+=100;
});