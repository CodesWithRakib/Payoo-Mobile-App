let add = document.getElementById("add");
let addMoney = document.getElementById("add-money");
let addMoneyBtn = document.getElementById("add-money-btn");
let withdraw = document.getElementById("withdraw");
let withDrawBtn = document.getElementById("withdraw-btn");
let withDrawNumber = document.getElementById("withdraw-account-number");
let withDrawAmount = document.getElementById("withdraw-amount");
let withDrawPinNumber = document.getElementById("withdraw-pin-number");
let latest = document.getElementById("latest");
let cashOut = document.getElementById("cashOut");
let home = document.getElementById("home");
add.addEventListener("click", function (event) {
  event.preventDefault();
  add.style.backgroundColor = "#000";
  add.style.color = "#f3f3f3";
  cashOut.style.backgroundColor = "";
  addMoney.style.display = "block";
  latest.style.display = "none";
  withdraw.style.display = "none";
});
cashOut.addEventListener("click", function (event) {
  event.preventDefault();
  cashOut.style.backgroundColor = "#000";
  cashOut.style.color = "#f3f3f3";
  add.style.backgroundColor = "";
  addMoney.style.display = "none";
  latest.style.display = "none";
  withdraw.style.display = "block";
});
home.addEventListener("click", function (event) {
  event.preventDefault();
  addMoney.style.display = "block";
  latest.style.display = "block";
  withdraw.style.display = "block";
});
/* addMoney.addEventListener("click", function (event) {
  // event.preventDefault();
  // event.stopPropagation();
  let accountNumber = getValueById("account-number");
  let amount = getValueById("amount");
  let pin = getValueById("pin-number");
  let balance = getTextValueById("main-balance");
  console.log("hello");
  // console.log(accountNumber, amount, pin, balance);
  /*  if (accountNumber.length === 11 && pin === 1234) {
    balance += amount;
    return balance;
  } else {
    return alert("Invalid account number or pin. Please try again.");
  } */
// }); */
addMoneyBtn.addEventListener("click", function (event) {
  event.preventDefault();
  let accountNumber = getValueById("account-number");
  let amount = getValueById("amount");
  let pin = getValueById("pin-number");
  let balance = getTextValueById("main-balance");
  if (accountNumber === 1767476724 && pin === 1234) {
    let sum = balance + amount;
    return setValueById("main-balance", sum);
  } else {
    return alert("Invalid account number or pin. Please try again.");
  }
});
withDrawBtn.addEventListener("click", function (event) {
  event.preventDefault();
  let accountNumber = getValueById("withdraw-account-number");
  let amount = getValueById("withdraw-amount");
  let pin = getValueById("withdraw-pin-number");
  let balance = getTextValueById("main-balance");
  if (accountNumber === 1767476724 && pin === 1234) {
    let sub = balance - amount;
    return setValueById("main-balance", sub);
  } else {
    return alert("Invalid account number or pin. Please try again.");
  }
});
