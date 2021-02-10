const express = require('express')
require('./db/mongoose')
const productRoutes = require('./routes/products')

const app = express()

app.use(express.json())
app.use(productRoutes)
app.listen(3000)
