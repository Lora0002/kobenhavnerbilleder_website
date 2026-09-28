const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", isOpen);
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

document.querySelectorAll(".chapter-toggle").forEach(button => {
  button.addEventListener("click", () => {
    const chapter = button.closest(".chapter");
    chapter.classList.toggle("open");
  });
});

// Gør billeder med manglende fil mere diskrete i stedet for at vise et ødelagt billede.
document.querySelectorAll("img").forEach(img => {
  img.addEventListener("error", () => {
    img.style.display = "none";
  });
});
