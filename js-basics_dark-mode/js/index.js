console.clear();

const bodyElement = document.querySelector('[data-js="body"]');
const darkModeButton = document.querySelector('[data-js="dark-mode-button"]');

darkModeButton.addEventlistener("click", () => {
  bodyElement.classList.add("dark");
});
