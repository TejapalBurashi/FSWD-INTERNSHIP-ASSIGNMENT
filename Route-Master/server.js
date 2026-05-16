const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Book Store API");
});

app.get("/books", (req, res) => {
    res.send("List of Books");
});

app.get("/authors", (req, res) => {
    res.send("List of Authors");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});