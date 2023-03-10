// Create a scripts/field.js module.
// Define a variable in this module whose initial value is an empty array. This array will store all of the plants that are growing in the field. Do not export the array.
let plantArray = []

// In the module, define and export a function named addPlant.
// The addPlant function must accept a seed object as input. The function will add the seed to the field
// Be aware that when planting corn, an array of objects will be provided instead of a single object like all the other type of seeds. Investigate the Array.isArray method to check if corn got passed in, or one of the others. 
export const addPlant = (seed) => {
    if (Array.isArray(seed)) { // true or false - the object is the parameter, if it is an array, true, if not, false
        for (const seedArray of seed) {
            plantArray.push(seedArray)
        }
    } else {
        plantArray.push(seed)
    }
}

// Define and export a function named usePlants that returns a copy of the array of plants.
export const usePlants = () => {
    return plantArray
}