// 6 types of crops shown as an array of strings
const types = ["Soybean", "Corn", "Asparagus", "Wheat", "Potato", "Sunflower"]

/* 
        exported function provided by NSS - assigns a variable (plan) as an empty array
    ??? iterates through 3 times and adds 1 each time??
        assigns a variable (row) as an empty array
    ??? iterates through 6 times and adds 1 each time??
    ??? does this give you 3 rows of 6 crops?
    ??? returns the plan array of multiple rows (6) with multiple crops (3) per row
*/
// exports the createPlan function to import and use in other modules
 export const createPlan = () => {

    const plan = []

    for (let index = 0; index < 3; index++) {
        const row = []
        for (let j = 0; j < 6; j++) {
            row.push(crop.next().value)
        }
        plan.push(row)
    }
    return plan
}




/*
    This is a generator function used to randomly
    generate crop types to plants in each plot. It
    is not relevant for you implementing your code
    for this project.
*/
const crop = function* () {
    while (true) {
        const typeIdx = Math.floor(Math.random() * types.length)
        yield types[typeIdx]
    }
}()

