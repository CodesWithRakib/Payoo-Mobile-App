const logIn = document.getElementById("login-btn");

logIn.addEventListener("click", function () {
  const mobileNumber = parseInt(document.getElementById("mobile-number").value);
  const pinNumber = parseInt(document.getElementById("pin").value);
  if (mobileNumber === 1767476724 && pinNumber === 1234) {
    window.location.href = "main.html";
  } else {
    alert("Invalid mobile number or pin. Please try again.");
  }
});
