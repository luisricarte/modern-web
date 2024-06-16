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

const displayUser = async () => {
    const user = await loginUser('duds@gmaril.com', '123151');
    const videos = await getUserVideos(user.email);
    const videoDetails = await getVideosDetails(videos[0]);
    console.log({user, videos, videoDetails})
}

displayUser();