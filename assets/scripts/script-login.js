const form = document.querySelector(".form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const errorElement = document.createElement("p");
errorElement.classList.add("error-message");

const defaultUser = {
  email: "contacly@example.com",
  password: "123"
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const enteredEmail = emailInput.value;
  const enteredPassword = passwordInput.value;

  if (enteredEmail === defaultUser.email && enteredPassword === defaultUser.password) {
    window.location.href = "contact.html";
  } else {
    form.appendChild(document.createElement("br"));
    form.appendChild(errorElement);
    errorElement.style.textAlign = "center";
    errorElement.textContent = "Incorrect credentials. Please try again.";

    setTimeout(() => {
      errorElement.remove();
    }, 1000);
  }
});
