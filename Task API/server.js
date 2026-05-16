const express = require("express");

const app = express();

app.use(express.json());

let tasks = [];

app.get("/tasks", (req, res) => {
    res.json(tasks);
});

app.post("/tasks", (req, res) => {

    tasks.push(req.body);

    res.json({
        message: "Task Added"
    });
});

app.put("/tasks/:id", (req, res) => {

    tasks[req.params.id] = req.body;

    res.json({
        message: "Task Updated"
    });
});

app.delete("/tasks/:id", (req, res) => {

    tasks.splice(req.params.id, 1);

    res.json({
        message: "Task Deleted"
    });
});

app.listen(3000, () => {
    console.log("Server running");
});