import React from 'react';
import Button from './Button';

class App extends React.Component {
  constructor() {
    super();
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      numeroDeCliques: 0,
      numeroDeCliques1: 0,
      numeroDeCliques2: 0,
      numeroDeCliques3: 0,
    }
  } 

  handleClick1() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques1: estadoAnterior.numeroDeCliques1 + 1     
    }));
    if (this.state.numeroDeCliques1 % 2 === 0) {
      console.log('Botão verde');
    } else {
      console.log('Botão padrão');
    }
  }

  handleClick2() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques2: estadoAnterior.numeroDeCliques2 + 1     
    }));
    if (this.state.numeroDeCliques2 % 2 === 0) {
      console.log('Botão verde');
    } else {
      console.log('Botão padrão');
    }
  }

  handleClick3() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques3: estadoAnterior.numeroDeCliques3 + 1     
    }));
    if (this.state.numeroDeCliques3 % 2 === 0) {
      console.log('Botão verde');
    } else {
      console.log('Botão padrão');
    }
  }

  handleClick() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1    
    }));
    if (this.state.numeroDeCliques % 2 === 0) {
      console.log('Botão verde');
    } else {
      console.log('Botão padrão');
    }
  }

  buttonColor(number) {
    if (number % 2 === 0) {
      return "button-verde";
    }
    return "none";
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleClick1} classname={this.buttonColor(this.state.numeroDeCliques1)}
        value={this.state.numeroDeCliques1} />
        <Button onClick={this.handleClick2} classname={this.buttonColor(this.state.numeroDeCliques2)}
        value={this.state.numeroDeCliques2} />
        <Button onClick={this.handleClick3} classname={this.buttonColor(this.state.numeroDeCliques3)}
        value={this.state.numeroDeCliques3} />
        <Button onClick={this.handleClick} classname={this.buttonColor(this.state.numeroDeCliques)}
        value={this.state.numeroDeCliques} />
      </div>
    );
  }
}

export default App;
