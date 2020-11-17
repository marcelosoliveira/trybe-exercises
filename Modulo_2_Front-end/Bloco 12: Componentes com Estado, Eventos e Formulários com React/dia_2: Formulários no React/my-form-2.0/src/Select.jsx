import { Component } from 'react';

  const estados = [
  'Selecione',
  'Rio de Janeiro',
  'Minas Gerais', 
  'Amapá', 
  'Amazonas', 
  'São Paulo', 
  'Ceará', 
  'Distrito Federal'];

  class Select extends Component {
    render() {
      return (
        <div className="select-class">
          <label>{this.props.names}: </label>
          <select name={this.props.name}
          value={this.props.value} 
          onChange={this.props.onChange} >
            {estados.map((estado) =>
            <option key={estado} > {estado} </option>)}
          </select>
            <span><strong>  {this.props.error}</strong></span>
        </div>
      );
    }
  }

  export default Select;
