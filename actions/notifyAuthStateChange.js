export default notifyAuthStateChange = (user) => {
    console.log('select item action handler called');
    return {
        type: 'AUTH_STATE_CHANGED',
        payload: {user}
    }
};