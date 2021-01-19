import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { clientReg } from '../redux/actions';

import toast from '../helpers/functions';

import FormRegisterBox from '../components/FormRegisterBox';

class ClientRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registerStatus: false,
      message: '',
    }
  }
  render() {
    const inputData = ['name', 'age', 'email'];
    const buttons = ['register client'];
    const { message } = this.state;
    const boxMessage = (
      <div className="text">
          <h2>Register Here Your Client</h2>
      </div>
    );

    const registerClient = ({ name, age, email }) => {
      const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.+-]+\.com$/;
      const regexNumber = /^[0-9]/;
      if (name !== '' && regexNumber.test(age) && regexEmail.test(email)) {
        const { cliReg } = this.props;
        cliReg(name, age, email);
        this.setState({message: 'Client registered'});
        toast();
      } else {
        this.setState({message: 'Please insert valid values!'});
        toast();
      }
    }

    return (
      <div className="grid">
        <div id="snackbar">{ message }</div>
        <div className="links">
          <Link className="link" to="/clients">Client List</Link>
        </div>
        <FormRegisterBox inputs={inputData} buttons={buttons} boxMessage={boxMessage} callback={registerClient} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  cliReg: (userName, userAge, userEmail ) => dispatch((clientReg(userName, userAge, userEmail))),
})

export default connect(null, mapDispatchToProps)(ClientRegister);
