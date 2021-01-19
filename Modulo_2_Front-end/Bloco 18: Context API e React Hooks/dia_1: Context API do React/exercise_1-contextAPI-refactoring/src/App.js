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
      yellowCar:false,
    }
    this.handlerCar = this.handlerCar.bind(this);
  }

  handlerCar(red, blue, yellow) {
    this.setState({
      redCar: red,
      blueCar: blue,
      yellowCar: yellow,  
    });
  }

  render() {
    const cars = {
      ...this.state,
      handlerCar: this.handlerCar, 
    }
    return (
      <ContextCar.Provider value={cars}>
        <Cars />
      </ContextCar.Provider>
    );
  }
  
}

export default App;
