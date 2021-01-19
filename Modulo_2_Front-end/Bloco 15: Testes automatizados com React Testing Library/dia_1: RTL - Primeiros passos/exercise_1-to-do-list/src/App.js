import React, { Component } from 'react';
import InputTodo from './InputTodo';
import Item from './Item';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      listTodo: [],
    };

    this.updateState = this.updateState.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(todo) {
    this.setState((state) => ({ listTodo: [...state.listTodo, todo] }));
  }

  updateState(text) {
      const { listTodo } = this.state;
      const newListTodo = listTodo.filter((todo) => todo !== text);
      this.setState(() => ({ listTodo: newListTodo }));
  }

  render() {
    const { listTodo } = this.state;
    return (
      <div className="App">
        <InputTodo
          length={listTodo.length}
          addTodo={(todo) => this.addTodo(todo)}
          remTodo={ this.updateState }
        />
        {listTodo &&
          <ul>
            {
              listTodo.map((todo, index) => (
                <li key={index + 1}>
                  <Item content={ todo } />
                </li>
              ))
            }
          </ul>
        }
      </div>
    );
  }
}
export default App;
