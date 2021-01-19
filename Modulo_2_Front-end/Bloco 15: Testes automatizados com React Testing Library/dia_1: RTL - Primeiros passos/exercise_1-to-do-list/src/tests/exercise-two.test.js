import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from '../App';
import Item from '../Item';

afterEach(cleanup);

describe('Teste do campo de input', () => {
  test('Testando a adição de vários itens a aplicação', () => {
    const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água']; // Use esse array como base para realizar os testes.
    const { queryByLabelText, queryByRole, queryByText } = render(<App />); // Caso precise de uma nova query adicione no object destructuring
    const button = queryByRole('button');
    const inputText = queryByLabelText('Tarefa:');

    listTodo.forEach((toDo) => {
      fireEvent.change(inputText, { target: { value: toDo } });
      fireEvent.click(button);
    });

    listTodo.forEach((toDo) => {
      const validWorkout = queryByText(toDo);
      expect(validWorkout).toBeInTheDocument();
    })
  })
});

describe('Teste do componente Item', () => {
  test('Ao receber uma string como prop ela precisa aparecer na tela', () => {
    const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água'];

    listTodo.forEach((toDo) => {
      const { queryByText } = render(<Item content={ toDo }/>)
      const validWorkout = queryByText(toDo);
      expect(validWorkout).toBeInTheDocument();
    });
  })
})
