var display = document.querySelector("#display");
var numbers = document.querySelectorAll(".number");
var operators = document.querySelectorAll(".operator");
var equalTo = document.querySelector(".equal-to");
var clear = document.querySelector(".clear");
//
var operator;
var getal1;

// klik acties
for (var i = 0; i < numbers.length; i++) {
  numbers[i].onclick = numberState;
}
for (var i = 0; i < operators.length; i++) {
  operators[i].onclick = operatorState;
}
equalTo.onclick = calculateState;
clear.onclick = clearState;

// functions
function numberState(event) {
  console.log("is number");
  var text = event.target.textContent;
  var prevNum = display.value;
  display.setAttribute("value", prevNum + text);
}

function operatorState(event) {
  console.log("is operator");
}

function calculateState(event) {
  console.log("is calculate");
}

function clearState(event) {
  console.log("is clear");
  display.setAttribute("value", "");
}
