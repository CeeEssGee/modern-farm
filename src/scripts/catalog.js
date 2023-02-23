// Define and export a Catalog function.
// The Catalog function should accept the harvested food array as input.
// The Catalog function should iterate the array of food objects.

let main = document.querySelector(".container")

export const catalog = (harvestPlants) => {
    // iterate through each of the harvested plants in the array, add each plant to the HTML string in its own section
    for (const harvest of harvestPlants) {
        main.innerHTML += `<section class="plant">${harvest.type}</section>`
    }
}