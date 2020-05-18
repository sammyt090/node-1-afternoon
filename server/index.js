const express = require('express')
const getProducts = require('./getProducts')
const app = express()

const SERVER_PORT = 4000

app.use(express.json())

app.get("/api/products", getProducts.getProducts);

app.get(`/api/product/:id`, getProducts.getId)



app.listen(SERVER_PORT, () => 
    console.log(`Server is running on port ${SERVER_PORT}`))