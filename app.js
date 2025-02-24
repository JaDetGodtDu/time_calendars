"use strict";

const express = require("express");
const app = express();

const PORT = 8080;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

let visitorCount = 0;
app.get("/visitorcount", (req, res) => {
    res.send({data: ++visitorCount});
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
