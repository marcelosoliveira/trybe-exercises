import React from 'react';
import ContextCar from './contextAPI/Context'
import './App.css';
import Cars from './Cars';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redCar: false,
      blueCar: false,
      yellowCar: false,    
    }
    this.handlerCar = this.handlerCar.bind(this);
  }

  handlerCar(car, side) {
    this.setState({
      [car]: side,
    });
  }

  render() {
    const context = {
      ...this.state,
      handlerCar: this.handlerCar, 
    }
    return (
      <ContextCar.Provider value={context}>
        <Cars />
      </ContextCar.Provider>
    );
  }
  
}

export default App;

