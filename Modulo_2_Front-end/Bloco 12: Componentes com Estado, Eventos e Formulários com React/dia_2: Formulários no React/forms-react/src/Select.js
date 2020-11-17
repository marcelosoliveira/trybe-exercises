import React from 'react';

class Select extends React.Component {
  render() {
      let error = undefined;
      if (this.props.value === 'Selecione' || 
      this.props.value === '') {
        error = "Selecione um estado?";        
      }        
      
    return (
    <label>{this.props.name}
      <select  name="estado" value={this.props.value} onChange={this.props.onChange} >
        <option>Selecione</option>
        <option>São Paulo</option>
        <option>Minas Gerais</option>
        <option>Rio de Janeiro</option>
        <option>Paraná</option>
      </select>
    <span>{error ? error : ''}</span>
      </label>      
    );
  }
}

export default Select;
