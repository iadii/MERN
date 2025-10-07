const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.status.json({
        msg: "Hii Adii"
    })
})

app.get('/adii', (req, res) => {
    res.json({
        adii: "vats"
    })
})


app.listen(PORT)