import { Component } from "react";
import { Link } from "react-router-dom";

export default class MyForm extends Component {
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
            console.log(`I am <u> ${this.state.fname} ${this.state.lname} </u>`);
            // alert(`The name you entered was: ${this.state.fname} ${this.state.lname}`);
        }

        return (
            <>
                <h1>Parent component</h1>
                {/* Nexted routing */}
                <Link to="/form/form2"><button>Click Form 2 without form tag in react</button></Link>
                <br /><br />
                {/* Nexted routing */}
                <Link to="new">New</Link>  <br /><br />
                <Link to="new2">New2</Link>
                <br /><br />
                <form onSubmit={handleSubmit}>
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
                    </label>
                    <br /><br />
                    <input type="submit" />
                </form>
            </>
        )
    }
}

