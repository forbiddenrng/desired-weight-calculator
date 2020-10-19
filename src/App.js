import React from 'react';
import Calculator from './components/Calculator'
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div>
        <header>
          <h1 className="header">Desired Weight Calculator</h1>
        </header>
        <Calculator />
      </div>
    );
  }
}

export default App;

