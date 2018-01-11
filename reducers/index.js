import {combineReducers} from 'redux';
import fetchAuthUserReducer from "./fetchAuthUserReducer";
import signupFormReducer from './signupFormReducer'

export default reducers = combineReducers({
    authUser : fetchAuthUserReducer,
    signupForm : signupFormReducer
});