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
}

function disableWarning() {
  document.querySelector(".warning").classList.remove("zero-warning-enabled");
  document.querySelector(".warning").classList.add("zero-warning-disabled");
}

// obtain value from BUTTONS when clicked.
btnList.forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelector(".stay-highlighted")
      ?.classList.remove("stay-highlighted");
    btn.classList.add("stay-highlighted");
  });
});

// checks if input fields is filled or empty, then decides to show `reset`
inputs.forEach((input) => {
  input.addEventListener("input", () => {
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
  });
});

// to calculate and display end values
function calculation(enteredValue, totalParty, btnList, customPercent) {
  let finalTipAmount;
  let finalTipTotal;

  inputs.forEach((input) => {
    input.addEventListener("input", (event) => {
      if (totalParty.value < 1) {
        if (enteredValue.value > 0 && customPercent.value > 0) {
          enableWarning();
        }
      } else if (totalParty.value > 0) {
        finalTipAmount =
          ((enteredValue.value / 100) * customPercent.value) / totalParty.value;
        finalTipTotal = enteredValue.value / totalParty.value + finalTipAmount;
        tipDisplay.innerText = `${finalTipAmount}`;
        totalDisplay.innerText = `${finalTipTotal}`;
        disableWarning();
      }
    });
  });
}

calculation(enteredValue, totalParty, btnList, customPercent);

// finalTipAmount =
// ((bill.value / 100) * customPercent.value) / peopleCount.value;
// finalTipTotal = bill.value / peopleCount.value + finalTipAmount;
// tipDisplay.innerText = `${finalTipAmount}`;
// totalDisplay.innerText = `${finalTipTotal}`;

// btnPercent.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     console.log(peopleCount.value);
//     finalTipAmount =
//       ((bill.value / 100) * btn.value) / peopleCount.value;
//     finalTipTotal = bill.value / peopleCount.value + finalTipAmount;
//     tipDisplay.innerText = `${finalTipAmount}`;
//     totalDisplay.innerText = `${finalTipTotal}`;
//   });
// });

//   customPercent.addEventListener("input", () => {
//     console.log(customPercent.value);
//   });
// }

// calculation(customPercent);

// let totalBill = 0;
// let totalBtnValue = 0;
// let totalCustomPercent = 0;
// let totalPerHeads = 0;

// // obtain value from USER INPUT
// const amountFunc = () => {
//   enteredValue.addEventListener("input", () => {
//     const Number(enteredValue.value);
//   });
// };

// // obtain value from CUSTOM inputs, if available
// const customPerFunc = () => {
//   customPercent.addEventListener("input", () => {
//     return Number(customPercent.value);
//   });
// };

// // obtain value from NoP input
// const partyCountFunc = () => {
//   totalParty.addEventListener("input", () => {
//     return Number(totalParty.value);
//   });
// };

// totalBill = amountFunc();
// totalBtnValue = btnFunc();
// totalCustomPercent = customPerFunc();
// totalPerHeads = partyCountFunc();

// if (totalBill == "undefined") {
//   console.log(amountFunc());
// }

// let calcNum = document.querySelector(".calc-num"); // typed-in amount
// let calcPeople = document.querySelector(".calc-people");
// let tipAmount = document.querySelector(".tip-amount");
// let btn = document.querySelectorAll(".btn");
// let customNum = document.querySelector(".calc-custom");
// let totalAmount = document.querySelector(".total-amount");
// let clear = document.querySelectorAll(".int");
// let btnRes = document.querySelector(".btnRes");
// let hideError = document.querySelector(".hide-error");

// let percentage;
// let percent;
// let tip = 0;
// let perPerson;

// function btnToggle(btnArg) {
//   btnArg.classList.add("resetBtn");
//   btnArg.classList.remove("disResetBtn");
// }

// function hideErr(error, ifError) {
//   hideError.classList.add("error");
//   calcPeople.classList.remove("if-error");
// }

// function showErr(error, ifError) {
//   hideError.classList.remove("error");
//   calcPeople.classList.add("if-error");
// }

// function validate(inputID) {
//   const input = inputID;
//   const validityState = input.validity;

//   if (validityState.rangeUnderflow) {
//     input.setCustomValidity("We need a higher number!");
//   } else if (validityState.rangeOverflow) {
//     input.setCustomValidity("Thats too high!");
//   } else {
//     input.setCustomValidity("");
//   }

//   input.reportValidity();
//   const isValid = input.reportValidity();
//   input.setAttribute("aria-invalid", !isValid);
// }

// btn.forEach((btn) => {
//   btn.addEventListener("click", (event) => {
//     if (Number(calcPeople.value) === 0) {
//       showErr("error", "if-error");
//     } else {
//       hideErr("error", "if-error");

//       percentage = event.target.textContent.replace("%", ""); // 5%, 10% ...
//       tip = (percentage * Number(calcNum.value)) / 100;
//       person = (Number(calcNum.value) + tip).toFixed(2);

//       perPerson = `$${Number(
//         calcNum.value / calcPeople.value + tip / calcPeople.value
//       ).toFixed(2)}`;

//       tipAmount.textContent = `$${(tip / calcPeople.value).toFixed(2)}`;
//       totalAmount.textContent = `${perPerson}`;
//     }
//   });
// });

// calcNum.addEventListener("input", (event) => {
//   validate(calcNum);

//   if (Number(calcPeople.value) === 0) {
//     showErr("error", "if-error");
//     btnToggle(btnRes);
//   } else {
//     hideErr("error", "if-error");
//     btnToggle(btnRes);

//     percent = customNum.value;
//     tip = (percent * Number(calcNum.value)) / 100;

//     perPerson = `$${Number(
//       calcNum.value / calcPeople.value + tip / calcPeople.value
//     ).toFixed(2)}`;

//     tipAmount.textContent = `$${(tip / calcPeople.value).toFixed(2)}`;
//     totalAmount.textContent = `${perPerson}`;
//   }
// });

// customNum.addEventListener("input", (event) => {
//   validate(customNum);

//   if (Number(calcPeople.value) === 0) {
//     showErr("error", "if-error");
//     btnToggle(btnRes);
//   } else {
//     hideErr("error", "if-error");
//     btnToggle(btnRes);

//     percent = event.target.value;
//     tip = (percent * Number(calcNum.value)) / 100;

//     perPerson = `$${Number(
//       calcNum.value / calcPeople.value + tip / calcPeople.value
//     ).toFixed(2)}`;

//     tipAmount.textContent = `$${(tip / calcPeople.value).toFixed(2)}`;
//     totalAmount.textContent = `${perPerson}`;
//   }
// });

// calcPeople.addEventListener("input", (event) => {
//   if (Number(calcPeople.value) === 0) {
//     showErr("error", "if-error");
//   } else {
//     hideErr("error", "if-error");
//     btnToggle(btnRes);

//     percent = customNum.value;
//     tip = (percent * Number(calcNum.value)) / 100;

//     perPerson = `$${Number(
//       calcNum.value / calcPeople.value + tip / calcPeople.value
//     ).toFixed(2)}`;

//     tipAmount.textContent = `$${(tip / calcPeople.value).toFixed(2)}`;
//     totalAmount.textContent = `${perPerson}`;
//   }
// });

// btnRes.addEventListener("click", () => {
//   calcNum.value = "";
//   calcPeople.value = "";
//   customNum.value = "";
//   tipAmount.textContent = "$0.00";
//   totalAmount.textContent = "$0.00";
//   hideErr("error", "if-error");
//   btnRes.classList.add("disResetBtn");
// });
