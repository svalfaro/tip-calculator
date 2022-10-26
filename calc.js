let calcNum = document.querySelector(".calc-num"); // typed-in amount
let calcPeople = document.querySelector(".calc-people");
let five = document.querySelector(".five");
let ten = document.querySelector(".ten");
let fifteen = document.querySelector(".fifteen");
let twentyFive = document.querySelector(".twentyfive");
let fifty = document.querySelector(".fifty");
let tipAmount = document.querySelector(".tip-amount");
let btn = document.querySelectorAll(".btn");
let customNum = document.querySelector(".calc-custom");
let totalAmount = document.querySelector(".total-amount");
let clear = document.querySelectorAll(".int");
let btnRes = document.querySelector(".btnRes");
let hideError = document.querySelector(".hide-error");

let percentage;
let percent;
let tip = 0;
let perPerson;

function btnToggle(btnArg) {
  btnArg.classList.add("resetBtn");
  btnArg.classList.remove("disResetBtn");
}

function hideErr(error, ifError) {
  hideError.classList.add("error");
  calcPeople.classList.remove("if-error");
}

function showErr(error, ifError) {
  hideError.classList.remove("error");
  calcPeople.classList.add("if-error");
}

function validate(inputID) {
  const input = inputID;
  const validityState = input.validity;

  if (validityState.rangeUnderflow) {
    input.setCustomValidity("We need a higher number!");
  } else if (validityState.rangeOverflow) {
    input.setCustomValidity("Thats too high!");
  } else {
    input.setCustomValidity("");
  }

  input.reportValidity();
  const isValid = input.reportValidity();
  input.setAttribute("aria-invalid", !isValid);
}

btn.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    if (Number(calcPeople.value) === 0) {
      showErr("error", "if-error");
    } else {
      hideErr("error", "if-error");

      percentage = event.target.textContent.replace("%", ""); // 5%, 10% ...
      tip = (percentage * Number(calcNum.value)) / 100;
      person = (Number(calcNum.value) + tip).toFixed(2);

      perPerson = `$${Number(
        calcNum.value / calcPeople.value + tip / calcPeople.value
      ).toFixed(2)}`;

      tipAmount.textContent = `$${(tip / calcPeople.value).toFixed(2)}`;
      totalAmount.textContent = `${perPerson}`;
    }
  });
});

calcNum.addEventListener("input", (event) => {
  validate(calcNum);

  if (Number(calcPeople.value) === 0) {
    showErr("error", "if-error");
    btnToggle(btnRes);
  } else {
    hideErr("error", "if-error");
    btnToggle(btnRes);

    percent = customNum.value;
    tip = (percent * Number(calcNum.value)) / 100;

    perPerson = `$${Number(
      calcNum.value / calcPeople.value + tip / calcPeople.value
    ).toFixed(2)}`;

    tipAmount.textContent = `$${(tip / calcPeople.value).toFixed(2)}`;
    totalAmount.textContent = `${perPerson}`;
  }
});

customNum.addEventListener("input", (event) => {
  validate(customNum);

  if (Number(calcPeople.value) === 0) {
    showErr("error", "if-error");
    btnToggle(btnRes);
  } else {
    hideErr("error", "if-error");
    btnToggle(btnRes);

    percent = event.target.value;
    tip = (percent * Number(calcNum.value)) / 100;

    perPerson = `$${Number(
      calcNum.value / calcPeople.value + tip / calcPeople.value
    ).toFixed(2)}`;

    tipAmount.textContent = `$${(tip / calcPeople.value).toFixed(2)}`;
    totalAmount.textContent = `${perPerson}`;
  }
});

calcPeople.addEventListener("input", (event) => {
  if (Number(calcPeople.value) === 0) {
    showErr("error", "if-error");
  } else {
    hideErr("error", "if-error");
    btnToggle(btnRes);

    percent = customNum.value;
    tip = (percent * Number(calcNum.value)) / 100;

    perPerson = `$${Number(
      calcNum.value / calcPeople.value + tip / calcPeople.value
    ).toFixed(2)}`;

    tipAmount.textContent = `$${(tip / calcPeople.value).toFixed(2)}`;
    totalAmount.textContent = `${perPerson}`;
  }
});

btnRes.addEventListener("click", () => {
  calcNum.value = "";
  calcPeople.value = "";
  customNum.value = "";
  tipAmount.textContent = "$0.00";
  totalAmount.textContent = "$0.00";
  hideErr("error", "if-error");
  btnRes.classList.add("disResetBtn");
});
