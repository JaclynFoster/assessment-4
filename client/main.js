const complimentBtn = document.getElementById('complimentButton')

const getCompliment = () => {
  axios.get('http://localhost:4000/api/compliment/').then(res => {
    const data = res.data
    alert(data)
  })
}

complimentBtn.addEventListener('click', getCompliment)

// Fortune Button Section

const fortuneBtn = document.getElementById('fortune-btn')

const getFortune = () => {
  axios.get('http://localhost:4000/api/fortune/').then(response => {
    const data = response.data
    alert(data)
  })
}

fortuneBtn.addEventListener('click', getFortune)

// Goals Section

const goalForm = document.querySelector('#form-container')
const goalInput = document.querySelector('#goal-input')
const goalBtn = document.querySelector('#goal-btn')
const goalListHolder = document.querySelector('#goal-holder')

const showGoalsList = goalName => {
  let addNewGoal = document.createElement('li')
  let editBtn = document.createElement('button')
  editBtn.textContent = 'Edit'
  editBtn.onclick = () => {
    editGoal(goalName)
  }
  addNewGoal.innerHTML = `
    ${goalName.item}
    <button id="#delete-btn" onclick=deleteGoal(${goalName.id})>X</button>
    `
  addNewGoal.appendChild(editBtn)
  goalListHolder.appendChild(addNewGoal)
}

const getGoalsList = () => {
  axios
    .get('http://localhost:4000/api/goal')
    .then(response => {
      goalListHolder.textContent = ''
      console.log(response.data)
      for (let i = 0; i < response.data.length; i++) {
        showGoalsList(response.data[i])
      }
    })
    .catch(error => {
      console.log(error, 'Error')
    })
}
getGoalsList()

const createNewGoal = e => {
  e.preventDefault()
  let createNew = document.createElement('li')
  createNew.textContent = goalInput.value
  goalListHolder.appendChild(createNew)
  axios
    .post('http://localhost:4000/api/makeGoal', { item: goalInput.value })
    .then(response => {
      goalInput.value = ''
      getGoalsList()
      console.log(response.data)
    })
    .catch(error => {
      console.log(error, 'Error')
    })
}

goalForm.addEventListener('submit', createNewGoal)

const deleteGoal = id => {
  axios
    .delete(`http://localhost:4000/api/deleteGoal/${id}`)
    .then(response => {
      getGoalsList()
      console.log(response.data)
    })
    .catch(error => {
      console.log(error, 'Error')
    })
}

const editGoal = object => {
  let editItem = prompt('Type in new goal')
  if (!editItem) {
    editItem = object.item
  }
  axios
    .put(`http://localhost:4000/api/updateGoal/${object.id}`, {
      goalName: editItem
    })
    .then(response => {
      getGoalsList()
      console.log(response.data)
    })
    .catch(error => {
      console.log(error, 'Error')
    })
}
