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

let percentage = 0;
let tip = 0;
let perPerson;

function isValid() {
  if (!calcPeople.checkValidity()) {
    hideError.classList.remove("error");
    console.log(calcPeople);
  }
}

btn.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    percentage = event.target.textContent.replace("%", ""); // 5%, 10% ...
    tip = (percentage / 100) * Number(calcNum.value);
    person = (Number(calcNum.value) + tip).toFixed(2);

    perPerson = `$${(
      calcNum.value / calcPeople.value +
      tip / calcPeople.value
    ).toFixed(2)}`;

    tipAmount.textContent = `$${(tip / calcPeople.value).toFixed(2)}`;
    totalAmount.textContent = `${perPerson}`;
  });
});

customNum.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    console.log(event.target.checkValidity());
    percentage = event.target.value;
    tip = (percentage / 100) * calcNum.value;
    perPerson = `$${(calcNum.value / calcPeople.value + tip).toFixed(2)}`;

    tipAmount.textContent = `$${(tip / calcPeople.value).toFixed(2)}`;
    totalAmount.textContent = `${perPerson}`;
  }
});

calcPeople.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    if (Number(calcPeople.value) === 0) {
      hideError.classList.toggle("error");
      calcPeople.classList.toggle("if-error");
    }

    percentage = event.target.value;
    tip = (percentage / 100) * calcNum.value;
    perPerson = `$${(calcNum.value / calcPeople.value + tip).toFixed(2)}`;

    tipAmount.textContent = `$${(tip / calcPeople.value).toFixed(2)}`;
    totalAmount.textContent = `${perPerson}`;
  }
});

resetBtn.addEventListener("click", () => {
  calcNum.value = "";
  calcPeople.value = "";
  customNum.value = "";
  tipAmount.textContent = "$0.00";
  totalAmount.textContent = "$0.00";
});
