import React, { useState } from 'react';
import CarsContext from './CarsContext';
import redSignal from '../images/redSignal.jpeg';
import yellowSignal from '../images/yellowSignal.jpeg';
import greenSignal from '../images/greenSignal.jpeg';

function Provider({ children }) { 

  const [ red, setRed ] = useState(false);
  const [ blue, setBlue ] = useState(false);
  const [ yellow, setYellow ] = useState(false);
  const [ color, setColor ] = useState('red');

  const moveCar = (red, blue, yellow) => {
    setRed(red);
    setBlue(blue);
    setYellow(yellow);
  };

  const changeSignal = (signalColor) => {
    setColor(signalColor);
  }

  const renderSignal = (signalColor) => {
    if (signalColor === 'red') return redSignal;
    if (signalColor === 'yellow') return yellowSignal;
    if (signalColor === 'green') return greenSignal;
    return null;
  };

  const contextCar = {
    red,
    blue,
    yellow,
    color,
    moveCar,
    changeSignal,
    renderSignal,
  }

  return (
    <CarsContext.Provider value={contextCar}>
      {children}
    </CarsContext.Provider>
  );
 
};

export default Provider;

