require('dotenv').config();

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require('cors');
const port = process.env.PORT || 8081;

mongoose.connect(process.env.MONGODB_URI);

const ColorSchema = mongoose.Schema({
    h: Number,
    s: Number,
    l: Number,
    hex: String
});

const Color = mongoose.model("Color", ColorSchema);

const app = express();

app.use(express.static(__dirname + "/../dist"));
app.use(express.static(__dirname + "/../admin"));
app.use(bodyParser.json());
app.use(cors());

function listResources(Model) {
    return function (req, res, next) {
        Model.find(function (err, docs) {
            if (err) return next(err);
            res.json(docs);
        })
    }
}

function getRandomResource(Model) {
    return function (req, res, next) {
        Model.countDocuments().exec(function (err, count) {
            let random = Math.floor(Math.random() * count)

            Model.findOne().skip(random).exec(function (err, doc) {
                if (err) return next(err);
                res.json(doc);
            })
        })
    }
}

app.get("/colors", listResources(Color));
app.get("/colors/random", getRandomResource(Color));


const server = app.listen(port, function () {
    console.log("now running on port", port);
})
