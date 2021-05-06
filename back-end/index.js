const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

app.get("/home", (req, res) => console.log(res));

app.post("/", (req, res) => console.log(req.body));

app.listen(5000, () => console.log("Listening on port 5000"));
