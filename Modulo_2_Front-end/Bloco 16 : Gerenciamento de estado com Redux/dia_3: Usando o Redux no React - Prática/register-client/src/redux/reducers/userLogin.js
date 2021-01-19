import { LOGIN, SIGNUP, LOGOUT } from '../actions';

const initialState = {
  users: [],
  login: 'unchecked',
  user: ''
}

export default function reducerLoginSignup(state = initialState, action) {
  switch(action.type) {
    case LOGIN:
      return Object.assign({}, state, { login: action.status, user: action.user });
    case SIGNUP:
      return Object.assign({}, state, { users: [...state.users, {email: action.email, password: action.password}] });
    case LOGOUT:
      return Object.assign({}, state, {status: 'unchecked', user: ''});
    default:
      return state;
  }
}
