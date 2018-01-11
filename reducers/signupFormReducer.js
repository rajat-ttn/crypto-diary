const defaultState = {
    name:'Rajat Sharma',
    email:'rajat.sharma@tothenew.com',
    password:'hola@123',
    error:null,
    isSignupSpinnerShown:false
};

export default signupFormReducer = (state = defaultState, action) => {
    switch(action.type){
        case 'SIGNUP_ERROR': return Object.assign({}, state, { error: action.payload.error});
        case 'UPDATE_SIGNUP_FORM': return Object.assign({}, state, action.payload);
    }
    return state;
};