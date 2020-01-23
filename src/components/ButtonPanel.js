import React from 'react';
import Button from './Button';
import '../App.css';

function ButtonPanel() {
  return (
    <div id="button-panel" className="ButtonPanel">
      <div id="group-1">
        <Button name="AC" color="lightgrey" />
        <Button name="+/-" color="lightgrey" />
        <Button name="%" color="lightgrey" />
        <Button name="÷" />
      </div>
      <div id="group-2">
        <Button name="7" color="lightgrey" />
        <Button name="8" color="lightgrey" />
        <Button name="9" color="lightgrey" />
        <Button name="X" />
      </div>
      <div id="group-3">
        <Button name="4" color="lightgrey" />
        <Button name="5" color="lightgrey" />
        <Button name="6" color="lightgrey" />
        <Button name="-" />
      </div>
      <div id="group-4">
        <Button name="1" color="lightgrey" />
        <Button name="2" color="lightgrey" />
        <Button name="3" color="lightgrey" />
        <Button name="+" />
      </div>
      <div id="group-5">
        <Button name="0" wide color="lightgrey" />
        <Button name="." color="lightgrey" />
        <Button name="=" />
      </div>
    </div>
  );
}

export default ButtonPanel;
