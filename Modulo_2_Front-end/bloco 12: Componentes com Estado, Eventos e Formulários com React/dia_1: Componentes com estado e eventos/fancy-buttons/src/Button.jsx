import React from 'react';
import './App.css';

class Button extends React.Component {
  render() {
    return (
    <button className={this.props.classname} onClick={this.props.onClick}>{this.props.value}</button>
    );
  }
}

export default Button;