/*
    create a module for each type of plant in the seeds directory
    define and export a function for creating a seed
    function should return an object with type, height and output
*/
export const createAsparagus = () => {
    let asparagus = {
        type: "Asparagus",
        height: 24,
        output: 4
    }
    return asparagus
}