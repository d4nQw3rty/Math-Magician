import React from 'react';
import './App.css';
import Calculator from './components/Calculator';
import Home from './components/Home';

class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <section>
          <Calculator />
          <Home />
        </section>
      </div>
    );
  }
}

export default App;
