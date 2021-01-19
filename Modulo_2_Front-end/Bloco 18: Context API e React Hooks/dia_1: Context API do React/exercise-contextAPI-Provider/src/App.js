import React from 'react';
import Provider from './contextAPI/Provider'
import TrafficSignal from './TrafficSignal';
import './App.css';
import Cars from './Cars';

class App extends React.Component {

  render() {
    return (
      <div className="container">
        <Provider>
          <Cars />
          <TrafficSignal />
        </Provider>
      </div>
    );
  }
}

export default App;
