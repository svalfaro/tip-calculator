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
let resetBtn = document.querySelector(".resetBtn");
let hideError = document.querySelector(".hide-error");

let percentage;
let percent;
let tip = 0;
let perPerson;

btn.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    if (Number(calcPeople.value) === 0) {
      hideError.classList.remove("error");
      calcPeople.classList.add("if-error");
    } else {
      hideError.classList.add("error");
      calcPeople.classList.remove("if-error");

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

calcNum.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    if (Number(calcPeople.value) === 0) {
      hideError.classList.remove("error");
      calcPeople.classList.add("if-error");
    } else {
      hideError.classList.add("error");
      calcPeople.classList.remove("if-error");

      percent = customNum.value;
      tip = (percent * Number(calcNum.value)) / 100;

      perPerson = `$${Number(
        calcNum.value / calcPeople.value + tip / calcPeople.value
      ).toFixed(2)}`;

      tipAmount.textContent = `$${(tip / calcPeople.value).toFixed(2)}`;
      totalAmount.textContent = `${perPerson}`;
    }
  }
});

customNum.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    if (Number(calcPeople.value) === 0) {
      hideError.classList.remove("error");
      calcPeople.classList.add("if-error");
    } else {
      hideError.classList.add("error");
      calcPeople.classList.remove("if-error");

      percent = event.target.value;
      tip = (percent * Number(calcNum.value)) / 100;

      perPerson = `$${Number(
        calcNum.value / calcPeople.value + tip / calcPeople.value
      ).toFixed(2)}`;

      tipAmount.textContent = `$${(tip / calcPeople.value).toFixed(2)}`;
      totalAmount.textContent = `${perPerson}`;
    }
  }
});

calcPeople.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    if (Number(calcPeople.value) === 0) {
      hideError.classList.remove("error");
      calcPeople.classList.add("if-error");
    } else {
      hideError.classList.add("error");
      calcPeople.classList.remove("if-error");

      percent = customNum.value;
      tip = (percent * Number(calcNum.value)) / 100;

      perPerson = `$${Number(
        calcNum.value / calcPeople.value + tip / calcPeople.value
      ).toFixed(2)}`;

      tipAmount.textContent = `$${(tip / calcPeople.value).toFixed(2)}`;
      totalAmount.textContent = `${perPerson}`;
    }
  }
});

resetBtn.addEventListener("click", () => {
  calcNum.value = "";
  calcPeople.value = "";
  customNum.value = "";
  tipAmount.textContent = "$0.00";
  totalAmount.textContent = "$0.00";
});
