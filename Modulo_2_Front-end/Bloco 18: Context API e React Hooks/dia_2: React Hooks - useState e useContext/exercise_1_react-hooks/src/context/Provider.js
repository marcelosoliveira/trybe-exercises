import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider({ children }) { 

  const [ red, setRed ] = useState(false);
  const [ blue, setBlue ] = useState(false);
  const [ yellow, setYellow ] = useState(false);

  const moveCar = (red, blue, yellow) => {
    setRed(red);
    setBlue(blue);
    setYellow(yellow);
  };

  const contextCar = {
    red,
    blue,
    yellow,
    moveCar,
  }

  return (
    <CarsContext.Provider value={contextCar}>
      {children}
    </CarsContext.Provider>
  );
 
};

export default Provider;
