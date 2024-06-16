const loginUser =  (email, password, onSuccess, onError) => {
    const error = false;
    setTimeout(() => {
        if (error) {
            return onError(new Error("error in login!"))
        }
        onSuccess({ email });
    },1500)
    
}

const getUserVideos = (email, callback) => {
    setTimeout(()=> {
        callback(['video1', 'video2', 'video3'])
    },2000)
}

const getVideosDetail = (video, callback) => {
    setTimeout(()=>{
        callback({ title: 'Vídeo sobre JavaScript Asynchronous'})
    }, 2500)
}

const user = loginUser('duds@email.com', '123456', 
    (user)=> {
        getUserVideos(user.email, (video)=>{
            console.log(video)
            getVideosDetail(video[0], (videos)=>{
                console.log(videos)
            })
        },
        console.log(user.email)
    )},
    (error) => {console.log({error}) }
)

console.log(`linha 14: {user:${user} }`)