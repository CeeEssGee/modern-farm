console.log("Welcome to the main module")

// import the createPlan() function from plan.js and assign it to the variable yearlyPlan
import { createPlan } from './plan.js'
import { plantSeeds } from "./tractor.js"
// import { usePlants } from "./field.js" // not required because we ran it on tractor.js
import { harvestPlants } from './harvester.js'
import { catalog } from './catalog.js'

let yearlyPlan = createPlan()
let plantedField = plantSeeds(yearlyPlan)
let harvest = harvestPlants(plantedField)

let farmCatalog = catalog(harvest) // this isn't required to pass the tests, but is required to show the HTML


// tractor is doing this
    // plantSeeds(yearlyPlan)
    // let planting = usePlants() 
// console.log(planting)