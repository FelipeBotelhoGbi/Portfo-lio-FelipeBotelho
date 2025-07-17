// Animações de scroll
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');
  for (let el of reveals) {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const visiblePoint = 100;

    if (elementTop < windowHeight - visiblePoint) {
      el.classList.add('visible');
    }
  }
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Função para copiar e-mail
function copyEmail() {
  const emailText = document.getElementById("email").innerText;
  navigator.clipboard.writeText(emailText).then(() => {
    alert("Email copiado!");
  });
}
