const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json())

app.post('/', (req, res) => {
    const {name, mail} = req.body;

    res.status(200).json({
        msg: "data created successfully",
        name:name,
        mail: mail
    })
})


app.get('/', (req, res) => {
    res.send("hiii")
})

app.listen(port)