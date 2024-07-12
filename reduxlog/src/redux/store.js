import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import coffeeReducer from './reducers'; 

const logger = createLogger();
const store = createStore(coffeeReducer, applyMiddleware(thunk, logger));

export default store;
