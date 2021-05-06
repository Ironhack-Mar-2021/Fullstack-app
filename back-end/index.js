const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const Blog = require("./blogmodel.js");
const { response } = require("express");

mongoose
  .connect('mongodb+srv://cynthia:cynthia@cluster0.xgsgs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err));


app.get("/getMessage", (req, res) => Blog.find().then((response) => res.json(response)) );


app.post("/", (req, res) => {
    console.log(req.body)
    Blog.create(req.body)
});

app.listen(5000, () => console.log("Listening on port 5000"));
