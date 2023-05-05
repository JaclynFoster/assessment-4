const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.use(express.json())

const {
  getCompliment,
  getFortune,
  getGoals,
  makeGoal,
  deleteGoal,
  updateGoal
} = require('./controller')

app.get('/api/compliment', getCompliment)
app.get('/api/fortune', getFortune)
app.get('/api/goal', getGoals)
app.post('/api/makeGoal', makeGoal)
app.delete('/api/deleteGoal/:id', deleteGoal)
app.put('/api/updateGoal/:id', updateGoal)

app.listen(4000, () => console.log('Server running on 4000'))

