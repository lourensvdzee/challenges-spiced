console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  let numberA = parseInt(data["numberA"]);
  let numberB = parseInt(data["numberB"]);
  let operation = data["operator"];
  switch (operation) {
    case "addition":
      result = add(numberA, numberB);
      resultOutput.textContent = result;
      break;
    case "subtraction":
      result = subtract(numberA, numberB);
      resultOutput.textContent = result;
      break;
    case "multiplication":
      result = multiply(numberA, numberB);
      resultOutput.textContent = result;
      break;
    case "division":
      if (numberB == 0) {
        resultOutput.textContent = "pamietaj cholero, nie dziel przez zero!";
        break;
      }

      result = divide(numberA, numberB);
      resultOutput.textContent = result;
      break;
  }


  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
