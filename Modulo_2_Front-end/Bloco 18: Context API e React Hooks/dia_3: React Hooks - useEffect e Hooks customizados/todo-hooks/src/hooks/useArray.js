import { useState } from 'react';

function useArray() {
  const [text, setText] = useState('');
  const [todo, setTodo] = useState([]);

  const handlerChange = ({ target }) => {
    const { value } = target;
    setText(value);
  }

  const handlerClick = () => {
    if ( text !== '') {
      setTodo([...todo, text]);
      setText('');
    } else {
      alert('Digite a tarefa');
    }
  }
  return [todo, handlerChange, handlerClick, text];
}

export default useArray;
