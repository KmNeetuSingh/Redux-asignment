// store.js

import { legacy_createStore as createStore } from 'redux';
import footballReducer from './reducers';

const store = createStore(footballReducer);

export default store;
