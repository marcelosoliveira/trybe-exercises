import React from 'react';
import Context from './Context';
import redSignal from '../images/redSignal.jpeg';
import yellowSignal from '../images/yellowSignal.jpeg';
import greenSignal from '../images/greenSignal.jpeg';

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
    this.renderSignal = this.renderSignal.bind(this);
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
  
  const renderSignal = (signalColor) => {
  if (signalColor === 'red') return redSignal;
  if (signalColor === 'yellow') return yellowSignal;
  if (signalColor === 'green') return greenSignal;
  return null;
};

  render() {
    const cars = {
      ...this.state,
      handlerCar: this.handlerCar,
      changeSignal: this.changeSignal,
      renderSignal: this.renderSignal, 
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
