import React from 'react';
import Context from './contextAPI/Context'

class TrafficSignal extends React.Component {
  render() {

  const { signalColor, changeSignal, renderSignal } = this.context;

  return (
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
      <img className="signal" src={renderSignal(signalColor)} alt="" />
    </div>
  );
  }
};

TrafficSignal.contextType = Context;

export default TrafficSignal;
