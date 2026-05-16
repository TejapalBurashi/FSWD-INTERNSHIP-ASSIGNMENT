const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json());

let users = [];

app.post("/signup", async (req, res) => {

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    users.push({
        email: req.body.email,
        password: hashedPassword
    });

    res.send("User Registered");
});

app.post("/login", async (req, res) => {

    const user = users.find(
        u => u.email === req.body.email
    );

    if (!user) {
        return res.send("User not found");
    }

    const valid = await bcrypt.compare(
        req.body.password,
        user.password
    );

    if (!valid) {
        return res.send("Invalid Password");
    }

    const token = jwt.sign(
        { email: user.email },
        "secretkey"
    );

    res.json({ token });
});

app.listen(3000, () => {
    console.log("Server running");
});