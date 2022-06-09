const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/api', function (req, res) {
  res.send('estoy en / API')
})

app.listen(3000)