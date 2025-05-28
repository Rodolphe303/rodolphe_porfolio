// Typing effect
const roleElement = document.querySelector('.role');
const text = "Technicien en maintenance informatique & designer graphique";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    roleElement.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 70);
  }
}

roleElement.innerHTML = "";
typeWriter();

// Fade-in on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

document.querySelectorAll('.card, .btn, .social-icons a').forEach(el => {
  el.classList.add('hidden');
  observer.observe(el);
});
