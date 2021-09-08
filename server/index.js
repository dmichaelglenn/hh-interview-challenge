require('dotenv').config();

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const port = process.env.PORT || 8081;

mongoose.connect(process.env.MONGODB_URI);

const ColorSchema = mongoose.Schema({
    h: Number,
    s: Number,
    l: Number
});

const Color = mongoose.model("Color", ColorSchema);

const app = express();

app.use(express.static(__dirname + "/../public"));
app.use(express.static(__dirname + "/../admin"));
app.use(bodyParser.json());

function listResources(Model) {
    return function (req, res, next) {
        Model.find(function(err, docs) {
            if (err) return next(err);
            res.json(docs);
        })
    }
}

function createResource(Model) {
    return function (req, res, next) {
        let resource = new Model(req.body);
        resource.save(function (err, resource) {
            if (err) return next(err);
            res.json(resource);
        });
    };
}

app.get("/colors", listResources(Color));
app.post("/colors", createResource(Color));

const server = app.listen(port, function () {
    console.log("now running on port", port);
})
