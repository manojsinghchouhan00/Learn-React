import React, { Component } from 'react'

export default class Work extends Component {
    constructor() {
        super();
        this.state = {
            work: ["demo-1", "demo-2", "demo-3", "demo-4"],
            list: {
                name: "carbecho.com",
                duration: "3 month",
                pay: 50000,
            }
        }
    }
    godata = () => {
        console.log("Go data function ")
        this.props.hendleProps(this.state)
    }
    render() {

        return (
            <>
                <h1>Work page</h1>
                <p>Pass props child to parrent</p>
                <button onClick={this.godata}>Pass data</button>
            </>
        )
    }
}
