import React from 'react';
import ContextCar from './contextAPI/Context'
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';

function Cars() {
  return (
    <ContextCar.Consumer>
      {({ redCar, blueCar, yellowCar, handlerCar }) => (
    <div>
      <div>
        <img
          className={redCar ? 'car-right' : 'car-left'}
          src={carRed}
          alt="red car"
        />
        <button
          onClick={() => handlerCar( !redCar, blueCar, yellowCar)}
          type="button"
        >
          Move
        </button>
      </div>
      <div>
        <img
          className={blueCar ? 'car-right' : 'car-left'}
          src={carBlue}
          alt="blue car"
        />
        <button
          onClick={() => handlerCar(redCar, !blueCar, yellowCar)}
          type="button"
        >
          Move
        </button>
      </div>
      <div>
        <img
          className={yellowCar ? 'car-right' : 'car-left'}
          src={carYellow}
          alt="yellow car"
        />
        <button
          onClick={() => handlerCar(redCar, blueCar, !yellowCar)}
          type="button"
        >
          Move
        </button>
      </div>
    </div>
    )}
    </ContextCar.Consumer>
  )
}

export default Cars;