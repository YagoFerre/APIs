const url = "http://localhost:5500/api"

function getUsers(){
axios.get(url)
.then(response => {
    apiResult.textContent = JSON.stringify(response.data)
})
.catch(error => console.error(error))
}

function addNewUser(newUser){
    axios.post(url, newUser)
    .then(response => {
        console.log(response)
    })
    .catch(error => console.error(error))
}


function getUser (id) {
    axios.get(`${url}/${id}`)
    .then(response => {
        const data = response.data
        username.textContent = data.name
        usercity.textContent = data.city
        userid.textContent = data.id
        useravatar.src = data.avatar
    })
    .catch(error => console.error(error))
}

function updateUser(id, userUpdated) {
    axios.put(`${url}/${id}`, userUpdated)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

const userUpdated = {
    name:"Urso",
    avatar:"https://picsum.photos/200/300",
    city:"Selva da Penha",
    }
updateUser(3, userUpdated)


getUsers()

getUser(3)
addNewUser()
const newUser = {
    name:"Calica",
    avatar:"https://picsum.photos/200/300",    city:"Brasilia",
}