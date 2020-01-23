import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

function Button(props) {
  const { name } = props;
  return <div className="Button">{name}</div>;
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
