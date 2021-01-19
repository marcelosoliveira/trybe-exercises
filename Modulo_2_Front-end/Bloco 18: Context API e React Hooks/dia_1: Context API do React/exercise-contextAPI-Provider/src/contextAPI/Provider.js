import React from 'react';
import Context from './Context'

class Provider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redCar: false,
      blueCar: false,
      yellowCar:false,
      signalColor: 'red',
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
      signalColor: sinal,
    });
  }

  render() {
    const cars = {
      ...this.state,
      handlerCar: this.handlerCar,
      changeSignal: this.changeSignal, 
    }

    const { children } = this.props;
    return (
      <div className="container">
        <Context.Provider value={ cars }>
          { children }
        </Context.Provider>
      </div>
    );
  }
}

export default Provider;