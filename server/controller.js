const getCompliment = (req, res) => {
  const compliments = [
    "Gee, you're a smart cookie!",
    'Cool shirt!',
    'Your Javascript skills are stellar.'
  ]

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length)
  let randomCompliment = compliments[randomIndex]

  res.status(200).send(randomCompliment)
}

//Fortune Section

const getFortune = (req, res) => {
  const fortunes = [
    'You will win the lottery',
    'You will have twins',
    'You will become President',
    'You will find the cure for cancer',
    'You will be the next Chuck Norris'
  ]
  let randomFortuneIndex = Math.floor(Math.random() * fortunes.length)
  let randomFortune = fortunes[randomFortuneIndex]
  res.status(200).send(randomFortune)
}

//Goals Section

const goals = [
  {
    id: 1,
    item: 'Study Hard'
  },
  {
    id: 2,
    item: 'Try My Best'
  },

  {
    id: 3,
    item: 'Get Good Sleep'
  },
  {
    id: 4,
    item: 'Do Not Sweat The Small Stuff'
  },
  {
    id: 5,
    item: 'Trust In Myself'
  }
]

let goalId = 6

const getGoals = (req, res) => {
  res.status(200).send(goals)
}

const makeGoal = (req, res) => {
  const { item } = req.body
  let newGoal = {
    item,
    id: goalId
  }
  goals.push(newGoal)
  res.status(200).send(goals)
  goalId++
}

const deleteGoal = (req, res) => {
  const { id } = req.params
  let goalIndex = goals.findIndex(item => item.id === +id)
  goals.splice(goalIndex, 1)
  res.status(200).send(goals)
}

const updateGoal = (req, res) => {
  const { id } = req.params
  const { goalName } = req.body
  console.log(id, goalName)
  let goalIndex = goals.findIndex(item => item.id === +id)
  console.log(goalIndex)
  goals[goalIndex].item = goalName
  res.status(200).send(goals)
}

module.exports = {
  getCompliment,
  getFortune,
  getGoals,
  makeGoal,
  deleteGoal,
  updateGoal
}
