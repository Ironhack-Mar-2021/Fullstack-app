const express = require("express");
const mongoose = require("mongoose");
const app = express()

app.get('/home', (req, res) => console.log(res))

app.listen(5000, () => console.log("Listening on port 5000"))