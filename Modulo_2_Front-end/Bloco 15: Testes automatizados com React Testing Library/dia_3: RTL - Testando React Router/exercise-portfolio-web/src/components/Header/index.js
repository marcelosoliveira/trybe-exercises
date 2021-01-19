import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    const pages = [
      { name:'Inicio', path:'/' },
      { name:'Sobre', path:'/about' },
      { name:'Contatos', path:'/contact' },
      { name:'Projetos', path:'/projects' },
    ];
    return (
      <header>
        <ul>
          {pages.map(({ name, path }) => (
            <li key={name}>
              <Link to={path}>{name}</Link>
            </li>
          ))}
        </ul>
      </header>
    );
  };
}

export default Header;
