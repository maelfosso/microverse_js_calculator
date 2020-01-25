import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const Button = (props) => {
  const {
    name, color, wide, clickHandler,
  } = props;
  const width = wide ? '50%' : '25%';
  const style = { backgroundColor: color, width };

  const handleClick = () => clickHandler();

  /* eslint-disable jsx-a11y/click-events-have-key-events */
  return <div role="button" tabIndex={name} className="Button" style={style} onClick={() => handleClick()}>{name}</div>;
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
