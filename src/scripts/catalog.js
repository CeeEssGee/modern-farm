// Define and export a Catalog function.
// The Catalog function should accept the harvested food array as input.
// The Catalog function should iterate the array of food objects.

let main = document.querySelector(".container")

export const catalog = (harvestPlants) => {
    for (const harvest of harvestPlants) {
        main.innerHTML += `<section class="plant">${harvest.type}</section>`
    }
}