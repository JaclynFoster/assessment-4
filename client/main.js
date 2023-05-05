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

// Career Section

const careerForm = document.querySelector('#form-container')
const careerInput = document.querySelector('#career-input')
const careerBtn = document.querySelector('#career-btn')
const careerListHolder = document.querySelector('#career-holder')

const showCareerList = jobName => {
  let addNewCareer = document.createElement('li')
  let editBtn = document.createElement('button')
  editBtn.textContent = 'Edit'
  editBtn.onclick = () => {
    editCareer(jobName)
  }
  addNewCareer.innerHTML = `
    ${jobName.job}
    <button id="#delete-btn" onclick=deleteCareer(${jobName.id})>X</button>
    `
  addNewCareer.appendChild(editBtn)
  careerListHolder.appendChild(addNewCareer)
}

const getCareersList = () => {
  axios
    .get('http://localhost:4000/api/career')
    .then(response => {
      careerListHolder.textContent = ''
      console.log(response.data)
      for (let i = 0; i < response.data.length; i++) {
        showCareerList(response.data[i])
      }
    })
    .catch(error => {
      console.log(error, 'Error')
    })
}
getCareersList()

const createNewCareer = e => {
  e.preventDefault()
  let createNew = document.createElement('li')
  createNew.textContent = careerInput.value
  careerListHolder.appendChild(createNew)
  axios
    .post('http://localhost:4000/api/makeCareer', { job: careerInput.value })
    .then(response => {
      careerInput.value = ''
      getCareersList()
      console.log(response.data)
    })
    .catch(error => {
      console.log(error, 'Error')
    })
}

careerForm.addEventListener('submit', createNewCareer)

const deleteCareer = id => {
  axios
    .delete(`http://localhost:4000/api/deleteCareer/${id}`)
    .then(response => {
      getCareersList()
      console.log(response.data)
    })
    .catch(error => {
      console.log(error, 'Error')
    })
}

const editCareer = object => {
  let editJob = prompt('Type in new career')
  if (!editJob) {
    editJob = object.job
  }
  axios
    .put(`http://localhost:4000/api/updateCareer/${object.id}`, {
      jobName: editJob
    })
    .then(response => {
      getCareersList()
      console.log(response.data)
    })
    .catch(error => {
      console.log(error, 'Error')
    })
}
