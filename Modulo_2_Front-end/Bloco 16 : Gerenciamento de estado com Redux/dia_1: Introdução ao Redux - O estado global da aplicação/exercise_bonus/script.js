const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const init = {
  value: 0,
  count: 0,
  arrayValue: [],
};

function counterReducer(state = init, action) {
  let newState;
  switch (action.type) {
    case INCREMENT:
      newState = Object.assign({}, state, {value: state.value + action.value, count: state.count + 1, arrayValue: [...state.arrayValue, action.value]});
      return newState;
    case DECREMENT:
      newState = Object.assign({}, state, {value: state.value + action.value, count: state.count + 1, arrayValue: [...state.arrayValue, action.value]});
      return newState;
    default:
      return state;
  }
}

const store = Redux.createStore(counterReducer);

document.getElementById('increment')
  .addEventListener('click', () => {
    const incrementValue = parseInt(document.getElementById('increment-value').value,10);
    store.dispatch({ type: INCREMENT, value: incrementValue });
  }
)
document.getElementById('decrement')
  .addEventListener('click', () => {
    const decrementValue = parseInt(document.getElementById('decrement-value').value,10) * -1;
    store.dispatch({ type: DECREMENT, value: decrementValue });
  }
)

document.getElementById('multi')
  .addEventListener('click', () => {
    store.dispatch({ type: INCREMENT, value: 10 })
  }
)

store.subscribe(() => document.getElementById('value').innerHTML = store.getState().value.toString());
