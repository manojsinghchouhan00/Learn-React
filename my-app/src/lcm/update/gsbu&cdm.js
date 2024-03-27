import React from 'react';

export default class Csbu_CDM extends React.Component {
    constructor(props) {
        super(props);
        this.state = { favoritecolor: "blue" };
    }
    componentDidMount() {
        console.log("CDM", this.state.favoritecolor)
        setTimeout(() => {
        this.setState({ favoritecolor: "green" })
        }, 3000)
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("gsbu", prevProps, prevState)
        document.getElementById("div1").innerHTML =
            "Before the update, the favorite was " + prevState.favoritecolor;
        return "Man";
    }
    componentDidUpdate() {
        console.log("CDU")
        document.getElementById("div2").innerHTML =
            "The updated favorite is " + this.state.favoritecolor;
    }
    render() {
        console.log("render")

        return (
            <div>
                <h1>My Favorite Color is {this.state.favoritecolor}</h1>
                <div id="div1"></div>
                <div id="div2"></div>
            </div>
        );
    }
}
