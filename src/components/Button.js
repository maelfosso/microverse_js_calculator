import React from 'react';
import PropTypes from "prop-types";

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>{this.props.name}</div>
    );
  }
}

Button.defaultProps = {};

Button.propTypes = {
  name: PropTypes.string.isRequired
};

export default Button;
