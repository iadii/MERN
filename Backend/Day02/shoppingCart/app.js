const express = require('express');
const app = express()
const port = 3000

app.use(express.json())

const store = [];
let nextId = 1000;
app.post('/data',(req, res) => {

    const id = nextId++;
    const { item, quantity, price } = req.body;
    if (!item || !quantity || !price) {
        return res.status(400).json({ error: 'Missing something' });
    }
    const newEntry = { id, item, quantity, price };
    store.push(newEntry);
    res.status(200).json({
        id: id,
        item: item,
        price: price,
        quantity: quantity
     });
})

app.get('/data/:id',(req, res) => {
    if(!(store.id = id)){
        res.status(201).json({
            err: "ID not found"
        })
    }
    if(store.id = id){
        res.status(201).json({
            id: store.id,
            item: store.item,
            price: store.price,
            quantity: store.quantity
        })
    }
})

app.get('/data',(req, res) => {
    res.status(200).json(store)
})

app.listen(port, () => {
  console.log(` app listening on port ${port}`)
})