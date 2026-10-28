const modal = document.getElementById("imageModal");
const expandedImg = document.getElementById("expandedImg");
const captionText = document.getElementById("caption");
const cards = document.querySelectorAll(".card");

// La click pe orice card, deschide modalul
cards.forEach(card => {
  card.addEventListener("click", () => {
    const img = card.querySelector("img");
    const desc = card.getAttribute("data-desc");

    expandedImg.src = img.src;
    captionText.innerText = desc;
    
    modal.classList.add("show");
  });
});

// Închide modalul la click ABSOLUT ORIUNDE (pe fundal, pe X, pe poză sau pe text)
modal.addEventListener("click", () => {
  modal.classList.remove("show");
});

// Închide modalul la apăsarea tastei ESC (pentru utilizatorii de pe PC/Laptop)
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    modal.classList.remove("show");
  }
});