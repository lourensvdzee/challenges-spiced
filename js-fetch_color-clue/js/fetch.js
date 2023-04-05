import { setColorToGuess, getRandomHexCode } from "./utils.js";

export async function fetchNewColor() {
  const hexCode = getRandomHexCode();
  const colorApiUrl = `https://www.thecolorapi.com/id?hex=${hexCode}`;
  /**
   * Hint 1:
   * Use the fetch API to get the hex value and the name of the closest
   * named color to the randomly generated `hexCode` from the color API.
   * These values can be found in `.name.closest_named_hex` and
   * `.name.value` properties of the response data respectively.
   *
   * Hint 2:
   * Call the `setColorToGuess` function to set the color to guess.
   * The function takes two arguments:
   *  - the hex code of the closest named color
   *  - and the name of the closest named color
   */

  // --v-- your code here --v--
  /*   async function fetchColorData(hexCode) {
      try {
        const response = await fetch(`https://www.thecolorapi.com/id?hex=${hexCode}`);
        const data = await response.json();
        console.log(data);
        return data;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  
    fetchColorData(); */

  async function fetchColorToGuess(hexCode) {
    const response = await fetch(colorApiUrl);
    const data = await response.json();
    const closestNamedHex = data.name.closest_named_hex;
    const closestNamedColor = data.name.value;
    setColorToGuess(closestNamedHex, closestNamedColor);
  }

  // example usage
  fetchColorToGuess("FF0000");

  // --^-- your code here --^--
}
