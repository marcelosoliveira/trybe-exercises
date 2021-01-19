import React, { Component } from 'react';
import PropTypes from 'prop-types'

class InputTodo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      textTodo: '',
    };

    this.changeTextTodo = this.changeTextTodo.bind(this);
  }

  changeTextTodo(value) {
    this.setState({ textTodo: value })
  }

  addItem(value, callback) {
    this.setState({ textTodo: '' })
    callback(value)
  }

  remItem(callback) {
    const remTodo = document.getElementsByClassName('selected')[0];
    const remTodoText = remTodo.id;

    callback(remTodoText);
  }

  render() {
    const { addTodo, remTodo, length } = this.props;
    const { textTodo } = this.state;

    let btnRemStatus = true;

    if (length > 0) btnRemStatus = false;

    return (
      <div className="InputTodo">
        <label htmlFor="inputTodo">Tarefa:</label>
        <input
          id="inputTodo"
          type="text"
          value={textTodo}
          onChange={(e) => this.changeTextTodo(e.target.value)}
        />
        <input
          id="btnAdd"
          type="button"
          value="Adicionar"
          onClick={() => this.addItem(textTodo,addTodo)}
        />
        <input
          id="btnRem"
          type="button"
          value="Remover"
          onClick={() => this.remItem(remTodo)}
          disabled={ btnRemStatus }
          data-testid="id-remove"
        />
      </div>
    );
  }
}
export default InputTodo;

InputTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
