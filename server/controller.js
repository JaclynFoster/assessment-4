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

//Careers Section

const careers = [
  {
    id: 1,
    job: 'Doctor'
  },
  {
    id: 2,
    job: 'Lawyer'
  },

  {
    id: 3,
    job: 'Astronaut'
  },
  {
    id: 4,
    job: 'Software Engineer'
  },
  {
    id: 5,
    job: 'Veterinarian'
  }
]

let careerId = 6

const getCareers = (req, res) => {
  res.status(200).send(careers)
}

const makeCareer = (req, res) => {
  const { job } = req.body
  let newCareer = {
    job,
    id: careerId
  }
  careers.push(newCareer)
  res.status(200).send(careers)
  careerId++
}

const deleteCareer = (req, res) => {
  const { id } = req.params
  let jobIndex = careers.findIndex(job => job.id === +id)
  careers.splice(jobIndex, 1)
  res.status(200).send(careers)
}

const updateCareer = (req, res) => {
  const { id } = req.params
  const { jobName } = req.body
  console.log(id, jobName)
  let jobIndex = careers.findIndex(job => job.id === +id)
  console.log(jobIndex)
  careers[jobIndex].job = jobName
  res.status(200).send(careers)
}

module.exports = {
  getCompliment,
  getFortune,
  getCareers,
  makeCareer,
  deleteCareer,
  updateCareer
}
