const defaultState = {
    name:'',
    email:'',
    password:'',
    error:null
};

export default signupFormReducer = (state = defaultState, action) => {
    switch(action.type){
        case 'SIGNUP_ERROR': return Object.assign({}, state, { error: action.payload.error});
        case 'UPDATE_SIGNUP_FORM': return Object.assign({}, state, action.payload);
    }
    return state;
};