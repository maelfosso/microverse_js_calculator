import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const Button = (props) => {
  const { name, color, wide, clickHandler } = props;
  const width = wide ? '50%' : '25%';
  const style = { backgroundColor: color, width };

  // const handleClick = ({ name }) => clickHandler(name);

  return <div className="Button" style={style} onClick={() => clickHandler()}>{name}</div>;
}
Button.defaultProps = {
  color: 'orange',
  wide: false,
};
Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

export default Button;
