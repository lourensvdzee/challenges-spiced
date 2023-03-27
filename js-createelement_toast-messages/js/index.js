console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');


addButton.addEventListener("click", (event) => {
  // Exercise: Append a new entry to the toast messages container
  const newContainer = document.createElement("li");
  newContainer.classList.add("toast-container__message");
  newContainer.textContent = "new container";
  toastContainer.append(newContainer);
});

clearButton.addEventListener("click", () => {
  // Exercise: Clear the stack of toast messages
  const cardContainer = document.querySelector(`[data-js="toast-container"]`);
  cardContainer.innerHTML = "";
});

