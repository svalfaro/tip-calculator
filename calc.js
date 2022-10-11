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

let percentage;
let tip;
let perPerson;

btn.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    percentage = event.target.textContent.replace("%", ""); // 5%, 10% ...
    tip = (percentage / 100) * Number(calcNum.value);
    person = (Number(calcNum.value) + tip).toFixed(2);

    perPerson = `$${(
      calcNum.value / calcPeople.value +
      tip / calcPeople.value
    ).toFixed(2)}`;

    if (calcPeople.value === "") {
      tipAmount.textContent = `$${tip.toFixed(2)}`;
      totalAmount.textContent = `$${tip.toFixed(2)}`;
    } else if (Number(calcPeople.value) === 1) {
      tipAmount.textContent = `$${tip.toFixed(2)}`;
      totalAmount.textContent = `$${person}`;
    } else if (Number(calcPeople.value) > 1) {
      tipAmount.textContent = `$${(tip / calcPeople.value).toFixed(2)}`;
      totalAmount.textContent = `${perPerson}`;
    }
  });
});

customNum.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    percentage = event.target.value;
    tip = (percentage / 100) * calcNum.value;
    perPerson = `$${(calcNum.value / calcPeople.value + tip).toFixed(2)}`;

    tipAmount.textContent = `$${(tip / calcPeople.value).toFixed(2)}`;
    totalAmount.textContent = `${perPerson}`;
  }
});

calcNum.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    if (Number(calcNum.value === "")) {
      console.log("cannot be");
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
