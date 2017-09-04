"use strict";
const express = require("express");

const port = 9080;

const app = express();

app.use(express.static("."));

app.listen(port, () => {
console.log("Listening on port ", port);
});
