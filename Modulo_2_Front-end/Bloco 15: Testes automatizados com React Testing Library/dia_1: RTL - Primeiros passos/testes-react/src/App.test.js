import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('Verifica se todos os teste estão ok', () => {
  it('Verifica a label Email e se o input é tipo email', () => {
    const { getByLabelText } = render(<App />);
    const inputEmail = getByLabelText('Email');
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail.type).toBe('email');
  });
  
    it('Verifica se há um botão Enviar', () => {
    const { getByTestId } = render(<App />);
    const inputButton = getByTestId('id-send');
    expect(inputButton).toBeInTheDocument();
    expect(inputButton.type).toBe('button');
    expect(inputButton).toHaveValue('Enviar');
  });
  
  it('Verifica se há dois botões', () => {
    const { getAllByRole } = render(<App />);
    const inputButton = getAllByRole('button');
    expect(inputButton.length).toBe(2);
  });

  it('Verificando se o botão e o campo email estão funcionando', () => {
    const { getByLabelText, getByTestId } = render(<App />);
    const EMAIL_USER = 'msbobsk8@gmail.com';

    //Acessar os elementos de testes.
    const inputTextEmail = getByLabelText('Email');
    const inputButtonEnviar = getByTestId('id-send');
    const valueEmailText = getByTestId('id-email-user');

    //Iteragir com os elementos de teste(se for necessário).
    fireEvent.change(inputTextEmail, {target: {value: EMAIL_USER}});
    fireEvent.click(inputButtonEnviar);

    //Fazer o teste.
    expect(inputTextEmail).toHaveValue('');
    expect(valueEmailText).toHaveTextContent(`Valor: ${EMAIL_USER}`);
  });
});


