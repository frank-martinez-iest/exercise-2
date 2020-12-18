const mobileMenuIcon = document.getElementById("mobile-menu");
const mobileMenu = document.getElementById("mobile-nav");

mobileMenuIcon.addEventListener("click", () => {
  mobileMenu.classList.toggle("visible");
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    mobileMenu.classList.remove("visible");
  }
});
