import React from 'react';
import useArray from '../hooks/useArray';

function Todo() {
  const [todo, handlerChange, handlerClick, text] = useArray();
  return (
    <div>
      Todo List
      <br />
      <br />
      <input type="text" onChange={ handlerChange } value={ text } />
      <button type="button" onClick={ handlerClick } onKeyDown={ handlerClick }> Adicionar</button>
      <ul>
      {
        todo.map((list) => <li>{ list }</li>)
      }
      </ul>  
    </div>
  );
}

export default Todo;
