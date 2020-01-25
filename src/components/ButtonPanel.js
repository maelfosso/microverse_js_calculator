import React from 'react';
import Button from './Button';
import '../App.css';

const ButtonPanel = (props) => {
  const { clickHandler } = props;
  
  handleClick = (buttonName) => {
    return clickHandler(buttonName);
  }

  return (
    <div id="button-panel" className="ButtonPanel">
      <div id="group-1">
        <Button name="AC" color="lightgrey" onClick={handleClick("AC")} />
        <Button name="+/-" color="lightgrey" onClick={handleClick("+/-")} />
        <Button name="%" color="lightgrey" onClick={handleClick("%")} />
        <Button name="÷" onClick={handleClick("÷")} />
      </div>
      <div id="group-2">
        <Button name="7" color="lightgrey" onClick={handleClick("7")} />
        <Button name="8" color="lightgrey" onClick={handleClick("8")} />
        <Button name="9" color="lightgrey" onClick={handleClick("9")} />
        <Button name="X" onClick={handleClick("X")} />
      </div>
      <div id="group-3">
        <Button name="4" color="lightgrey" onClick={handleClick("4")} />
        <Button name="5" color="lightgrey" onClick={handleClick("5")} />
        <Button name="6" color="lightgrey" onClick={handleClick("6")} />
        <Button name="-" onClick={handleClick("-")} />
      </div>
      <div id="group-4">
        <Button name="1" color="lightgrey" onClick={handleClick("1")} />
        <Button name="2" color="lightgrey" onClick={handleClick("2")} />
        <Button name="3" color="lightgrey" onClick={handleClick("3")} />
        <Button name="+" onClick={handleClick("+")} />
      </div>
      <div id="group-5">
        <Button name="0" wide color="lightgrey" onClick={handleClick("0")} />
        <Button name="." color="lightgrey" onClick={handleClick(".")} />
        <Button name="=" onClick={handleClick("=")} />
      </div>
    </div>
  );
}

export default ButtonPanel;
