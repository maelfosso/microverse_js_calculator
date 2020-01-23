import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

function Button(props) {
  const { name, color, wide } = props;
  const width = wide ? '50%' : '25%';
  return <div className="Button" style={{backgroundColor: color, width: width}}>{name}</div>;
}
Button.defaultProps = {
  color: 'orange',
  wide: false,
}
Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
