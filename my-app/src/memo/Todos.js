import React, { memo } from "react"; 

class Todos extends React.Component {
  render() {
    console.log("child render");
    return (
      <>
        <h2>My Todos </h2>
        {this.props.todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
      </>
    );
  }
}

export default memo(Todos);