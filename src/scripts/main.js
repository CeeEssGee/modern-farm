console.log("Welcome to the main module")

// import the createPlan() function from plan.js and assign it to the variable yearlyPlan
import { createPlan } from './plan.js'
let yearlyPlan = createPlan()

// use console.log() to output the value of yearlyPlan to the developer console in Chrome
// console.log(yearlyPlan)

// temporary test code
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"

const asparagusSeed = createAsparagus()
const cornSeed = createCorn()
const potatoSeed = createPotato()
const soybeanSeed = createSoybean()
const sunflowerSeed = createSunflower()
const wheatSeed = createWheat()

// console.log(asparagusSeed)
// console.log(cornSeed)
// console.log(potatoSeed)
// console.log(soybeanSeed)
// console.log(sunflowerSeed)
// console.log(wheatSeed)

import { addPlant } from "./field.js"
