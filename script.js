document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  let currentCard = 0; // Controla el orden

  const messages = [
    "Espero la pases bien en este día solecito, muak 💖",
    "Eres mi más grande tesoro, cada día contigo es un regalo 🎁",
    "Siempre sabes como sacarme una sonrisa ✨",
    "El amor que siento por ti es infinito 💫",
    "Y finalmente... Eres la mejor novia del mundo 💌",
  ];

  const music = document.getElementById("bg-music");

  // Quitar mute después de que cargue
  window.addEventListener("load", () => {
    music.muted = false;
    music.volume = 0.4; // volumen suave romántico
  });

  cards.forEach((card, index) => {
    card.addEventListener("click", () => {
      // Solo permitir voltear la carta correcta
      if (index !== currentCard) return;

      // Si ya está abierta, no hacer nada
      if (card.classList.contains("flip")) return;

      const back = card.querySelector(".back");
      back.textContent = messages[index];

      card.classList.add("flip");

      currentCard++; // Avanza a la siguiente carta

      if (index === messages.length - 1) {
        setTimeout(() => {
          alert("¡Feliz día de San Valentín! ❤️");
        }, 800);
      }
    });
  });

  function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.textContent = "💖";
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${Math.random() * 2 + 2}s`;
    document.querySelector(".heart-rain").appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 4000);
  }

  setInterval(createHeart, 300);
});
