const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hi Test!!!");
});

app.listen(3000);