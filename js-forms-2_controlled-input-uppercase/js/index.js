console.clear();

const input = document.querySelector('[data-js="toUpperCase"]');

input.addEventListener("input", (event) => {
    console.log(event);
    input.value = event.target.value.toUpperCase();
});