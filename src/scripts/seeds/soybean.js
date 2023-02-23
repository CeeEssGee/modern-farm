/*
    create a module for each type of plant in the seeds directory
    define and export a function for creating a seed
    function should return an object with type, height and output
*/
export const createSoybean = () => {
    let soybean = {
        type: "Soybean",
        height: 20,
        output: 4
    }
    return soybean
}