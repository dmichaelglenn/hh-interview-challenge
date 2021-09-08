require('dotenv').config();

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const port = process.env.PORT || 8081;

mongoose.connect(process.env.MONGODB_URI);

const app = express();

app.use(express.static(__dirname + "/../public"));
app.use(bodyParser.json());

const server = app.listen(port, function () {
    console.log("now running on port", port);
})
