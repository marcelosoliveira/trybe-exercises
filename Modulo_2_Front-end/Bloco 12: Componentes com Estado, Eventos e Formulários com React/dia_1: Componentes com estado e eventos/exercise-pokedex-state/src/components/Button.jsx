import React from 'react';
import './button.css'

class Button extends React.Component {
  render() {
    return (
    <div className="button-class">
      <button onClick={this.props.onClick} 
      className={this.props.className} value={this.props.value} disabled={this.props.disable}>
        {this.props.value}
      </button>
    </div>
    );
  }
}

export default Button;
