console.clear();

const animals = [
  {
    name: "cat",
    weight: 4,
    continents: [
      "Europe",
      "Asia",
      "Africa",
      "Australia",
      "North-America",
      "South-America",
    ],
  },
  {
    name: "dog",
    weight: 10,
    continents: [
      "Europe",
      "Asia",
      "Africa",
      "Australia",
      "North-America",
      "South-America",
    ],
  },
  { name: "elephant", weight: 4000, continents: ["Africa", "Asia"] },
  {
    name: "rabbit",
    weight: 2,
    continents: [
      "Europe",
      "Asia",
      "Africa",
      "Australia",
      "North-America",
      "South-America",
    ],
  },
  { name: "lion", weight: 200, continents: ["Africa"] },
  { name: "tiger", weight: 150, continents: ["Asia"] },
  {
    name: "horse",
    weight: 500,
    continents: [
      "Europe",
      "Asia",
      "Africa",
      "Australia",
      "North-America",
      "South-America",
    ],
  },
  { name: "giraffe", weight: 600, continents: ["Africa"] },
  { name: "zebra", weight: 300, continents: ["Africa"] },
  {
    name: "penguin",
    weight: 12,
    continents: ["Africa", "Australia", "Antarctica", "South-America"],
  },
  {
    name: "polar bear",
    weight: 450,
    continents: ["North-America", "Asia", "Arctic"],
  },
  { name: "panda", weight: 120, continents: ["Asia"] },
  { name: "koala", weight: 13, continents: ["Australia"] },
  { name: "kangaroo", weight: 70, continents: ["Australia"] },
  {
    name: "monkey",
    weight: 20,
    continents: ["South-America", "Asia", "Africa"],
  },
  { name: "sloth", weight: 8, continents: ["South-America"] },
  { name: "hippo", weight: 1500, continents: ["Africa"] },
  { name: "rhino", weight: 2000, continents: ["Asia", "Africa"] },
];

// Hint: Besides the array method, check out the string method `startsWith()`.
const firstAnimalStartingWithLetterG = animals.filter((animal) => animal.name.startsWith("g"));
// console.log("firstAnimalStartingWithLetterG:", firstAnimalStartingWithLetterG);

const indexOfAnimalWithNameLongerFive = animals
  .filter((animal) => animal.name.length > 5)
  .map((animal) => animals.indexOf(animal));
// console.log(indexOfAnimalWithNameLongerFive)

// Note:
// - Sorting strings is slightly more complicated than sorting numbers.
// - You will need if-statements and return values of -1, 1, and 0.
// - Check out MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

// Hint: There is no need to upper-/lowercase the strings before sorting them.
// Hint: sort() mutates the original array, which is bad.
// -> Use animals.slice().sort(...) to make a copy (and the tests work).

const animalsSortedAlphabetically = animals.slice().sort((a, b) => {
  if (a.name > b.name) return 1;
  else if (a.name < b.name) return -1;
  return 0;
}).map(animal => animal.name);
// console.log(animalsSortedAlphabetically);

const animalsSortedByWeightStartingWithLowest = animals.slice().sort((a, b) => {
  if (a.weight > b.weight) return 1;
  else if (a.weight < b.weight) return -1;
  return 0;
}).map(animal => animal.name);
// console.log(animalsSortedByWeightStartingWithLowest);

const animalsSortedByWeightReversed = animals.slice().sort((a, b) => {
  return b.weight - a.weight;
}).map(animal => animal.name);
// console.log(animalsSortedByWeightReversed);

const animalWithWeightMoreThanFivehundredExists = animals.some(animal => animal.weight > 500);
console.log("animalWithWeightMoreThanFivehundredExists:", animalWithWeightMoreThanFivehundredExists);

// Hint: Filter for Europe first, then check every animal for its weight.
const allAnimalsInEuropeWeighLessThanOnehundred = animals.filter((animal) => {
  return animal.weight < 100 && animal.continents.includes("Europe");
}).map(animal => animal.name);
console.log("allAnimalsInEuropeWeighLessThanOnehundred:", allAnimalsInEuropeWeighLessThanOnehundred);

// Hint: filter + map + reduce
const weightOfAllAnimalsInAfrica = animals.filter(animal => animal.continents.includes("Africa")).reduce((acc, animal) => acc + animal.weight, 0);
console.log("weightOfAllAnimalsInAfrica:", weightOfAllAnimalsInAfrica);

// Hint: As above, but divided by the number of animals in Africa.
const animalsInAfrica = animals.filter(animal => animal.continents.includes("Africa"));
const numberOfAnimalsInAfrica = animalsInAfrica.length;
const totalWeightOfAnimalsInAfrica = animalsInAfrica.reduce((acc, animal) => acc + animal.weight, 0);
const averageWeightOfAllAnimalsInAfrica = totalWeightOfAnimalsInAfrica / numberOfAnimalsInAfrica;
console.log("averageWeightOfAllAnimalsInAfrica:", averageWeightOfAllAnimalsInAfrica);

export {
  firstAnimalStartingWithLetterG,
  indexOfAnimalWithNameLongerFive,
  animalsSortedAlphabetically,
  animalsSortedByWeightStartingWithLowest,
  animalsSortedByWeightReversed,
  animalWithWeightMoreThanFivehundredExists,
  allAnimalsInEuropeWeighLessThanOnehundred,
  weightOfAllAnimalsInAfrica,
  averageWeightOfAllAnimalsInAfrica,
};
