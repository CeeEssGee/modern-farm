/*
    create a module for each type of plant in the seeds directory
    define and export a function for creating a seed
    function should return an object with type, height and output
*/
export const createPotato = () => {
    let potato = {
        type: "Potato",
        height: 32,
        output: 2
    }
    return potato
}