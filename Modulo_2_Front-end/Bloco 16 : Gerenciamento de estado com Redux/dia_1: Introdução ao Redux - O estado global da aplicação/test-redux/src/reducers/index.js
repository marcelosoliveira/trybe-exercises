import { combineReducers } from 'redux';
import meuReducer from './meuReducer';
import meuOutroReducer from './meuOutroReducer';

const reducerCombinado = combineReducers({
  atual: meuReducer,
  outro: meuOutroReducer });

export default reducerCombinado;