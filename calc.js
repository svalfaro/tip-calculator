let enteredValue = document.querySelector(".calc-num");
let customPercent = document.querySelector(".calc-custom");
let totalParty = document.querySelector(".calc-people");
let resetBtn = document.querySelector(".resetBtn");
let tipDisplay = document.querySelector(".tip-amount-num");
let totalDisplay = document.querySelector(".total-amount-num");
let btnList = document.querySelectorAll(".btn");
let inputs = document.querySelectorAll(".inp");

function activeCalculator() {
  resetBtn.classList.add("btn-reset-active");
  resetBtn.classList.remove("btn-reset-disabled");
}

function disabledCalculator() {
  resetBtn.classList.remove("btn-reset-active");
  resetBtn.classList.add("btn-reset-disabled");
}

function enableWarning() {
  document.querySelector(".warning").classList.remove("zero-warning-disabled");
  document.querySelector(".warning").classList.add("zero-warning-enabled");
  totalParty.classList.add("zero-red");
}

function disableWarning() {
  document.querySelector(".warning").classList.remove("zero-warning-enabled");
  document.querySelector(".warning").classList.add("zero-warning-disabled");
  totalParty.classList.remove("zero-red");
}

function removeHighlight() {
  document
    .querySelector(".stay-highlighted")
    ?.classList.remove("stay-highlighted");
}

function validate(inputID) {
  const input = inputID;
  const validityState = input.validity;

  if (validityState.rangeUnderflow) {
    // input.setCustomValidity("We need a higher number!");
    input.validationMessage;
  } else if (validityState.rangeOverflow) {
    // input.setCustomValidity("Thats too high!");
    input.validationMessage;
  } else {
    input.setCustomValidity("");
  }

  input.reportValidity();
  const isValid = input.reportValidity();
  input.setAttribute("aria-invalid", !isValid);
}

// obtain value from BUTTONS when clicked.
btnList.forEach((btn) => {
  btn.addEventListener("click", () => {
    removeHighlight();
    btn.classList.add("stay-highlighted");
  });
});

// checks if input fields is filled or empty, then decides to show `reset`
inputs.forEach((input) => {
  input.addEventListener("input", (event) => {
    const hasValue = Array.from(inputs).some((input) => input.value.length > 0);
    hasValue ? activeCalculator() : disabledCalculator();
  });
});

// resets all input fields completely
resetBtn.addEventListener("click", () => {
  inputs.forEach((input) => {
    input.value = "";
    tipDisplay.innerText = "$0.00";
    totalDisplay.innerText = "$0.00";
    disabledCalculator();
    disableWarning();
    removeHighlight();
  });
});

// to calculate and display end values
function calculation(enteredValue, totalParty, btnList, customPercent) {
  let finalTipAmount;
  let finalTipTotal;

  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      validate(input);
      if (totalParty.value < 1) {
        if (enteredValue.value > 0 && customPercent.value > 0) {
          enableWarning();
        }
      } else if (totalParty.value > 0) {
        finalTipAmount =
          ((enteredValue.value / 100) * customPercent.value) / totalParty.value;
        finalTipTotal = enteredValue.value / totalParty.value + finalTipAmount;
        tipDisplay.innerText = `$${finalTipAmount.toFixed(2)}`;
        totalDisplay.innerText = `$${finalTipTotal.toFixed(2)}`;
        disableWarning();
        removeHighlight();
      }
    });
  });

  btnList.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (totalParty.value < 1) {
        if (enteredValue.value > 0 && btn.value > 0) {
          enableWarning();
          removeHighlight();
        }
      } else if (totalParty.value > 0) {
        finalTipAmount =
          ((enteredValue.value / 100) * btn.value) / totalParty.value;
        finalTipTotal = enteredValue.value / totalParty.value + finalTipAmount;
        tipDisplay.innerText = `$${finalTipAmount.toFixed(2)}`;
        totalDisplay.innerText = `$${finalTipTotal.toFixed(2)}`;
        customPercent.value = "";
        disableWarning();
      }
    });
  });
}

calculation(enteredValue, totalParty, btnList, customPercent);
