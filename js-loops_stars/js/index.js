console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  //--v-- your code here --v--

  //Part 1
  // Create five empty stars
  /*   for (let i = 1; i <= 5; i++) {
      console.log(`Creating our empty stars ${i}`); // Output message to console
  
      const emptyStar = document.createElement("img"); // Create a new img element
      emptyStar.src = "assets/star-empty.svg"; // Set the src attribute of the img element to the empty star image
      starContainer.appendChild(emptyStar); // Append the img element to the star container
   */

  //Part 2
  // Create five empty stars
  /* for (let i = 1; i <= 5; i++) {
    console.log(`Creating star ${i}`);

    const star = document.createElement("img");

    // Determine if the star should be filled or empty based on the filledStars input parameter and the current iteration of the for loop
    if (i <= filledStars) {
      star.src = "assets/star-filled.svg"; // Set the src attribute of the img element to the filled star image
    } else {
      star.src = "assets/star-empty.svg"; // Set the src attribute of the img element to the empty star image
    }

    starContainer.appendChild(star);

  }
} */

  //Part 3
  // Create five empty stars
  for (let i = 1; i <= 5; i++) {
    console.log(`Creating star ${i}`);

    const star = document.createElement("img");

    // Determine if the star should be filled or empty based on the filledStars input parameter and the current iteration of the for loop
    if (i <= filledStars) {
      star.src = "assets/star-filled.svg"; // Set the src attribute of the img element to the filled star image
    } else {
      star.src = "assets/star-empty.svg"; // Set the src attribute of the img element to the empty star image
    }

    // Add a click event listener to each star
    star.addEventListener("click", function () {
      // console.log(`Star ${i} clicked`);
      renderStars(i); // Call renderStars with the current value of i to render the correct number of filled stars
    });

    starContainer.appendChild(star); // Append the img element to the star container
  }
}

/* star.addEventListener("click", () => {
  console.log("clicked on a starrr");
});
starContainer.append(star); */

//--^-- your code here --^--


renderStars(0); // Call the function to initially render the stars

