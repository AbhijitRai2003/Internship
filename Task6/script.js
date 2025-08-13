// Grab form and popup elements
const form = document.getElementById("contactForm");
const popup = document.getElementById("successPopup");

// Grab input fields
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

// Grab error message placeholders
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");

// Email pattern for validation
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Handle form submission
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Stop page refresh

    let isValid = true;

    // Name validation
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Please enter your name.";
        isValid = false;
    } else {
        nameError.textContent = "";
    }

    // Email validation
    if (!emailPattern.test(emailInput.value.trim())) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    // Message validation
    if (messageInput.value.trim() === "") {
        messageError.textContent = "Please enter a message.";
        isValid = false;
    } else {
        messageError.textContent = "";
    }

    // If everything is valid, show success popup
    if (isValid) {
        popup.classList.add("show");

        // Hide popup after 2 seconds
        setTimeout(() => {
            popup.classList.remove("show");
            form.reset();
        }, 2000);
    }
});
