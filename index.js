"use strict";

// SELECTING ELEMENTS //

const close = document.querySelector(".fa-x");
const navBar = document.querySelector(".navbar");
const burger = document.querySelector(".burger");
const overlay = document.querySelector(".overlay");
const confirmPayment = document.querySelector(".confirm-payment");
const cancelPayment = document.querySelector(".cancel-payment");
const creditCard = document.querySelector(".credit-card");
const paypal = document.querySelector(".paypal");
const creditCardP = document.querySelector(".credit-card p");
const paypalP = document.querySelector(".paypal p");
const creditCardLogo = document.querySelector(".fa-credit-card");
const payPalLogo = document.querySelector(".fa-paypal");

// ADD EVENT LISTENERS //

burger.addEventListener("click", () => {
  navBar.style.right = "0px";
  overlay.style.display = "block";
});

close.addEventListener("click", () => {
  navBar.style.right = "-300px";
  overlay.style.display = "none";
});

overlay.addEventListener("click", () => {
  navBar.style.right = "-300px";
  overlay.style.display = "none";
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    navBar.style.right = "-300px";
    overlay.style.display = "none";
  }
});

function CreditCardChoose() {
  creditCard.style.border = "2px solid rgb(250, 109, 14)";
  creditCardP.style.color = "rgb(250, 109, 14)";
  creditCardLogo.style.color = "rgb(250, 109, 14)";
  payPalLogo.style.color = "black";
  paypalP.style.color = "rgb(88, 88, 88)";
  paypal.style.border = "2px solid grey";
}

function PaypalChoose() {
  paypal.style.border = "2px solid rgb(250, 109, 14)";
  paypalP.style.color = "rgb(250, 109, 14)";
  payPalLogo.style.color = "rgb(250, 109, 14)";
  creditCardLogo.style.color = "black";
  creditCardP.style.color = "rgb(88, 88, 88)";
  creditCard.style.border = "2px solid grey";
}

creditCard.addEventListener("click", () => {
  CreditCardChoose();
});

paypal.addEventListener("click", () => {
  PaypalChoose();
});

// ADD SPACE AUTOMATICALLY IN CARDNUMBER INPUT //

const cardNumberInput = document.getElementById("cardnumber");

cardNumberInput.addEventListener("input", (event) => {
  const inputLength = event.target.value.length;
  let cardNumber = event.target.value.replace(/\s/g, ""); // Remove any existing spaces
  if (inputLength > 0) {
    cardNumber = cardNumber.match(new RegExp(".{1,4}", "g")).join(" ");
  }
  event.target.value = cardNumber;
});
