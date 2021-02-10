import React from 'react';
import Context from './contextAPI/Context'

const TrafficSignal = () => {
  return (
    <Context.Consumer>
      {({ color, changeSignal, renderSignal }) => (
    <div>
      <div className="button-container">
        <button onClick={() => changeSignal('red')} type="button">
          Red
        </button>
        <button onClick={() => changeSignal('yellow')} type="button">
          Yellow
        </button>
        <button onClick={() => changeSignal('green')} type="button">
          Green
        </button>
      </div>
      <img className="signal" src={renderSignal(color)} alt="" />
    </div>
    )}
    </Context.Consumer>
  );
};

export default TrafficSignal;
