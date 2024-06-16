const loginUser = (email, password) => {
    return new Promise((resolve, reject)=> {
        const error = false;
        if (error){
            reject(new Error("error in login!"))
        }   
        console.log("user logged!");
        resolve({email});
    })
}

const getUserVideos = (email) => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=> {
            console.log('getUserVideos')
            resolve(['video1', 'video2', 'video3'])
        },2000)
    })

}

const getVideosDetails = (video) => {
    return new Promise((resolve,reject)=>{
        
        setTimeout(()=>{
            console.log('getVideoDetails ')
            resolve({ title: 'Vídeo sobre JavaScript Asynchronous'})
        }, 2500)
    })
}

loginUser("duds@email.com", "senha1234")
    .then(user => getUserVideos(user.email))
    .then(videos =>  getVideosDetails(videos[0]))
    .then(resolve => console.log(resolve))
    .catch((error)=>{console.log(error)})


