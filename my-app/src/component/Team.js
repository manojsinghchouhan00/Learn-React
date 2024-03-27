import React from "react";
import Work from "./Work";
class Team extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Jay",
      age: 25,
      childData: []
    };
  }
  hendleProps = (data) => {
    // console.log("Team page :-", data)
    this.setState({ childData: data })
  }
  render() {
    // console.log(this.state.childData.list)
    return (
      <>
        <h2>Team page by uUsing state </h2>
        <p>I am a empoyee and my name is :- {this.state.name}! and age is {this.state.age}</p>
        <hr />
        <Work hendleProps={this.hendleProps} />
        <hr />

        <h2>child listing (Work page data)</h2>
        {this.state.childData.list &&
          <div>
            <p>Name : {this.state.childData.list.name}</p>
            <p>Duration : {this.state.childData.list.duration}</p>
            <p>Pay : {this.state.childData.list.pay}</p>
          </div>
        }
        <ul>
          {this.state.childData.work &&
            this.state.childData.work.map((ele,i) => <li key={i}>{ele}</li>)
          }
        </ul>
      </>
    );
  }
}

export default Team;