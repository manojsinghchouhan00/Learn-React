import React from 'react';

export default class Update extends React.Component {
    constructor(props) {
        super(props);
        this.state = { color: "Yellow" };
        console.log("m1 Constructor :-", this.state.color)
    }
    static getDerivedStateFromProps(props, state) {
        console.log("m2 up1 getDerivedStateFromProps :-", state.color)
        return { color: props.myColor };
    }
    shouldComponentUpdate() {
        console.log("up2 shouldComponentUpdate Return true : render run by default false render not run")
        return false;
    }
    changeColor = () => {
        this.setState({ color: "blue" });
        console.warn(" changecolor :-", this.state.color)
    }
    render() {
        console.log("m3 render :-", this.state.color)

        return (
            <div>
                <h1>My Favorite Color is <span style={{background : this.state.color}}>{this.state.color}</span></h1>
                <button type="button" onClick={this.changeColor}>Change color</button>
            </div>
        );
    }
}