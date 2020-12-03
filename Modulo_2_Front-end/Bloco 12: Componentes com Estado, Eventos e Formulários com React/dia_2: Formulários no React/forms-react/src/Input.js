import React from 'react';

class Input extends React.Component {
  render() {
    let error = false;
    if (this.props.value === '') {
      error = true
    } 
    return (
      <label>{this.props.name}
      <input name="name" type="text" 
      value={this.props.value} 
      onChange={this.props.onChange} />
    <span>{error ? "Preencha o campo!" : ''}</span>
      </label>
    );
  }
}

export default Input;
