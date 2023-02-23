/*
    create a module for each type of plant in the seeds directory
    define and export a function for creating a seed
    function should return an object with type, height and output
*/
export const createWheat = () => {
    let wheat = {
        type: "Wheat",
        height: 230,
        output: 6
    }
    return wheat
}