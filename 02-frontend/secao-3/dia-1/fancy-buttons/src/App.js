import React from 'react';
import './App.css';


class App extends React.Component {
  constructor() {
    super()
    this.oneClick = this.oneClick.bind(this);
    // PODEMOS USAR ESSE MODO DENTRO DO CONSTRUCTOR
    // this.state = {
    //   btn1: 0,
    //   btn2: 0,
    //   btn3: 0,
    // }
  }
  // OU PODEMOS USAR FORA DO CONSTRUCTOR TIRANDO O THIS
  state = {
    btn1: 0,
    btn2: 0,
    btn3: 0,
  }
  //USANDO FUNÇÃO COMUM É NESCESSARIO USAR "this.oneClick = this.oneClick.bind(this)" DENTRO DO CONSTRUCTOR
  oneClick() {
    this.setState((prevState, _props) => ({
      btn1: prevState.btn1 +1
    }))
  }

  // USANDO ARROW FUNCTION DENTRO DA CLASS NÃO É NESCESSARIO USAR "this.oneClick = this.oneClick.bind(this)" DENTRO DO CONSTRUCTOR

  // oneClick = () => {
  //   console.log(this);
  // }
  twoClick = () => {
    this.setState((prevState, _props) => ({
      btn2: prevState.btn2 + 2
    }));
  }
  threeClick = () => {
    // NUNCA ESQUECER DE USAR A FUNÇÃO setSate()
    this.setState((prevState, _props) => ({
      btn3: prevState.btn3 + 3
    }));
  }
  render() {
    // BOA PRÁTICA DESESTRUTURAR 
    const { btn1, btn2, btn3 } = this.state;
    return (
      <div>
        <button onClick={this.oneClick}>One</button>
        <button onClick={this.twoClick}>Two</button>
        <button onClick={this.threeClick}>Three</button>
        <p>{btn1}</p>
        <p>{btn2}</p>
        <p>{btn3}</p>
      </div>
    )
  }
}

export default App;
