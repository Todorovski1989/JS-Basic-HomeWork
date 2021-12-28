console.log("ATM!")

function atmMaster (balance,amount = prompt("Enter your amount") ) {
    let result = balance - amount; 
    let total = `You have withdrawn ${amount} denars, your balance is ${result} denars!`;
    if(amount < 1000){
        console.log(total);
    } else if(amount >1000){
        console.log("I am sorry, your balance is too small for request");
    }
}
const balance = atmMaster(1000, );


// probav da zadadam vrednost na balance = 1000 vnatre vo funkcijata i nikako ne mi uspevashe
// ako ne vi e problem bi bilo super da mi kazete kako bi se napravilo balance vnatre vo funkcijata