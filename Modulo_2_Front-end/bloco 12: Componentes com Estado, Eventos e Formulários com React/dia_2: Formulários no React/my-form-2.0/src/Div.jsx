import React from 'react';

class Div extends React.Component {
  render() {
    return (
      <div>
          Nome: {this.props.nome} <br/>
          Email: {this.props.email} <br/>
          CPF: {this.props.cpf} <br/>
          Endereco: {this.props.endereco} <br/>
          Cidade: {this.props.cidade} <br/>
          Estado: {this.props.estado} <br/>
          Moradia: {this.props.moradia} <br/>
          Resumo: {this.props.resumo} <br/>
          Cargo: {this.props.cargo} <br/>
          escrição: {this.props.descricao} <br/>
      </div>
    );
  }
}

export default Div;
