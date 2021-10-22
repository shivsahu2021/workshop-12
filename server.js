const User = require('./model/schema')
const express = require('express');
const dataConnection = require('./db/conn')
const app = express()
const cors = require('cors');

dataConnection();
app.use(express.json());
app.use(cors())

app.post('/', async (req, res) => {
    let offset = req.body.skip;
    let limit = req.body.limit;
    let search = req.body.search;
    var regex = new RegExp(search, "i");
    console.log(req.body)
    const response = await User.find({username : regex }).sort({ username : 1}).skip(parseInt(offset)).limit(parseInt(limit))
    console.log(response)
    res.send(response)
})

app.post("/create-user", (req, res) => {
    const details = req.body;
    User.insertMany(details, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
          res.status(201).send(data);
        }
    });
});

app.listen(3000, () => console.log("Running"))

