import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import '../App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
      error: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const { total, next, operation } = this.state;
    const data = { total, next, operation };
    const nextState = calculate(data, buttonName);
    if (nextState) {
      this.setState({ ...nextState });
    }
  }

  renderError() {
    const { error } = this.state;
    return error && <div className="error">{error}</div>;
  }

  render() {
    const { total, next, operation } = this.state;
    const result = `${(total == null ? '' : total) + (operation === null ? '' : operation)}${next === null ? '' : next}`;
    return (
      <div id="app" className="App">
        {this.renderError()}
        <Display result={result === '' ? '0' : result} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
