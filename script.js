const correctPassword = "mango";

function checkPassword() {
    const passwordInput = document.getElementById("password").value;
    const protectedContent = document.getElementById("protected-content");
    const passwordForm = document.getElementById("password-form");

    if (passwordInput === correctPassword) {
        protectedContent.style.display = "block";
        passwordForm.style.display = "none";
    } else {
        alert("Incorrect password. Please try again.");
    }
}