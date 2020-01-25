import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
/* eslint-disable no-unused-vars */
import calculate from '../logic/calculate';
import '../App.css';

/* eslint-disable react/prefer-stateless-function */
class App extends React.Component {
  render() {
    return (
      <div id="app" className="App">
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
