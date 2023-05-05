const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.use(express.json())

const {
  getCompliment,
  getFortune,
  getCareers,
  makeCareer,
  deleteCareer,
  updateCareer
} = require('./controller')

app.get('/api/compliment', getCompliment)
app.get('/api/fortune', getFortune)
app.get('/api/career', getCareers)
app.post('/api/makeCareer', makeCareer)
app.delete('/api/deleteCareer/:id', deleteCareer)
app.put('/api/updateCareer/:id', updateCareer)

app.listen(4000, () => console.log('Server running on 4000'))

