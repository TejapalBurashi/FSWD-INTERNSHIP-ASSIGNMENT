const express = require("express");

const app = express();

const users = [
    {
        name: "Admin",
        role: "admin"
    },
    {
        name: "User",
        role: "user"
    }
];

function checkAdmin(req, res, next) {

    const user = users[0];

    if (user.role !== "admin") {
        return res.send("Access Denied");
    }

    next();
}

app.get("/admin", checkAdmin, (req, res) => {
    res.send("Welcome Admin");
});

app.get("/user", (req, res) => {
    res.send("Welcome User");
});

app.listen(3000, () => {
    console.log("Server running");
});