const express = require('express')
require('./db/db')
const app = express()
const userRoutes = require('./routes/user')

app.use(express.json())
app.use(userRoutes)
app.listen(3000)