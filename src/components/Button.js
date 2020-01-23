import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

function Button(props) {
  const { name, color, wide } = props;
  const width = wide ? '50%' : '25%';
  const style = { backgroundColor: color, width };
  return <div className="Button" style={style}>{name}</div>;
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
