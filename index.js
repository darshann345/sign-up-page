let email = document.getElementById("email");
let button = document.getElementsByClassName("btn-submit")[0];
let getUserEmail = document.getElementById("user-email");
button.addEventListener("click", function () {
    const emailValue = email.value;
  window.location.href = `submit.html?email=${encodeURIComponent(emailValue)}`;
    email.value = "";
});
const params = new URLSearchParams(window.location.search);
const userEmail = params.get("email");
getUserEmail.textContent = userEmail;

