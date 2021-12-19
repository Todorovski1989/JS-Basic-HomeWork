let input = prompt("Please enter your year of birth:");
console.log(input);
let numberImput = parseInt(input);
let year = (input - 4) % 12;

if (year === 0){
    console.log("Your Chinese Zodiac is Rat");
}
else if (year === 1){
    console.log("Your Chinese Zodiac is Ox");
}
else if (year === 2){
    console.log("Your Chinese Zodiac is Tiger");
}
else if (year === 3){
    console.log("Your Chinese Zodiac is Rabbit");
}
else if (year === 4){
    console.log("Your Chinese Zodiac is Dragon");
}
else if (year === 5){
    console.log("Your Chinese Zodiac is Snake");
}
else if (year === 6){
    console.log("Your Chinese Zodiac is Horse");
}
else if (year === 7){
    console.log("Your Chinese Zodiac is Goat");
}
else if (year === 8){
    conslole.log("Your Chinese Zodiac is Monkey");
}
else if (year === 9){
    console.log("Your Chinese Zodiac is Rooster");
}
else if (year === 10){
    console.log("Your Chinese Zodiac is Dog");
}
else if (year === 11){
    console.log("Yourd Chinese Zodiac is Pig");
}