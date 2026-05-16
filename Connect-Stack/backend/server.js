const express = require("express");

const app = express();

app.get("/message", (req, res) => {
    res.json({
        text: "Hello from Backend"
    });
});

app.listen(3000, () => {
    console.log("Backend running");
});