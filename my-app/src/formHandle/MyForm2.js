import { Component } from "react";

export default class MyForm2 extends Component {
    constructor() {
        super();
        this.state = {
            fname: "",
            lname: ""
        }
    }
    render() {
        const handleSubmit = (event) => {
            event.preventDefault();
            // document.write(`I am <u> ${this.state.fname} ${this.state.lname} </u>`);
            console.log(`I am ${this.state.fname} ${this.state.lname}.`);
            // alert(`The name you entered was: ${this.state.fname} ${this.state.lname}`);
        }

        return (
            < >

                <h1>Form 2 without form tag in react (child components)</h1>
                <label>Enter your name:
                    <input
                        type="text"
                        value={this.state.fname}
                        onChange={(e) => this.setState({ fname: e.target.value })}
                    />
                </label>
                <br /><br />
                <label>Enter your name:
                    <input
                        type="text"
                        value={this.state.lname}
                        onChange={(e) => this.setState({ lname: e.target.value })}
                    />
                </label><br /><br />

                {/* <input type="submit" /> */}
                <button onClick={handleSubmit}>submit</button>
            </>
        )
    }
}

