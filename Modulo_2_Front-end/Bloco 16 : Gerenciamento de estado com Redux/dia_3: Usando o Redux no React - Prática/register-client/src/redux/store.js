import { createStore, combineReducers  } from 'redux';

import reducerClientReg from './reducers/clientRegister';
import reducerLoginSignup from './reducers/userLogin';

const reducers = combineReducers({ cliReg: reducerClientReg, login: reducerLoginSignup });

const store = createStore(reducers);

export default store;
