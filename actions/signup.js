export const signupUser = (user) => {
    return (dispatch) =>{
        firebase
            .auth()
            .createUserWithEmailAndPassword(user.email, user.password)
            .then((user)=>{
                console.log('sign-up successfull');
                // no need to dispatch anything here, as It notifyAuthStateChange gets trigerred automatically.
            })
            .catch((e)=>{
                console.log('sign-up generated error:-' + e);
                dispatch({
                    type:'SIGNUP_ERROR',
                    payload:e
                });
            })
    };
};

export const updateSubmitForm  = (key, value) =>{
    console.log('updateSubmitForm called with ', key, value)
    return {
        type:'UPDATE_SIGNUP_FORM',
        payload: {
            [key]:value
        }
    };
};