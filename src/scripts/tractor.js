// In this module, define and export a plantSeeds function.
// The function must accept the year's planting plan as input (i.e. it must define a parameter).
//      *** Do I need to import yearlyPlan from main.js?

import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"

import { addPlant, usePlants } from "./field.js"


// import addPlant , createVeggies and store in a variable

// The plan is an array. It contains 3 arrays representing the rows in the field to be plants. Figure out how to iterate both the parent array and the child arrays.
// As you iterate the row of food types to be planted, invoke the corresponding factory function (e.g. if the food type is "Asparagus", invoke the createAsparagus function to get an asparagus seed).
// Take that seed and add it to the array of plants in the field module.

export const plantSeeds = (yearlyPlan) => {
    for (const row of yearlyPlan) {
        for (const seed of row) {
            if (seed === "Asparagus") {
                addPlant(createAsparagus())
            } else if (seed === "Corn") {
                addPlant(createCorn())
            } else if (seed === "Potato") {
                addPlant(createPotato())
            } else if (seed === "Soybean") {
                addPlant(createSoybean())
            } else if (seed === "Sunflower") {
                addPlant(createSunflower())
            } else if (seed === "Wheat") {
                addPlant(createWheat())
            }

        }

    }
return usePlants() // returns the planted seeds
}
