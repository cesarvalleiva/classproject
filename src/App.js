import React from 'react';
import './App.css';
import Hijo from './components/hijo';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hola</h1>
        <Hijo nombre={'Roque'}/>
      </div>
    )
  }
}

export default App;
