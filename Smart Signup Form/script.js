let form = document.getElementById("signupForm");
let message = document.getElementById("message");

form.addEventListener("submit", function(e) {

    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (name === "" || email === "" || password === "") {
        message.style.color = "red";
        message.innerText = "All fields are required";
        return;
    }

    if (!email.includes("@")) {
        message.style.color = "red";
        message.innerText = "Invalid email";
        return;
    }

    if (password.length < 6) {
        message.style.color = "red";
        message.innerText = "Weak password";
        return;
    }

    message.style.color = "green";
    message.innerText = "Signup Successful";
});