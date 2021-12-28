console.log("Exercise 2!")

function farToCel(celsius){
let fahrenheit = celsius * 1.8 + 32;
return fahrenheit;
}
function celToFar(fahrenheit){
let celsius = (5 / 9) * (fahrenheit - 32);
return celsius;
}
let choice = prompt("Enter F for fahrenheit and C for celsius");
let input = parseInt(prompt("Please enter value:"));
if (choice === "F"){
    console.log(`${celToFar(input)} C`);
} else if (choice === "C"){
    console.log(`${farToCel(input)} F`);
}