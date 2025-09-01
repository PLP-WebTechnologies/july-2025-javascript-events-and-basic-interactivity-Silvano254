// Form validation logic
document.getElementById("registrationForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent default form submission

  clearErrors(); // Reset error messages

  let isValid = true;

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const gender = document.getElementById("gender").value;
  const age = parseInt(document.getElementById("age").value);

  // Name validation
  if (name === "") {
    showError("nameError", "Name is required.");
    isValid = false;
  }

  // Email validation
  if (!validateEmail(email)) {
    showError("emailError", "Enter a valid email address.");
    isValid = false;
  }

  // Password validation
  if (password.length < 8) {
    showError("passwordError", "Password must be at least 8 characters.");
    isValid = false;
  }

  // Gender validation
  if (gender === "") {
    showError("genderError", "Please select your gender.");
    isValid = false;
  }

  // Age validation
  if (isNaN(age) || age < 18 || age > 35) {
    showError("ageError", "Enter a valid age between 18 and 35.");
    isValid = false;
  }

  if (isValid) {
    alert("Registration successful!");
    this.reset();
  }
});

// Utility function to show error messages
function showError(id, message) {
  document.getElementById(id).textContent = message;
}

// Utility function to clear all error messages
function clearErrors() {
  document.querySelectorAll(".error").forEach((el) => (el.textContent = ""));
}

// Email format validation
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

