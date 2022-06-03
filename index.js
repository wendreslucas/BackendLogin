const express = require('express')
const app = express()
PORT = process.env.PORT || 4000

const routes = require('./src/routes/routes')
const connectToDataBase = require('./src/database')
const cors = require('cors')
const bodyParser = require('body-parser')

connectToDataBase()

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(routes)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})

app.get('/', (req, res) => {
  res.status(200).json({ MSG: 'Bem vindoS!' })
})
