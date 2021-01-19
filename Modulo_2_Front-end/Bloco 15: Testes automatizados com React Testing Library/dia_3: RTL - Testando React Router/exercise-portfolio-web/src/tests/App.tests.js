import React from 'react';
import renderWithRouter from './renderWithRouter';
import { fireEvent, cleanup } from '@testing-library/react';

import App from '../App';
import { About, Contact, Home, Projects } from '../pages';


afterEach(cleanup);

const LINK_TEXT_PAGES = {
  HOME: /Inicio/i,
  ABOUT: /Sobre/i,
  CONTACT: /Contatos/i,
  PROJECTS: /Projetos/i,
};

const CONTENT_TEXT_PAGES = {
  HOME: /Página Inicial/i,
  ABOUT: /Sobre mim/i,
  CONTACT: /Meus Contatos/i,
  PROJECTS: /Meus Projetos/i,
  NOT_FOUND: /Página não Encontrada/i,
}

const PATHNAME_PAGES = {
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact',
  PROJECTS: '/projects',
  NOT_FOUND: '/page/not-exist/',
}

describe('Teste que o clique em cada rota renderiza os textos esperados na tela e o histórico que as urls corretas são acessadas.', () => {
  it('Deve renderizar a página Inicial / Home', () => {
    const { getByText, history } = renderWithRouter(<App />);
    const pathname = history.location.pathname;
    expect(pathname).toBe(PATHNAME_PAGES.HOME);
    const homeContent = getByText(CONTENT_TEXT_PAGES.HOME);
    expect(homeContent).toBeInTheDocument();
  });
  
  it('Deve renderizar a página Sobre', () => {
    const { getByText, history } = renderWithRouter(<App />);
    fireEvent.click(getByText(LINK_TEXT_PAGES.ABOUT));
    const pathname = history.location.pathname;
    expect(pathname).toBe(PATHNAME_PAGES.ABOUT);
    const aboutContent = getByText(CONTENT_TEXT_PAGES.ABOUT);
    expect(aboutContent).toBeInTheDocument();
  });

  it('Deve renderizar a página Contatos', () => {
    const { getByText, history } = renderWithRouter(<App />);
    fireEvent.click(getByText(LINK_TEXT_PAGES.CONTACT));
    const pathname = history.location.pathname;
    expect(pathname).toBe(PATHNAME_PAGES.CONTACT);
    const contactContent = getByText(CONTENT_TEXT_PAGES.CONTACT);
    expect(contactContent).toBeInTheDocument();
  });

  it('Deve renderizar a página Projetos', () => {
    const { getByText, history } = renderWithRouter(<App />);
    fireEvent.click(getByText(LINK_TEXT_PAGES.PROJECTS));
    const pathname = history.location.pathname;
    expect(pathname).toBe(PATHNAME_PAGES.PROJECTS);
    const projectContent = getByText(CONTENT_TEXT_PAGES.PROJECTS);
    expect(projectContent).toBeInTheDocument();
  });

  it('deve testar um caminho não existente e a renderização do Not Found', () => {
    const { getByText, history } = renderWithRouter(<App />);
    history.push(PATHNAME_PAGES.NOT_FOUND);
    const noMatch = getByText(CONTENT_TEXT_PAGES.NOT_FOUND);
    expect(noMatch).toBeInTheDocument();
  });
});

describe('Teste que as páginas são renderizadas via chamada direta do componente.', () => {
  
  it('a página inicial é renderizada via componente', () => {
    const { getByText } = renderWithRouter(<Home />);
    expect(getByText(CONTENT_TEXT_PAGES.HOME)).toBeInTheDocument();
  });

  it('a página sobre é renderizada via componente', () => {
    const { getByText } = renderWithRouter(<About />);
    expect(getByText(CONTENT_TEXT_PAGES.ABOUT)).toBeInTheDocument();
  });

  it('a página contact é renderizada via componente', () => {
    const { getByText } = renderWithRouter(<Contact />);
    expect(getByText(CONTENT_TEXT_PAGES.CONTACT)).toBeInTheDocument();
  });

  it('a página projects é renderizada via componente', () => {
    const { getByText } = renderWithRouter(<Projects />);
    expect(getByText(CONTENT_TEXT_PAGES.PROJECTS)).toBeInTheDocument();
  });

});

describe('Teste que, ao clicar num componente, o texto do componente que estava renderizado some da tela', () => {
  
  it('Ao clicar em Sobre, o texto da Página Inicial não poderá estar na página.[Pag. Inicial > Pag. Sobre]', () => {
    const { getByText } = renderWithRouter(<App />);
    const homeContent = getByText(CONTENT_TEXT_PAGES.HOME);
    fireEvent.click(getByText(LINK_TEXT_PAGES.ABOUT));
    expect(homeContent).not.toBeInTheDocument();
  });

  it('Ao clicar em Contatos, o texto da Página Sobre não poderá estar na página.[Pag. Sobre > Pag. de Contatos]', () => {
    const { getByText } = renderWithRouter(<App />);
    fireEvent.click(getByText(LINK_TEXT_PAGES.ABOUT));
    const aboutContent = getByText(CONTENT_TEXT_PAGES.ABOUT);
    fireEvent.click(getByText(LINK_TEXT_PAGES.CONTACT));
    expect(aboutContent).not.toBeInTheDocument();
  });

  it('Ao clicar em Projetos, o texto da Página Contatos não poderá estar na página.[Pag. Contatos > Pag. de Projetos]', () => {
    const { getByText } = renderWithRouter(<App />);
    fireEvent.click(getByText(LINK_TEXT_PAGES.CONTACT));
    const contactContent = getByText(CONTENT_TEXT_PAGES.CONTACT);
    fireEvent.click(getByText(LINK_TEXT_PAGES.PROJECTS));
    expect(contactContent).not.toBeInTheDocument();
  });

  it('Ao clicar em Inicio, o texto da Página Projetos não poderá estar na página.[Pag. Projetos > Pag. Inicio]', () => {
    const { getByText } = renderWithRouter(<App />);
    fireEvent.click(getByText(LINK_TEXT_PAGES.PROJECTS));
    const projectContent = getByText(CONTENT_TEXT_PAGES.PROJECTS);
    fireEvent.click(getByText(LINK_TEXT_PAGES.HOME));
    expect(projectContent).not.toBeInTheDocument();
  });

});
