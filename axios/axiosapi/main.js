const url = "http://localhost:5500/api"

const getUser = () => {
    axios.get(url)
    .then((item)=>{console.log(item.data)})
}

const newUser = () => {
    axios.post({body:{name:'oi',avatar:'qualquer', city:'qualquer'}})
}

getUser()

newUser()