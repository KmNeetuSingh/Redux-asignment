import{legacy_createStore} from 'redux';
import { countReducer } from './countReducer';

export const store = legacy_createStore(countReducer);