const burgerButton = document.querySelector(".burger-btn");
const closeButton = document.querySelector(".close-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuLink = document.querySelectorAll(".mobile-menu__link");

const openNav = () => {
  burgerButton.classList.add("visibility-hidden");
  closeButton.classList.remove("visibility-hidden");
  mobileMenu.classList.add("active");
};

const closeNav = () => {
  closeButton.classList.add("visibility-hidden");
  burgerButton.classList.remove("visibility-hidden");
  mobileMenu.classList.remove("active");
};

burgerButton.addEventListener("click", () => {
  openNav();
});

closeButton.addEventListener("click", () => {
  closeNav();
});

mobileMenuLink.forEach((link) => {
  link.addEventListener("click", () => {
    closeNav();
  });
});
