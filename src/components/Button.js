import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const Button = (props) => {
  const {
    name, color, wide, clickHandler,
  } = props;
  const width = wide ? '50%' : '25%';
  const style = { backgroundColor: color, width };

  const handleClick = () => clickHandler(name);

  return <button type="button" tabIndex={name} className="Button" style={style} onClick={handleClick}>{name}</button>;
};
Button.defaultProps = {
  color: 'orange',
  wide: false,
};
Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
