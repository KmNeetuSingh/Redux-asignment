import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import authReducer from './authReducer';
import quizReducer from './quizReducer';

const logger = createLogger();

const rootReducer = combineReducers({
  auth: authReducer,
  quiz: quizReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
