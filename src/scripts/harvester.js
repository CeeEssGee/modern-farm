//In this module, define and export a harvestPlants function.
//The harvestPlants function must accept the plants array as input.
//The function will return an array of seed objects.
export const harvestPlants = (plantArray) => {
    let outputArray = []
    for (const plant of plantArray) {
        let output = plant.output
        if (plant.type === "Corn") {
            output /= 2
        } 
        for (let i = 0; i < output; i++) {
            outputArray.push(plant)
        }
    }
    return outputArray
}
// Iterate the array of growing plants. On each plant, get the value of the output property.
// Add that many of the plant objects to the array that the function returns. For example, if the current plant is a peanut object with an output of 2...