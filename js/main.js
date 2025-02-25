let add = document.getElementById("add");
let addMoney = document.getElementById("add-money");
let withdraw = document.getElementById("withdraw");
let latest = document.getElementById("latest");
let cashOut = document.getElementById("cashOut");
let home = document.getElementById("home");
add.addEventListener("click", function (event) {
  event.preventDefault();
  addMoney.style.display = "block";
  latest.style.display = "none";
  withdraw.style.display = "none";
});
cashOut.addEventListener("click", function (event) {
  event.preventDefault();
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
