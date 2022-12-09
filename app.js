const { response } = require("express");
const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/home", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about.html");
});

app.get("/catmemes", (req, res) => {
  res.sendFile(__dirname + "/views/catmemes.html");
});

app.listen(3001, () => console.log("connected"));
console.log(__dirname);
