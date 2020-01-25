import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import '../App.css';

const ButtonPanel = (props) => {
  const { clickHandler } = props;

  const handleClick = (buttonName) => clickHandler(buttonName);

  return (
    <div id="button-panel" className="ButtonPanel">
      <div id="group-1">
        <Button name="AC" color="lightgrey" clickHandler={() => handleClick('AC')} />
        <Button name="+/-" color="lightgrey" clickHandler={() => handleClick('+/-')} />
        <Button name="%" color="lightgrey" oclickHandler={() => handleClick('%')} />
        <Button name="÷" clickHandler={() => handleClick('÷')} />
      </div>
      <div id="group-2">
        <Button name="7" color="lightgrey" clickHandler={() => handleClick('7')} />
        <Button name="8" color="lightgrey" clickHandler={() => handleClick('8')} />
        <Button name="9" color="lightgrey" clickHandler={() => handleClick('9')} />
        <Button name="X" clickHandler={() => handleClick('X')} />
      </div>
      <div id="group-3">
        <Button name="4" color="lightgrey" clickHandler={() => handleClick('4')} />
        <Button name="5" color="lightgrey" clickHandler={() => handleClick('5')} />
        <Button name="6" color="lightgrey" clickHandler={() => handleClick('6')} />
        <Button name="-" clickHandler={() => handleClick('-')} />
      </div>
      <div id="group-4">
        <Button name="1" color="lightgrey" clickHandler={() => handleClick('1')} />
        <Button name="2" color="lightgrey" clickHandler={() => handleClick('2')} />
        <Button name="3" color="lightgrey" clickHandler={() => handleClick('3')} />
        <Button name="+" clickHandler={() => handleClick('+')} />
      </div>
      <div id="group-5">
        <Button name="0" wide color="lightgrey" clickHandler={() => handleClick('0')} />
        <Button name="." color="lightgrey" clickHandler={() => handleClick('.')} />
        <Button name="=" clickHandler={() => handleClick('=')} />
      </div>
    </div>
  );
};
ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
