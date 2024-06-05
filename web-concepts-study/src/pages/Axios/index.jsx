import axios from "axios";


const url = "http://localhost:5500/api"

const getUser = async () => {
    await axios.get(url)
    .then((item)=>{console.log(item.data)})
}

const newUser = () => {
    axios.post({body:{name:'oi',avatar:'qualquer', city:'qualquer'}})
}

export const AxiosPage = () => {
    return ( 
        <>
        {console.log(getUser())}
        </>
    )
}   