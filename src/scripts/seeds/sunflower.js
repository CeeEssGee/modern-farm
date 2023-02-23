/*
    create a module for each type of plant in the seeds directory
    define and export a function for creating a seed
    function should return an object with type, height and output
*/
export const createSunflower = () => {
    let sunflower = {
        type: "Sunflower",
        height: 380,
        output: 3
    }
    return sunflower
}