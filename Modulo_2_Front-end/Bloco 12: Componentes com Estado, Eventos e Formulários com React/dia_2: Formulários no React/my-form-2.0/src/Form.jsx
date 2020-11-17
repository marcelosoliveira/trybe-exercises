import React from "react";
import Input from "./Input";
import Select from "./Select";
import Div from "./Div";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      email: "",
      cpf: "",
      endereco: "",
      cidade: "",
      estado: "",
      moradia: "",
      resumo: "",
      cargo: "",
      descricao: "",
    };
  }

  handleState = ({ target }) => {
    const name = target.name;
    let value = target.type === "checkbox" ? target.checked : target.value;
    if (name === "nome") value = value.toUpperCase();
    if (name === "cpf") value = value.match(/^[0-9]/) ? value : "";
    this.setState({
      [name]: value,
    });
  };

  onblur = ({ target }) => {
    const name = target.name;
    let value = target.value;
    if (name === "cidade") value = value.match(/^\d/) ? "" : value;
    this.setState({
      cidade: value,
    });
  };

  cleanForm = () => {
    this.setState({
      nome: "",
      email: "",
      cpf: "",
      endereco: "",
      cidade: "",
      estado: "",
      moradia: "",
      resumo: "",
      cargo: "",
      descricao: "",
    });
  };

  sendForm = () => {
  const { nome, email, cpf, endereco, cidade, estado,
    moradia, resumo, cargo, descricao } = this.state;
  return (
    nome, email, cpf, endereco, cidade, estado,
    moradia, resumo, cargo, descricao
  );

  }

  render() {
    const names = ["nome", "email", "cpf", "endereco", "cidade"];
    return (
      <div>
        <fieldset>
          <legend>Dados Pessoais </legend>
          {names.map((name) => (
            <Input
              type="text"
              key={name}
              name={name}
              names={name.toUpperCase()}
              value={this.state[name]}
              onChange={name === "cidade" ? this.onblur : this.handleState}
              error={this.state[name] === "" ? "Campo obrigatório" : ""}
              max={
                name === "nome"
                  ? "40"
                  : name === "email"
                  ? "50"
                  : name === "cpf"
                  ? "11"
                  : name === "endereco"
                  ? "200"
                  : name === "cidade"
                  ? "28"
                  : "50"
              }
            />
          ))}
          <Select
            name="estado"
            names={"ESTADO"}
            value={this.state.estado}
            onChange={this.handleState}
            error={
              this.state.estado === "" || this.state.estado === "Selecione"
                ? "Campo obrigatório"
                : ""
            }
          />
          <div>
            <input
              type="radio"
              name="moradia"
              value="Casa"
              onChange={this.handleState}
              required
            />
            Casa
            <input
              type="radio"
              name="moradia"
              value="Apartamento"
              onChange={this.handleState}
              required
            />
            Apartamento
          <span>{this.state.moradia === '' ? <strong> Campo obrigatório</strong> : ''}</span>
          </div>
        </fieldset>
        <fieldset>
          <legend>Ultimo Emprego</legend>
          <div>
          Currículo:
            <textarea 
              name="resumo"
              value={this.state.resumo}
              onChange={this.handleState}
              cols="70" rows="7"
              max="1000" >            
            </textarea>
            <span>{this.state.resumo === "" ? <strong> Campo obrigatório</strong> : ""}</span>
          </div>
          <div>
          Cargo:
            <textarea name="cargo"
            value={this.state.cargo}
            onChange={this.handleState}
            maxLength="40" 
            cols="60" rows="3"
            onMouseDownCapture={() => alert('Preencha com cuidado esta informação.')} >
            </textarea>
            <span>{this.state.cargo === "" ? <strong> Campo obrigatório</strong> : ""}</span>
          </div>
          <div>
          Descrção:
            <textarea name="descricao"
            value={this.state.descricao}
            onChange={this.handleState}
            maxLength="500" 
            cols="70" rows="7"
            >
            </textarea>
            <span>{this.state.descricao === "" ? <strong> Campo obrigatório</strong> : ""}</span>
          </div>
        </fieldset>
        <button onClick={this.handleState} >Enviar Currículo</button>
        <button onClick={this.cleanForm} >Limpar</button>
        <Div  nome={this.state.nome}
          email={this.state.email}
          cpf={this.state.cpf}
          endereco={this.state.endereco}
          cidade={this.state.cidade}
          estado={this.state.estado}
          moradia={this.state.moradia}
          resumo={this.state.resumo}
          cargo={this.state.cargo}
          descricao={this.state.descricao}
        />
      </div>
    );
  }
}

export default Form;
