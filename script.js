document.addEventListener("DOMContentLoaded", function() {

  const form = document.getElementById("regForm");

  if (form) {
    form.addEventListener("submit", function(event) {
      event.preventDefault();

      const name = document.getElementById("name").value;
      const plan = document.getElementById("plan").value;

      alert("Thank you " + name + "! You selected the " + plan + " plan.");
    });
  }
});
// Initialize EmailJS with your public key
emailjs.init("SoyjhPA1-auEI5veM"); // ✅ Your public key

// Your Service ID and Template ID
const serviceID = 'default_service';       // Use your EmailJS Service ID
const templateID = 'template_mxsp9ut';    // Use your EmailJS Template ID

// Grab form and message paragraph
const form = document.getElementById('registration-form');
const formMessage = document.getElementById('form-message');

// Listen for form submission
form.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent page reload

  // Send email using EmailJS
  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      // Success message
      formMessage.textContent = "Thank you! You have successfully enrolled at NuggetsGYM.";
      formMessage.style.color = "green";
      form.reset(); // Clear the form
    }, (err) => {
      // Error message
      formMessage.textContent = "Oops! Something went wrong. Please try again.";
      formMessage.style.color = "red";
      console.error("EmailJS error:", err);
    });
});

// ==========================
// HERO PARALLAX SCROLL
// ==========================
const hero = document.querySelector('.hero');
window.addEventListener('scroll', () => {
  hero.style.transform = `translateY(${window.scrollY * 0.3}px)`;
});

// ==========================
// GLASS CARD FADE-IN
// ==========================
const glassCards = document.querySelectorAll('.glass-card');
window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight * 0.85;
  glassCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom) {
      card.style.opacity = 1;
      card.style.transform = 'translateY(0)';
    } else {
      card.style.opacity = 0;
      card.style.transform = 'translateY(50px)';
    }
  });
});

// ==========================
// IMAGE LIGHTBOX
// ==========================
document.querySelectorAll('.glass-card img').forEach(img => {
  img.addEventListener('click', () => {
    const overlay = document.createElement('div');
    overlay.className = 'img-overlay';
    overlay.innerHTML = `<img src="${img.src}" alt="preview">`;
    document.body.appendChild(overlay);
    overlay.addEventListener('click', () => overlay.remove());
  });
});

