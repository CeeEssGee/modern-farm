console.log("Welcome to the main module")

// import the createPlan() function from plan.js and assign it to the variable yearlyPlan
import { createPlan } from './plan.js'
import { plantSeeds } from "./tractor.js"
import { usePlants } from "./field.js"
import { harvestPlants } from './harvester.js'
import { catalog } from './catalog.js'

let yearlyPlan = createPlan()
let plantedField = plantSeeds(yearlyPlan)
let harvest = harvestPlants(plantedField)
let farmCatalog = catalog(harvest)


// tractor is doing this
    // plantSeeds(yearlyPlan)
    // let planting = usePlants() 
// console.log(planting)

// import { harvestPlants } from "/.harvester.js"
// let harvest = harvestPlants()
// console.log(harvest)