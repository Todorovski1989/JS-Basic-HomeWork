console.log("HomeWork Class 07");

let row = document.querySelector("#row");
let column = document.querySelector("#column");
let button = document.querySelector("#button");
let table = document.querySelector("#table");

button.addEventListener("click", function () {
  if (row.value != "" && column.value != "") {
    for (let i = 0; i < row.value; i++) {
      let row1 = table.insertRow();
      for (let n = 0; n < column.value; n++) {
        let col1 = row1.insertCell();
        col1.style.border = "2px solid black";
        col1.innerHTML = `Row ${i + 1} column ${n + 1}`;
      }
    }
  }
});
