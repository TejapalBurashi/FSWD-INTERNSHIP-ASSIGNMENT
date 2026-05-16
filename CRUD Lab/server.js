const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/User");

const app = express();

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/crudlab");

app.post("/users", async (req, res) => {

    const user = new User(req.body);

    await user.save();

    res.send("User Added");
});

app.get("/users", async (req, res) => {

    const users = await User.find();

    res.json(users);
});

app.put("/users/:id", async (req, res) => {

    await User.findByIdAndUpdate(req.params.id, req.body);

    res.send("User Updated");
});

app.delete("/users/:id", async (req, res) => {

    await User.findByIdAndDelete(req.params.id);

    res.send("User Deleted");
});

app.listen(3000, () => {
    console.log("Server running");
});