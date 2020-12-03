import React from 'react';

class ImageDog extends React.Component {
  constructor(props) {
    super()
    this.state = {
      dogObj: undefined,
      name: '',
      storedDog: [],
    }
    this.fetchDog = this.fetchDog.bind(this);
  }

  async fetchDog() {
    const requestHeaders = {Headers: {Accept: "aplication/json" } };
    const requestReturn = await fetch('https://dog.ceo/api/breeds/image/random', requestHeaders);
    const requestObj = await requestReturn.json();

    this.setState({
      dogObj: requestObj,
    });
    const { message } = this.state.dogObj;
    const localSave = JSON.parse(localStorage.getItem('results'));
    localStorage.setItem('url', JSON.stringify(message));
    alert(localSave !== null ? localSave[1].split('/')[4].toUpperCase() : 
      message.split('/')[4].toUpperCase());
  }

  componentDidMount() {
    this.fetchDog();
  }

  shouldComponentUpdate(nextProps, nextState) {
    this.racaDog = nextState.dogObj.message.split('/')[4];
    if (this.racaDog.includes('terrier')) return false;
    return true;   
  }

  handlerState = ({ target }) => {
    const value = target.value;
    this.setState({
      name: value,
    });
  }

  saveNameResults = async () => {
      const { name, dogObj } = this.state;
    this.setState({
      storedDog: await [name, dogObj.message]
    });
    await localStorage.setItem('results', JSON.stringify(this.state.storedDog));
  }

  deleteNameResults = () => {
    localStorage.removeItem('results');
  }

  render() {
    const localSave = JSON.parse(localStorage.getItem('results'));
    const { dogObj, name } = this.state;
    const LoadingElement = <span>Loading...</span>;
    return (
      <div>
        <span>Nome do cachorro: </span>
        <input type="text" name="name" value={name} onChange={this.handlerState} /> 
        <button onClick={this.saveNameResults} >Salvar</button>
        <button onClick={this.deleteNameResults} >Deletar</button>        
          <div>
            <h3>{ localSave !== null ? localSave[0] : this.state.name }</h3>
            {dogObj ? <img src={ localSave !== null ? localSave[1] : dogObj.message } 
            alt="Dog Master" /> : LoadingElement}
          </div>
      </div>
    );
  }
}

export default ImageDog;
