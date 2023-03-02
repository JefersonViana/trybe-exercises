import React from 'react';
import './App.css';

class App extends React.Component {
  // constructor() {
  //   super()

  // }
  state = {
    btn1: 0,
  }
  oneClick = () => {
    this.setState((prevState, _props) => ({
      btn1: prevState.btn1 + 1
    }));
  }
  render() {
    const { btn1 } = this.state
    let color = '';
    let text = '';
    if (btn1 % 2 === 0) {
      color = 'blue';
      text = 'É par';
    } else {
      color = 'green';
      text = 'É ímpar';
    }
    return (
      <div>
        <button
          className={color}
          onClick={this.oneClick}
        >click</button>
        <p>{`${btn1} ${text}`}</p>
      </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <button></button>
//     </div>
//   );
// }

export default App;
