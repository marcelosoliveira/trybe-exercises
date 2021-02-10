import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [ number, setNumber ] = useState(0);
  const [ acert, setAcert ] = useState("Acerto");

  const radomNumber = () => {
    setNumber(Math.ceil(Math.random() * 100))
  }

  const acertNumber = () => {
    if (number % 3 === 0 || number % 5 === 0) return acert
    if(acert !== "Acerto") setAcert("Acerto")
  }

  useEffect(() => {
    const timer = setInterval(radomNumber, 10000);

    return () => {
      clearInterval(timer);
      
    }
  },[]);

  return (
    <div className="App">
      <br />
      <br />
      { number }
      <br />
      { acertNumber() }  
    </div>
  );
}

export default App;
