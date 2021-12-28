console.log("Parameters");

function parameters(parameterOne, parameterTwo, parameterThree, parameterFour, parameterFive) {
    let result = (`${typeof parameterOne}, ${typeof parameterTwo}, ${typeof parameterThree}, ${typeof parameterFour}, ${typeof parameterFive}`);
    console.log(result);
}
let parameterOne = {
    type: "Car",
    color: "Green",
    year: 2000,
    condition: "Bad",
}
let parameterTwo = 50 >= 28;
let parameterThree = 33;
let parameterFour = "Halloo Pane i Petre";
let parameterFive;

parameters(parameterOne, parameterTwo, parameterThree, parameterFour, parameterFive);
parameters(parameterThree, parameterOne, parameterFive, parameterTwo, parameterFour);
parameters(parameterTwo, parameterOne, parameterFive, parameterFour, parameterThree);
parameters(parameterFive, parameterTwo, parameterOne, parameterFour, parameterThree);
parameters(parameterFour, parameterFive, parameterThree, parameterTwo, parameterOne);


console.log("The End");