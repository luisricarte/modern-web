const loginUser =  (email, password, onSuccess, onError) => {
    const error = false;
    setTimeout(() => {
        if (error) {
            return onError(new Error("error in login!"))
        }
        onSuccess({ email });
    },1500)
};

const loginUserPromise = (email, password) => {
    return new Promise((resolve, reject)=> {

    })
}