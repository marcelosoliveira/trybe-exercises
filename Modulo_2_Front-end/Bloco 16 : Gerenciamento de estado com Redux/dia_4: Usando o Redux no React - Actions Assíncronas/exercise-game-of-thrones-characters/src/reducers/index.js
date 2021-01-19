import { REQUEST_DATA, GET_DATA, FAILED_DATA } from '../actions';

const initialState = {
  loading: false,
  character: '',
  error: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_DATA:
      return Object.assign({}, state, { loading: true });
    case GET_DATA:
      return Object.assign({}, state, { loading: false, character: action.payload });
    case FAILED_DATA:
      return Object.assign({}, state, { loading: false, error: action.payload });
    default:
      return state;
  }
};

export default reducer;
