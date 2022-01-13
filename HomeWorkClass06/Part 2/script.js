console.log("HomeWork part #2");

const numbersArray = [8, 11, 25];

let arrayList = document.querySelector("#list");
let printList = function (elements) {
    for (let numbers of elements) {
        arrayList.innerHTML += `<li>${numbers}</li>`;
    }
}
printList(numbersArray);

let sum = document.querySelector("#sumOfNumbers");
// console.log(sum);
let sum1 = numbersArray.reduce(function (num1, num2) {
    return num1 + num2;
});
sum.innerHTML += `<h3>Sum of the numbers in array is ${sum1}!</h3>`;

let sumEquation = document.getElementById("matEquasion");
let mathEquation = function (numbers) {
    for (let i = 0; i <= 0; i++) {
        sumEquation.innerHTML += `<h3>This is the mathematical equation for this result ${sum1} is ${numbers[0]} + ${numbers[1]} + ${numbers[2]} = ${sum1}.</h3>`;
    }
}
mathEquation(numbersArray);