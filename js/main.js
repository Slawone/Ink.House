const burgerButton = document.querySelector(".burger-btn");
const closeButton = document.querySelector(".close-btn");

const openCloseNav = () => {
  burgerButton.addEventListener('click', () => {
    burgerButton.classList.add("visibility-hidden");
    closeButton.classList.remove("visibility-hidden");
  })

  closeButton.addEventListener("click", () => {
    closeButton.classList.add("visibility-hidden");
    burgerButton.classList.remove("visibility-hidden");
  });
}

openCloseNav()