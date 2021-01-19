import { CLIENTDELETE, CLIENTREG } from '../actions';

const initialState = {
  client: [],
}

export default function reducerClientReg (state = initialState, action) {
  const { type, name, age, email } = action;
  switch (type) {
    case CLIENTREG:
      return Object.assign({}, state, { client: [...state.client, {name: name, age: age, email: email}] });
    case CLIENTDELETE:
      return Object.assign({}, state, { client: state.client.filter((client) => client.name !== name && client.age !== age && client.email !== email) });
    default:
      return state;
    }
}
