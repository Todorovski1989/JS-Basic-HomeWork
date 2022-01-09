console.log("HOMEWORK#1");

const homeWork1 = ["Bojan ", "is ", 2022 - 1989, "years old ", "student ", "in ", "SEDC ", "academy!"];

console.log(homeWork1);
const oneString = function () {
    let string = " ";
    for (let i = 0; i < homeWork1.length; i++) {
        string += homeWork1[i];
    }
    return string;
};
console.log(oneString(homeWork1));

console.log("HOMEWORK#2");
let allNumbers = [];
let numbersEvan = [];
let numbersOdd = [];

for (let i = 1; i <= 20; i++) {
    console.log(`${i}`);
    if (i % 2 === 0) {
        numbersEvan += i + "\n";
    } else {
        numbersOdd += i + " ";
    }
};

console.log(numbersEvan, numbersOdd);

console.log("HOMEWORK#3");

let randomNumbers = [2, 53, 11, 98, 108, 500];
let sumOfNumbers = function (array) {
    let max = -Infinity;
    let min = Infinity;

    for (let number of array) {
        if (number > max) {
            max = number;
        } if (number < min) {
            min = number;
        }
    }
    return `The largest number is ${max}, and the smallest is ${min}. Tougether thay have a sum of ${min + max}! `;
}
console.log(sumOfNumbers(randomNumbers));

console.log("HOMEWOR#4");

let firstName = ["Ivana", "Todor", "Marjan"];
let lastName = ["Stojadinovska", "Pelivanov", "Ilievski"];

let students = function (first, last) {
    let fullName = [];
    for (let i = 0; i < first.length; i++) {
        fullName.push(`${[i]} ${first[i]} ${last[i]} `);
    }
    return `This is full names of the students: ${fullName}`;
}
console.log(students(firstName, lastName));

