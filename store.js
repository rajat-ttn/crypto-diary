import { createStore, applyMiddleware } from 'redux' // ← Main Redux library
import reducers from './reducers'
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger();

const store = createStore(reducers, applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
));

export default store;