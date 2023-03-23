console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const success = document.querySelector('[data-js="success" ]');

function hideMessage(message) {
  message.setAttribute("hidden", "");
}

function showMessage(message) {
  message.removeAttribute("hidden");
}

hideMessage(success);
hideMessage(tosError);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
  const elements = event.target.elements;
  const ifCheckboxChecked = elements.tos.checked;
  if (!ifCheckboxChecked) {
    showMessage(tosError);
    return;
  } else {
    showMessage(success);
    hideMessage(tosError);
    alert("Form submitted");
  }
  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
});
