import React from 'react';

class Child extends React.Component {
  componentWillUnmount() {
    alert("Child component is  unmounted.");
  }
  render() {
    return (
      <h1>Child component!</h1>
    );
  }
}

export default Child;
