console.log("Exercise 3 THE AGE CALCULATOR")

function calculateAge(birthYear, currientYear){
    let yourAge = currientYear - birthYear;
    console.log(`You are ${yourAge} years old.`)
    return yourAge;
}
calculateAge(1989, 2021);
calculateAge(1958, 2021);
calculateAge(1050, 2021);

function calculateYear(birthYear, yourAge){
    let currientYear = birthYear + yourAge;
    console.log(`You live in year ${currientYear} !`);
    return currientYear;
}
calculateYear(1989, 32);
calculateYear(1958, 68);
calculateYear(2001, 47);
