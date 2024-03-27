import React from 'react';
import Child from './Child';

class Unmount extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }
  
  render() {
    let myComponent;
    if (this.state.show) {
      myComponent = <Child />;
    };
    return (
      <div>
        {myComponent}
        <button type="button" onClick={()=>this.setState({ show: !this.state.show })}>{this.state.show?"Delete Child component":"Create Child component"}</button>
      </div>
    );
  }
}

export default Unmount;
