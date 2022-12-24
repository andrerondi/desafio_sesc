const express = require("express");
const app = express();
const extenso = require("./routes/extenso")



app.use('/*', extenso);

app.listen(3000)
