let form = document.getElementById("form");
let message = document.getElementById("message");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (name === "" || email === "" || password === "") {
        message.style.color = "red";
        message.textContent = "All fields are required";
        return;
    }

    if (!email.includes("@")) {
        message.style.color = "red";
        message.textContent = "Invalid email";
        return;
    }

    if (password.length < 6) {
        message.style.color = "red";
        message.textContent = "Password must be at least 6 characters";
        return;
    }

    message.style.color = "green";
    message.textContent = "Form submitted successfully!";
});