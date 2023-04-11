export function getAnimal(animal) {
    if (animal === "cats") {
        return "I totally love cats!";
    }
    if (animal === "dogs") {
        return "I like dogs!";
    } else {
        return "I do not like animals at all!"
    }
}

const result = getAnimal("dogs");
console.log(result);

