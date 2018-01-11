export default fetchAuthUserReducer = (state = null, action) => {
    switch(action.type){
        case 'AUTH_STATE_CHANGED': return action.payload.user || null
    }
    return state;
};