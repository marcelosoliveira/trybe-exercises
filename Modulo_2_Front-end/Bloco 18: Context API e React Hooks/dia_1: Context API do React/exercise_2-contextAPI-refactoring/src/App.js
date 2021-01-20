import React from 'react';
import ContextCar from './contextAPI/Context'
import './App.css';
import Cars from './Cars';
import redSignal from './images/redSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redCar: false,
      blueCar: false,
      yellowCar: false,    
    }
    this.handlerCar = this.handlerCar.bind(this);
    this.renderSignal = this.renderSignal.bind(this);
  }

  handlerCar(car, side) {
    this.setState({
      [car]: side,
    });
  }
  
  const renderSignal = (signalColor) => {
  if (signalColor === 'red') return redSignal;
  if (signalColor === 'yellow') return yellowSignal;
  if (signalColor === 'green') return greenSignal;
  return null;
};

  render() {
    const context = {
      ...this.state,
      handlerCar: this.handlerCar,
      renderSignal: this.renderSignal,
    }
    return (
      <ContextCar.Provider value={context}>
        <Cars />
      </ContextCar.Provider>
    );
  }
  
}

export default App;

