const express = require("express");

const app = express();

const port = 5000;

app.use("/", (req, res) => {
  res.send("Welcome to my API!");
});

app.use("/api/", (req, res) => {
  console.log("Welcome to my API!");
});
app.listen(port, () => {
  console.log("Server listening on port " + port);
});
