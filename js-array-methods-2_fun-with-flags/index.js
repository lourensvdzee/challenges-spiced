import { countries } from "./utils/countries.js";
import { Country } from "./components/Country/Country.js";

const container = document.querySelector('[data-js="card-container"]');
const queryInput = document.querySelector('[data-js="query-input"]');

//### part 1
/* queryInput.addEventListener("input", (event) => {
  // console.log('event happened!');
  container.innerHTML = "";

  const searchString = event.target.value;

  const foundCountry = countries.find((country) =>
    country.name.startsWith(searchString.toLowerCase));

  if (foundCountry) {
    console.log("country found: ", foundCountry.name);
    const countryElement = Country(foundCountry);
    container.append(countryElement);
  }
}); */

//### part 2
queryInput.addEventListener("input", (event) => {
  container.innerHTML = "";

  const searchString = event.target.value.toLowerCase();

  const foundCountries = countries.filter((country) => {
    return country.name.toLowerCase().startsWith(searchString);
  });

  console.clear();
  foundCountries.forEach((country) => {
    if (country) {
      console.log(country);
      const countryElement = Country(country);
      container.append(countryElement);
    }
  });
});