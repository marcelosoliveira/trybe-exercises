import React, { useContext } from 'react';
import Context from './context/Context';

const App = () => {
  const { stateA, setStateA, stateB, setStateB } = useContext(Context);

  return (
    <div>
      <p>{stateA}</p>
      <p>{stateB}</p>
      <button onClick={() => setStateA("newState") || setStateB("Context e Hooks")}>Click</button>
    </div>
  );
};

export default App;