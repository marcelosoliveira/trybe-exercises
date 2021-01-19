import React, { Component } from 'react';

class FormRegisterBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validator: false,
    }
    this.getHandle = this.getHandle.bind(this);
    this.sendValues = this.sendValues.bind(this);
  }

  componentDidMount() {
    const { inputs } = this.props;
    inputs.forEach((input) => this.setState({ [input]: ''}));
  }

  getHandle({ target }) {
    const { name, value } = target;
    this.setState({ validator: true, [name]: value });
  }

  resetState() {
    const stateKeys = Object.keys(this.state);
    stateKeys.forEach((key) => {
      if (key !== 'validator') {
        this.setState({ [key]: ''});
      }
    })
  }

  sendValues() {
    const { callback } = this.props
    callback(this.state);
    this.resetState();
  }

  render() {
    const { boxMessage, buttons, inputs } = this.props;
    const { validator } = this.state;
    return (
      <div className="form">
        {/* boxMessage need to have a <div> with Class name "text" */}
        {boxMessage}
        <div className="form-sections-inputs">
          {inputs.map((input, index) => <input value={ validator ? this.state[input] : '' } key={ index } type={input === 'password' ? "password" : "text"} name={ input } placeholder={ input.toUpperCase() } onChange={ this.getHandle }/>)}
        </div>
        <div className="form-sections-buttons">
          {buttons.map((button, index) => <input key={ index } onClick={ this.sendValues } className="button" type="button" value={ button.toUpperCase() }/>)}
        </div>
      </div>
    );
  }
}

export default FormRegisterBox;
