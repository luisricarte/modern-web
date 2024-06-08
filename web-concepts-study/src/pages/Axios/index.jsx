import axios from "axios";
const url = "http://localhost:5500/api"

const updateduser = {
    name: 'Luis Eduardo',
    avatar: 'http://lorempixel.com/400/200/',
    city: 'Campina Grande'
}

const getUser = async () => {
    await axios.get(url)
    .then(item=>{
        const data = item.data
        return JSON.stringify(data)
    })
    .then(
        response => console.log(response)
    )}

const newUser = () => {
    axios.post(url,{
        name: 'Marina Martins',
        avatar: 'http://lorempixel.com/400/200/',
        city: 'Campina Grande'
    })
    .then(response => { JSON.stringify(response.data)})
    .catch(error => error.message)
}

const updateUser = id =>{
    axios.put(`${url}/${id}`, updateduser)
    .then(response => console.log(`${response.data} e Usuário atualizado: ${updateduser.name}`))
}

const deleteUser = id => {
    axios.put(`${url}/${id}`)
}

const getUserById = id => {
    axios.get(`${url}/${id}`)
    .then(response => JSON.stringify(response.data.name))
    .then(response => response)
}

export const AxiosPage = () => {
    return ( 
        <>
        <h1>{console.log(getUserById(2))}</h1>

        </>
    )
}   