import React  from "react";
import Todos from "./Todos";

export default class App3 extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      todos: ["todo 1", "todo 2"]
    }
  }
  increment = () => {
    this.setState({count : this.state.count + 1});
  };
  render() {

    console.log("Todos first")


    return (
      <>
        <Todos todos={this.state.todos} />
        <hr />
        <div>
          Count: {this.state.count}
          <button onClick={this.increment}>+</button>
        </div>
      </>
    );


  }
}


