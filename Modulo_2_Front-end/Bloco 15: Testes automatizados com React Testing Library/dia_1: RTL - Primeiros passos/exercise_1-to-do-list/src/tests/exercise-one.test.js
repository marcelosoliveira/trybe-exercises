import React from 'react';
import { render, fireEvent, cleanup, queryAllByAltText } from '@testing-library/react';
import App from '../App';

afterEach(cleanup);

// arquivo App.test.js pode servir de exemplo
describe('Teste da aplicação, testando o botão e sua funcionalidade', () => {
  test('Verificando se o botão está na tela e se o ele contém o texto "Adicionar"', () => {
    const {getByText} = render(<App />);
    const button = getByText('Adicionar');
    expect(button).toBeInTheDocument();
    expect(button.type).toBe('button');
  });

  test(`Ao clicar no botão, é necessário adicionar o que o usuário digitou à lista`, () => {
    // Use os fireEvent, para simular a digitação do usuário e o clique.
    const {getByLabelText, queryByText, queryAllByText} = render(<App />);
    const text = 'Testando React Test Library';

    const textInput = getByLabelText('Tarefa:');
    const button = queryByText('Adicionar');

    fireEvent.change(textInput, { target: { value: text } });
    fireEvent.click(button);

    const textAfterClick = queryAllByText(text);

    expect(textInput.value).toBe('');
    expect(textAfterClick.length).toBe(1);

  });
});
