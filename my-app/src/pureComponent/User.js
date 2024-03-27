import React, { Component } from 'react'
import Child from './child';

export default class User extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
    render() {
        console.log("User parrent Check rendering")
        return (
            <>
                <Child count={this.state.count} />
                <div>User Component :- {this.state.count}</div>
                <button onClick={() => this.setState({ count: this.state.count  })}>Count update</button>
                {/* <button onClick={() => this.setState({ count: this.state.count +1  })}>Count update</button> */}
            </>
        )
    }
}
