import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const Display = (props) => {
  const { result } = props;

  return <div className="Display">{result}</div>;
};
Display.defaultProps = {
  result: '0',
};
Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
