console.log("Dog's year's calculator");

function calculatorHuman(humanYears){
    let dogYearsToHumanYears = humanYears / 7;
    return dogYearsToHumanYears;
}
function calculatorDog (dogYears){
    let humanYearsToDogYears = dogYears * 7;
    return humanYearsToDogYears;
}
let choice = prompt("Please enter HUMAN for calculateing human's to dog years or DOG for dog's to human years");
let input = parseInt(prompt("Please enter some value:"));
if (choice === "HUMAN"){
    console.log(`You have ${input} human years, or in dog years you have ${calculatorHuman(input)} years!`);
}
else if (choice === "DOG"){
    console.log(`If your dog have ${input} years, than in human years have ${calculatorDog(input)} years!`);
}