/* Abdeljalil47 */

const equalButton = document.querySelector('.equal');
const clearButton = document.querySelector('.clear');
const numbers = document.querySelectorAll('.num');
const ecron = document.getElementById('ecron');

let result = "";
let freez = "";

clearButton.addEventListener('click', function() {
    freez = false;
  result = "";
  ecron.textContent = "0";
});

numbers.forEach((numberButton) => {
  numberButton.addEventListener('click', numberButtonClick);
});

function numberButtonClick(event) {
  const value = event.target.value;

  if (freez) {
    event.preventDefault();
    return
  }
  if (ecron.textContent === "0" && value === "0") {
    return;
  }
  if (result.length === 0) {
    ecron.textContent = "";
  }

  const operators = ['/', '*', '-', '+'];
  if (
    operators.includes(result[result.length - 1]) &&
    operators.includes(value)
  ) {
    ecron.textContent = ecron.textContent.replace(/.$/, value);
    return;
  }

  result += value;
  ecron.textContent += value;
}

equalButton.addEventListener('click', calculate);

function calculate() {
  try {
    ecron.textContent = eval(result);
    freez = true;
  } catch (e) {
    ecron.textContent = "error";
    freez = true;
  }
}