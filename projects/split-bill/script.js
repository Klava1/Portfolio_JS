const button = document.querySelector("#btn");
button.addEventListener("click", calculateAmount);

const buttonTip = document.querySelector("#addTip");
buttonTip.addEventListener("click", showTip);

function showTip(e) {
  e.preventDefault();
  tip.style.display = "block";
}

function calculateAmount(e) {
  e.preventDefault();
  const bill = document.querySelector("#bill").value;
  const people = document.querySelector("#people").value;
  const tip = document.querySelector("#tip").value;

  if (bill === "" || people === "" || people < 1) {
    Swal.fire({
      icon: "error",
      title: "Error!",
      text: "Please enter a number!",
    });
  }

  let amountPerPerson = bill / people;

  let tipPerPerson = (bill * tip) / people;

  let totalSum = amountPerPerson + tipPerPerson;

  amountPerPerson = amountPerPerson.toFixed(2);
  tipPerPerson = tipPerPerson.toFixed(2);
  totalSum = totalSum.toFixed(2);

  document.querySelector("#dividedBill").textContent = amountPerPerson;
  document.querySelector("#dividedTip").textContent = tipPerPerson;
  document.querySelector("#billAndTip").textContent = totalSum;
}

gsap.from("#header", { opacity: 0, x: -100, duration: 1 });

gsap.from("#showTotalAmountToPay", { opacity: 0, x: -100, duration: 1 });
gsap.from("#totalTip", { opacity: 0, x: -100, duration: 1 });
gsap.from("#totalAmount", { opacity: 0, x: -100, duration: 1 });

