import React, { PureComponent } from 'react'
// import React, { Component } from 'react'

export default class child extends PureComponent {
    render() {
        console.log("Child Check-rendering")

        return (
            <>
                <div>child component :- {this.props.count}</div>
            </>

        )
    }
}
