import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import '../App.css';

const ButtonPanel = (props) => {
  const { clickHandler } = props;


  return (
    <div id="button-panel" className="ButtonPanel">
      <div id="group-1">
        <Button name="AC" color="lightgrey" clickHandler={clickHandler} />
        <Button name="+/-" color="lightgrey" clickHandler={clickHandler} />
        <Button name="%" color="lightgrey" clickHandler={clickHandler} />
        <Button name="÷" clickHandler={clickHandler} />
      </div>
      <div id="group-2">
        <Button name="7" color="lightgrey" clickHandler={clickHandler} />
        <Button name="8" color="lightgrey" clickHandler={clickHandler} />
        <Button name="9" color="lightgrey" clickHandler={clickHandler} />
        <Button name="X" clickHandler={clickHandler} />
      </div>
      <div id="group-3">
        <Button name="4" color="lightgrey" clickHandler={clickHandler} />
        <Button name="5" color="lightgrey" clickHandler={clickHandler} />
        <Button name="6" color="lightgrey" clickHandler={clickHandler} />
        <Button name="-" clickHandler={clickHandler} />
      </div>
      <div id="group-4">
        <Button name="1" color="lightgrey" clickHandler={clickHandler} />
        <Button name="2" color="lightgrey" clickHandler={clickHandler} />
        <Button name="3" color="lightgrey" clickHandler={clickHandler} />
        <Button name="+" clickHandler={clickHandler} />
      </div>
      <div id="group-5">
        <Button name="0" wide color="lightgrey" clickHandler={clickHandler} />
        <Button name="." color="lightgrey" clickHandler={clickHandler} />
        <Button name="=" clickHandler={clickHandler} />
      </div>
    </div>
  );
};
ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
