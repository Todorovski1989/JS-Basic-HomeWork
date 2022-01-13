console.log("HomeWork part #1");

let firstDiv = document.getElementById("first");
console.log(firstDiv);
let childOfDivParent = firstDiv.children[0];
console.log(childOfDivParent);
childOfDivParent.innerText = "";
childOfDivParent.innerText = "Yes! I succeeded :)";

let firstPar = document.getElementsByClassName("paragraph")[0];
console.log(firstPar);
firstPar.innerText = "";
firstPar.innerText = "Ups i did it again!";

let secondPar = document.querySelector(".second");
console.log(secondPar);
secondPar.innerText += " You can DO IT!"

let text1 = document.getElementsByTagName("text")[0];
console.log(text1);
text1.innerText += " CHANGING";

let lastDiv = document.getElementsByTagName("body")[0].lastElementChild;
console.log(lastDiv);
let lastDiv1 = lastDiv.previousElementSibling;
console.log(lastDiv1);
let lastHeader = lastDiv1.getElementsByTagName("h3")[0];
console.log(lastHeader);
lastHeader.innerText = "And also this is a changed but with small letters.";
let bigHeader = lastHeader.previousElementSibling;
console.log(bigHeader);
bigHeader.innerText = "This is a change but with BIG letters!";
