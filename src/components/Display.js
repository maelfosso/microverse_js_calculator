import React from 'react';

class Display extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>{this.props.result}</div>
    );
  }
  
}
export default Display;