// Define a variable in this module whose initial value is an empty array. This array will store all of the plants that are growing in the field. Do not export the array.
let plantArray = []

// In the module, define and export a function named addPlant.
// The addPlant function must accept a seed object as input. The function will add the seed to the field 
export const addPlant = (seed) => {
    if (Array.isArray(seed)) {
        for (const cornSeed of seed) {
            plantArray.push(cornSeed)
        }
    } else {
        plantArray.push(seed)
    }
}

// Define and export a function named usePlants that returns a copy of the array of plants.
export const usePlants = () => {
    return plantArray
}