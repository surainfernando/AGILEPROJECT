const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello NIBM AXIS!')
})
app.post('/register', (req, res) => {
  console.log("req recieved")
    res.send('Registered!')
  })
  

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})