import { Component } from 'react';

class Input extends Component {
  render() {
    const { names, name, value, onChange, error, max, type } = this.props;

    return (
      <div className="input-class">
        <label>{names}: </label>
          <input
            type={type}
            name={name} 
            value={value} 
            onChange={onChange}
            maxLength={max} />
          <span><strong>  {error}</strong></span>
      </div>
    );
  }
}

export default Input;
