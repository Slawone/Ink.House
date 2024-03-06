// mobile-menu
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

// product-lists
const countryButtons = document.querySelectorAll(".product__country-item");
const productLists = document.querySelectorAll(".product__list");

countryButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const countryButtonsTarget = e.target.getAttribute("data-btn");

    countryButtons.forEach((item) =>
      item.classList.remove("product__country-item--active")
    );

    productLists.forEach((item) => item.classList.add("visibility-hidden"));

    button.classList.add("product__country-item--active");

    document
      .getElementById(countryButtonsTarget)
      .classList.remove("visibility-hidden");
  });
});
