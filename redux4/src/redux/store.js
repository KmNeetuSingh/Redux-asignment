import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';

// Custom middleware to log action types
const actionTypeLogger = store => next => action => {
    console.log('Action Type:', action.type);
    return next(action);
};

// Custom middleware to log payloads
const payloadLogger = store => next => action => {
    if (action.payload) {
        console.log('Payload:', action.payload);
    }
    return next(action);
};

const middleware = applyMiddleware(actionTypeLogger, payloadLogger);

const store = createStore(rootReducer, middleware);

export default store;
