/*
    create a module for each type of plant in the seeds directory
    define and export a function for creating a seed
    function should return an object with type, height and output - corn returns an array with 2 identical objects
*/
const cornArray = []

export const createCorn = () => {
    let cornArray = [
        {
            type: "Corn",
            height: 180,
            output: 6
        },
        {
            type: "Corn",
            height: 180,
            output: 6
        }
    ]
    return cornArray
}