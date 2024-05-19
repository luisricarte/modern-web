// Case 1

const talkAfter = (sec,phrase) => {
    // Some Asynchronous operation
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve(phrase)
            //reject(phrase)
        }, sec * 1000)
    })
}

talkAfter(3, 'Its a Resolve Promise')
    .then(resolve => resolve.concat(' - OK!'))
    .then(resolveAndAdded => console.log(resolveAndAdded))
    .catch(e => console.log(e)) // if the reject function was activated 