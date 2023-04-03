console.clear();

const url = "https://swapi.dev/api/people";

// 1. returns entire data object
/* function fetchData() {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        });
} */

// 2. returns different names of the data object

/* function fetchData() {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log("Data fetched:", data);
            const names = data.results.map((person) => person.name);
            console.log("Names extracted:", names);
        })
      .catch((error) => {
         console.error("Error fetching data:", error);
     }); 
} */

// 3. returns eye colors from R2-D2
/* function fetchData() {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log("Data fetched:", data);
            const r2d2 = data.results.find((person) => person.name === "R2-D2");
            console.log("R2-D2's eye color is:", r2d2.eye_color);
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
} */

// 4 using a try ... catch block
async function fetchData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log("Data fetched:", data);
        const names = data.results.map((person) => person.birth_year);
        console.log("Names extracted:", names);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

fetchData();
