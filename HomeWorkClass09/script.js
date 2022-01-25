console.log("HomeWork part #1");

$(document).ready(function () {
  let name = $("#yourName");
  let button = $("#btn");
  let result = $("#yourResult");

  button.click(function () {
    $(result).text(`Hello there ${name.val()}`);
  });

  console.log("HomeWork part #2");

  let yourInput = $("#yourInput");
  let yourColor = $("#yourColor");
  let yourBtn = $("#yourBtn");
  let yourMessage = $("#yourMessage");

  yourBtn.click(function () {
    if (yourInput.val() != "") {
      yourMessage.text(yourInput.val()).css("color", yourColor.val());
    } else {
      yourMessage.text("Please enter a message and choose your color");
    }
  });
});
