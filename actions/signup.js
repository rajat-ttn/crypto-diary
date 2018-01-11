import firebase from 'firebase';

export const signupUserAsync = (user) => {
    return async (dispatch) =>{
        dispatch({
            type: 'UPDATE_SIGNUP_FORM',
            payload: {
                error: null,
                isSignupSpinnerShown: true
            }
        });
        try {
            const newUser = await firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            if(newUser){
                await newUser.updateProfile({
                    displayName: user.name
                });
                console.log('user name updated succesfully');
            }
        }
        catch(error){
            console.log('sign-up generated error:-' + error);
            dispatch({
                type:'SIGNUP_ERROR',
                payload:{error}
            });
        }
        dispatch({
            type:'UPDATE_SIGNUP_FORM',
            payload:{ isSignupSpinnerShown: false}
        });
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