const yt = new Promise((resolve)=>{
    setTimeout(() => {
        resolve('Vídeos para youtube')
    }, 1500);
})

const fb = new Promise((resolve)=>{
    setTimeout(() => {
        resolve('posts para facebook')
    }, 1500);
})

Promise.all([yt,fb])
    .then(result => {console.log(result)})