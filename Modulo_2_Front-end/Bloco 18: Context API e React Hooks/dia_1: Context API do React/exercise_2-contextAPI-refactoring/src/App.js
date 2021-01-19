import React from 'react';
import Context from './contextAPI/Context'
import TrafficSignal from './TrafficSignal';
import './App.css';
import Cars from './Cars';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redCar: false,
      blueCar: false,
      yellowCar:false,
      color: 'red',
    }
    this.handlerCar = this.handlerCar.bind(this);
    this.changeSignal = this.changeSignal.bind(this);
  }

  handlerCar(red, blue, yellow) {
    this.setState({
      redCar: red,
      blueCar: blue,
      yellowCar: yellow,  
    });
  }

  changeSignal(sinal) {
    this.setState({
      color: sinal,
    });
  }

  render() {
    const cars = {
      ...this.state,
      handlerCar: this.handlerCar,
      changeSignal: this.changeSignal, 
    }
    return (
      <div className="container">
        <Context.Provider value={ cars }>
          <Cars />
          <TrafficSignal />
        </Context.Provider>
      </div>
    );
  }
}

export default App;
