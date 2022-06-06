const express = require('express')
const app = require('./app')
PORT = process.env.PORT || 4000

const connectToDataBase = require('./src/database')
const cors = require('cors')

connectToDataBase()

app.use(cors())
app.use(express.json())
app.use(require('./src/routes'))

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
