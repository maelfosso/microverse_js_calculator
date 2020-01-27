import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import '../App.css';

const ButtonPanel = (props) => {
  const { clickHandler } = props;
  const buttons = [
    [{name:'AC', color: 'lg'},{name:'+/-', color: 'lg'},{name:'%', color: 'lg'},{name:'÷'}],
    [{name:'7', color: 'lg'},{name:'8', color: 'lg'},{name:'9', color: 'lg'},{name:'X'}],
    [{name:'4', color: 'lg'},{name:'5', color: 'lg'},{name:'6', color: 'lg'},{name:'-'}],
    [{name:'0', color: 'lg', wide: true},{name:'.', color: 'lg'},{name:'='}],
  ]

  const renderPanel = () => {
    return buttons.map((bs, i) => <div id={'group-' + i}>{renderButton(bs)}</div>)
  }
  const renderButton = (arr) => {
    return arr.map(b => <Button name={b.name} wide={b.wide && true} color={b.color && "lightgrey"} clickHandler={clickHandler} />);
  }

  return <div id="button-panel" className="ButtonPanel">{renderPanel()}</div>;
};
ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
