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

app.use(express.static(__dirname + "/../public"));
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


function getResourcesByQuery(Model, query) {
    return function (req, res, next) {
        Model.find(query).sort({ "_id": "desc" }).exec(function (err, docs) {
            if (err) console.log(err);
            if (err) return next(err);
            console.log(docs);
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

function resolveColorQuery(category) {
    let query;

    switch (category) {
        case 'gray':
            query = {
                s: {
                    $lte: 30
                }
            }
            break;
        case 'red':
            query = {
                $or: [
                    {
                        h: {
                            $gte: 15
                        },
                        s: {
                            $gte: 85
                        },
                        l: {
                            $gte: 40,
                            $lte: 55
                        }
                    },
                    {
                        h: {
                            $gte: 335
                        },
                        s: {
                            $gte: 69
                        },
                        l: {
                            $gte: 30,
                            $lte: 82
                        }
                    }

                ]
            }
            break;
        case 'orange':
            query = {
                h: {
                    $gte: 16,
                    $lte: 35
                },
                s: {
                    $gte: 70
                },
                l: {
                    $gte: 45,
                    $lte: 80
                }
            }
            break;
        case 'yellow':
            query = {
                h: {
                    $gte: 36,
                    $lte: 66
                },
                s: {
                    $gte: 50
                },
                l: {
                    $lte: 90
                }
            }
            break;
        case 'green':
            query = {
                h: {
                    $gte: 66,
                    $lte: 160
                },
                s: {
                    $gte: 30
                },
                l: {
                    $gte: 15,
                    $lte: 90
                }
            }
            break;
        case 'blue':
            query = {
                h: {
                    $gte: 161,
                    $lte: 262
                },
                s: {
                    $gte: 25
                },
                l: {
                    $gte: 20,
                    $lte: 90
                }
            }
            break;
        case 'purple':
            query = {
                h: {
                    $gte: 263,
                    $lte: 334
                },
                s: {
                    $gte: 20,
                    $lte: 100
                },
                l: {
                    $gte: 15,
                    $lte: 90
                }
            }
            break;
        case 'brown':
            query = {
                h: {
                    $gte: 20,
                    $lte: 35
                },
                s: {
                    $gte: 15,
                    $lte: 69
                },
                l: {
                    $gte: 15,
                    $lte: 95
                }
            }
            break;
        default: query = {
            l: {
                $gte: 101
            }
        };
    }
    return query;
}


app.get("/colors", listResources(Color));
app.get("/colors/random", getRandomResource(Color));
app.get("/colors/category/:category", function (req, res) {
    let query = resolveColorQuery(req.params.category);
    getResourcesByQuery(Color, query)(req, res);
});
app.get("/colors/:hex", function (req, res) {
    let hex = '#' + req.params.hex;
    let query = {
        hex: hex
    };
    getResourcesByQuery(Color, query)(req, res);
});
app.post("/colors", createResource(Color));

const server = app.listen(port, function () {
    console.log("now running on port", port);
})
