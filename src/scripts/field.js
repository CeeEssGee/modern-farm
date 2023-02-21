// Define a variable in this module whose initial value is an empty array. This array will store all of the plants that are growing in the field. Do not export the array.
let plantArray = []

// In the module, define and export a function named addPlant.
// The addPlant function must accept a seed object as input. The function will add the seed to the field 
export let addPlant = (seedObject) => {
    plantArray.push(seedObject)
    return plantArray
}

// Define and export a function named usePlants that returns a copy of the array of plants.
let usePlants = plantArray