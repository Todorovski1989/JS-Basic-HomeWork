console.log("Create a function called tellStory()");

let tellStoryArray = ["Oskar", "lazy", "sleepy"];
const tellStory = function () {
    return `My dog ${tellStoryArray[0]} is very ${tellStoryArray[1]} dog. After every meal he is very ${tellStoryArray[2]}.`
}
console.log(tellStory(tellStoryArray));

console.log("Write a function that will take an array of 5 numbers as an argument and return the sum.");

let arrayOfNumbers = [55, 954, 321, 1989, 100];

const sumOfNumbers = function (arrayOfNumbers) {
    return arrayOfNumbers = arrayOfNumbers[0] + arrayOfNumbers[1] + arrayOfNumbers[2] + arrayOfNumbers[3] + arrayOfNumbers[4];
}
console.log(`The sum of this five numbers (${arrayOfNumbers}) is ${sumOfNumbers(arrayOfNumbers)}!`);

console.log("BONUS");

let arrayOfNumbers1 = [55, 954, 321, 1989, "100"];

const validateNumber = function () {
    for (let i = 0; i < arrayOfNumbers1.length; i++) {
        if (typeof arrayOfNumbers1[i] === "number") {
            console.log(`This is a valid number ${arrayOfNumbers1[i]}`);
        } else {
            console.log(`This is not a valid number ${arrayOfNumbers1[i]}`);
        }
    }
}
console.log(validateNumber(arrayOfNumbers1));

// ne znam samo zasto vo console mi dava na kraj undefined