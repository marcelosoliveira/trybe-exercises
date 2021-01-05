import { createStore, combineReducers } from 'redux';
import listReducer from '../reducers/index';

const rootReducer = combineReducers({ listReducer });

const store = createStore(rootReducer);

export default store;