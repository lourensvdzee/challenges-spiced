console.clear();

const main = document.querySelector('[data-js="main"]');

/* Looking at the [`js/index.js`](./js/index.js) , there is

- an `ol` created and appended to the document
- a string array stored to a variable called `programmingLanguages`.

For each array item, create a list item for the ordered list with its value as visible text. Use the `for...of` loop.

The following hints may guide you:

- What was the property to set the text of an HTML element again?
- Don't forget to append each list item!

Please switch to the [`js/index.js`](./js/index.js) file and be a navigator! */

// Create a list from an array

const ol = document.createElement("ol");
main.append(ol);

const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "PHP",
  "Ruby",
];

// --v-- write/change code here --v--

//      we're using `for...of` because we are looping through all items of the array programmingLanguages
for (const language of programmingLanguages) {
  //    within the already created ol, we are adding a li (don't forget the append function)
  const li = document.createElement("li");
  //    li.textContent is adding the programming languages
  li.textContent = language;
  ol.appendChild(li);
}
// --^-- write/change code here --^--
